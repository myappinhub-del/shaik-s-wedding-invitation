import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Play peaceful ambient wedding notes (Santoor/Flute-like micro-harmonies)
  const startWeddingMelody = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      isPlayingRef.current = true;
      setIsPlaying(true);

      // Warm Tanpura Drone (Sa & Pa: D3 = 146.83 Hz, A3 = 220 Hz)
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.04, ctx.currentTime);
      droneGain.connect(ctx.destination);

      const osc1 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(146.83, ctx.currentTime);
      osc1.connect(droneGain);
      osc1.start();

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(220, ctx.currentTime);
      osc2.connect(droneGain);
      osc2.start();

      // Pentatonic / Raga Yaman notes frequencies:
      // D4, E4, F#4, A4, B4, C#5, D5
      const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 554.37, 587.33];

      const playPluck = () => {
        if (!isPlayingRef.current) return;
        const now = ctx.currentTime;
        const noteFreq = notes[Math.floor(Math.random() * notes.length)];

        // Plucked acoustic bell/santoor string
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(noteFreq, now);

        // Envelope: soft attack, natural exponential decay
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);

        // Schedule next note between 700ms and 1900ms
        const nextDelay = 800 + Math.random() * 1200;
        timerRef.current = window.setTimeout(playPluck, nextDelay);
      };

      playPluck();
    } catch {
      // Audio autoplay policy fallback
      setIsPlaying(false);
    }
  };

  const stopMelody = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch {
        // ignore
      }
      audioCtxRef.current = null;
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      startWeddingMelody();
    }
  };

  useEffect(() => {
    return () => {
      stopMelody();
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleAudio}
        className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-2 text-xs font-cinzel font-medium cursor-pointer shadow-md ${
          isPlaying
            ? 'bg-[#c5a059] text-[#072e21] border-[#f5e5b8] ring-2 ring-[#c5a059]/40'
            : 'bg-[#072e21]/90 text-[#f3e5ab] border-[#c5a059]/40 hover:border-[#c5a059]'
        }`}
        title={isPlaying ? 'Mute ambient royal wedding music' : 'Play peaceful ambient music'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#072e21]" />
            <span className="hidden sm:inline">Music: Playing</span>
            <span className="sm:hidden">Music</span>
            {/* Visualizer bars */}
            <span className="flex items-center gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 h-full bg-[#072e21] animate-pulse" />
              <span className="w-0.5 h-2 bg-[#072e21] animate-bounce" />
              <span className="w-0.5 h-3 bg-[#072e21] animate-pulse" />
            </span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="hidden sm:inline">Play Shehnai / Music</span>
            <span className="sm:hidden">Music</span>
            <VolumeX className="w-3 h-3 opacity-60" />
          </>
        )}
      </button>
    </div>
  );
};
