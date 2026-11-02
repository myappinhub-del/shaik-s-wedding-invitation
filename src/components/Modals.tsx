import React, { useState, useEffect } from 'react';
import { X, Calendar as CalIcon, MapPin, Heart, Share2, Check, Download, Send, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { IslamicMedallion, GoldDivider } from './IslamicOrnaments';

// Rose Petals & Gold Confetti Trigger
export const triggerWeddingConfetti = () => {
  confetti({
    particleCount: 70,
    spread: 60,
    origin: { y: 0.6 },
    colors: ['#c5a059', '#e63946', '#f3e5ab', '#ff758f', '#072e21'],
  });
};

// 1. CALENDAR MODAL
export const CalendarModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const events = [
    {
      title: "Shaik's Haldi Ceremony",
      details: "Haldi Ceremony for Shaik Mahaboob Jani & Suhana Kareema",
      location: 'At Our Residence, Karempudi',
      startDate: '20261104T043000Z',
      endDate: '20261104T083000Z',
      displayDate: 'Wed, 4 Nov 2026 (Morning)',
      icsFilename: 'haldi-ceremony.ics',
    },
    {
      title: "Shaik's Nikah Ceremony",
      details: "Nikah Union of Shaik Mahaboob Jani & Suhana Kareema Aafreen",
      location: 'Moulana Abul Kalam Azad Urdu Ghar Cum Shadi Khana, Guntur',
      startDate: '20261105T053000Z', // 11:00 AM IST is 05:30 UTC
      endDate: '20261105T093000Z',
      displayDate: 'Thu, 5 Nov 2026 at 11:00 AM',
      icsFilename: 'nikah-ceremony.ics',
    },
    {
      title: "Shaik's Valima Lunch",
      details: "Valima Lunch celebrating Mahaboob Jani & Suhana Kareema",
      location: 'G.V.R. Kalyanamandapam, Karempudi',
      startDate: '20261107T063000Z', // 12:00 PM IST is 06:30 UTC
      endDate: '20261107T103000Z',
      displayDate: 'Sat, 7 Nov 2026 at 12:00 Noon',
      icsFilename: 'valima-reception.ics',
    },
  ];

  const downloadICS = (evt: typeof events[0]) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Shaik Wedding Invitation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${evt.title}
DESCRIPTION:${evt.details}
LOCATION:${evt.location}
DTSTART:${evt.startDate}
DTEND:${evt.endDate}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', evt.icsFilename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerWeddingConfetti();
  };

  const getGoogleCalendarUrl = (evt: typeof events[0]) => {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      evt.title
    )}&dates=${evt.startDate}/${evt.endDate}&details=${encodeURIComponent(
      evt.details
    )}&location=${encodeURIComponent(evt.location)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-[#fcfbf7] border-2 border-[#c5a059] rounded-xl shadow-2xl p-6 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#73521e] hover:text-[#072e21] p-1 rounded-full hover:bg-[#ebdcc0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <IslamicMedallion className="w-8 h-8 mx-auto mb-1 text-[#c5a059]" />
          <h3 className="text-xl font-cinzel font-bold text-[#072e21]">
            Save Wedding Dates
          </h3>
          <p className="text-xs text-[#6e5a42] mt-0.5 font-serif">
            Add to your Google or Apple calendar
          </p>
        </div>

        <div className="w-20 mx-auto my-2">
          <GoldDivider />
        </div>

        <div className="space-y-3 mt-3">
          {events.map((evt) => (
            <div
              key={evt.title}
              className="p-3 bg-[#f8f4ea] border border-[#d4af37]/40 rounded-lg flex flex-col gap-1.5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-cinzel font-bold text-[#072e21]">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-[#9b7228] font-semibold mt-0.5">
                    {evt.displayDate}
                  </p>
                  <p className="text-[11px] text-[#554634] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#9e7d3b] shrink-0" />
                    <span>{evt.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1.5 border-t border-[#c5a059]/20">
                <a
                  href={getGoogleCalendarUrl(evt)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-1 px-2 text-[11px] font-sans font-semibold text-center text-[#072e21] bg-white border border-[#c5a059]/50 rounded hover:bg-[#faf6ee] transition-colors flex items-center justify-center gap-1"
                >
                  <CalIcon className="w-3 h-3 text-[#c5a059]" />
                  <span>Google Cal</span>
                </a>
                <button
                  type="button"
                  onClick={() => downloadICS(evt)}
                  className="flex-1 py-1 px-2 text-[11px] font-sans font-semibold text-center text-[#f7e6b5] bg-[#072e21] rounded hover:bg-[#0c4733] transition-colors flex items-center justify-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>.iCal File</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. VENUE DIRECTIONS MODAL
export const VenueModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const venues = [
    {
      event: 'HALDI CEREMONY',
      date: 'Wednesday, 4 November 2026',
      name: 'Our Residence, Karempudi',
      description: 'Shaik Family Residence, Karempudi town, Palnadu/Guntur district.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Karempudi+Andhra+Pradesh',
    },
    {
      event: 'NIKHA UNION',
      date: 'Thursday, 5 November 2026 at 11:00 AM',
      name: 'Moulana Abul Kalam Azad Urdu Ghar Cum Shadi Khana',
      description: 'Major wedding hall located in Guntur city center, Andhra Pradesh.',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Moulana+Abul+Kalam+Azad+Urdu+Ghar+Cum+Shadi+Khana+Guntur',
    },
    {
      event: 'VALIMA RECEPTION (LUNCH)',
      date: 'Saturday, 7 November 2026 at 12:00 Noon',
      name: 'G.V.R. Kalyanamandapam, Karempudi',
      description: 'GVR Convention & Wedding Hall, Karempudi, Andhra Pradesh.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=GVR+Kalyanamandapam+Karempudi',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-[#fcfbf7] border-2 border-[#c5a059] rounded-xl shadow-2xl p-6 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#73521e] hover:text-[#072e21] p-1 rounded-full hover:bg-[#ebdcc0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <IslamicMedallion className="w-8 h-8 mx-auto mb-1 text-[#c5a059]" />
          <h3 className="text-xl font-cinzel font-bold text-[#072e21]">
            Event Locations &amp; Maps
          </h3>
          <p className="text-xs text-[#6e5a42] mt-0.5 font-serif">
            Direct GPS navigation directions for all 3 venues
          </p>
        </div>

        <div className="w-20 mx-auto my-2">
          <GoldDivider />
        </div>

        <div className="space-y-3 mt-3">
          {venues.map((venue) => (
            <div
              key={venue.event}
              className="p-3 bg-[#f8f4ea] border border-[#d4af37]/40 rounded-lg flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-cinzel font-bold text-[#9b7228] tracking-wider">
                  {venue.event}
                </span>
                <span className="text-[10px] text-[#6d5b46]">{venue.date}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-playfair font-bold text-[#072e21]">
                {venue.name}
              </h4>
              <p className="text-[11px] text-[#554634] leading-snug">
                {venue.description}
              </p>

              <div className="mt-1 pt-1.5 border-t border-[#c5a059]/20 flex justify-end">
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1 px-3 text-xs font-semibold text-[#072e21] bg-white hover:bg-[#f2ecdd] border border-[#c5a059]/60 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#9e7d3b]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#9e7d3b]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. RSVP & BLESSINGS (DUA) MODAL
export const RsvpModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState<string[]>(['Nikha', 'Valima']);
  const [blessings, setBlessings] = useState<
    { name: string; message: string; date: string }[]
  >([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('wedding_blessings');
    if (saved) {
      try {
        setBlessings(JSON.parse(saved));
      } catch {
        // ignore
      }
    } else {
      // Default heartwarming sample blessings
      setBlessings([
        {
          name: 'Janab Abdul Rasheed & Family',
          message:
            'Barakallahu lakuma wa baraka alaikuma wa jama’a bainakuma fee khair! Heartiest congratulations to dear Mahaboob Jani and Suhana Kareema.',
          date: 'Yesterday',
        },
        {
          name: 'Shaik Munwar & Farzana',
          message:
            'May Allah SWT shower endless peace, affection, and happiness on this blessed wedding. InshaAllah looking forward to the celebration!',
          date: '2 days ago',
        },
      ]);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newBlessing = {
      name: name.trim(),
      message: message.trim() || 'Congratulations and Mubarak to the couple!',
      date: 'Just now',
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem('wedding_blessings', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSubmitted(true);
    triggerWeddingConfetti();
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setMessage('');
    }, 2500);
  };

  const toggleEvent = (evt: string) => {
    if (attending.includes(evt)) {
      setAttending(attending.filter((x) => x !== evt));
    } else {
      setAttending([...attending, evt]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-[#fcfbf7] border-2 border-[#c5a059] rounded-xl shadow-2xl p-5 sm:p-6 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#73521e] hover:text-[#072e21] p-1 rounded-full hover:bg-[#ebdcc0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <IslamicMedallion className="w-8 h-8 mx-auto mb-1 text-[#c5a059]" />
          <h3 className="text-xl font-cinzel font-bold text-[#072e21]">
            Send Dua &amp; RSVP
          </h3>
          <p className="text-xs text-[#6e5a42] mt-0.5 font-serif">
            Convey your prayers &amp; wishes for Mahaboob &amp; Suhana
          </p>
        </div>

        <div className="w-20 mx-auto my-2">
          <GoldDivider />
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#072e21] text-[#f7e6b5] flex items-center justify-center text-xl shadow-md">
              ✓
            </div>
            <h4 className="text-lg font-cinzel font-bold text-[#072e21]">
              JazakAllah Khair!
            </h4>
            <p className="text-xs text-[#524434] max-w-xs mx-auto">
              Your heartfelt blessings and RSVP have been received with love by the Shaik family.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 mt-2">
            <div>
              <label className="block text-xs font-cinzel font-semibold text-[#072e21] mb-1">
                Your Full Name / Family Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Shaik Naseer & Family"
                className="w-full px-3 py-2 text-xs rounded border border-[#c5a059]/60 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
              />
            </div>

            <div>
              <label className="block text-xs font-cinzel font-semibold text-[#072e21] mb-1">
                Events you plan to attend
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Haldi (Nov 4)', 'Nikha (Nov 5)', 'Valima (Nov 7)'].map((evt) => {
                  const isChecked = attending.includes(evt.split(' ')[0]);
                  return (
                    <button
                      type="button"
                      key={evt}
                      onClick={() => toggleEvent(evt.split(' ')[0])}
                      className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer border ${
                        isChecked
                          ? 'bg-[#072e21] text-[#f7e6b5] border-[#072e21]'
                          : 'bg-white text-[#554634] border-[#c5a059]/50 hover:bg-[#faf4e6]'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}
                      {evt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-cinzel font-semibold text-[#072e21] mb-1">
                Your Heartfelt Dua &amp; Wishes
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="May Allah bless this union with eternal love, harmony, and barakah..."
                className="w-full px-3 py-2 text-xs rounded border border-[#c5a059]/60 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#072e21] hover:bg-[#0c4733] text-[#f7e6b5] font-cinzel font-bold text-xs tracking-wider uppercase rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Blessings &amp; RSVP</span>
            </button>
          </form>
        )}

        {/* Recent Blessings Wall */}
        <div className="mt-5 pt-4 border-t border-[#c5a059]/30">
          <h4 className="text-xs font-cinzel font-bold text-[#73521e] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#e63946]" />
            <span>Guest Blessings &amp; Duas</span>
          </h4>
          <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
            {blessings.map((b, idx) => (
              <div
                key={idx}
                className="p-2 bg-[#f8f4ea] border border-[#d4af37]/30 rounded text-xs"
              >
                <div className="flex justify-between items-center text-[11px] font-bold text-[#072e21]">
                  <span>{b.name}</span>
                  <span className="text-[10px] font-normal text-[#9e7d3b]">{b.date}</span>
                </div>
                <p className="text-[11px] text-[#4d3d2c] font-serif italic mt-0.5">
                  &ldquo;{b.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. SHARE INVITATION MODAL
export const ShareModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const invitationText =
    "You are cordially invited to celebrate the Nikah of Shaik Mahaboob Jani & Suhana Kareema Aafreen on 5th Nov 2026. View the animated royal wedding card:";

  const handleCopy = () => {
    navigator.clipboard.writeText(`${invitationText}\n${currentUrl}`);
    setCopied(true);
    triggerWeddingConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`${invitationText}\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-[#fcfbf7] border-2 border-[#c5a059] rounded-xl shadow-2xl p-6 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#73521e] hover:text-[#072e21] p-1 rounded-full hover:bg-[#ebdcc0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <IslamicMedallion className="w-8 h-8 mx-auto mb-1 text-[#c5a059]" />
        <h3 className="text-xl font-cinzel font-bold text-[#072e21]">
          Share Invitation
        </h3>
        <p className="text-xs text-[#6e5a42] mt-0.5 font-serif">
          Share this royal card with family &amp; friends
        </p>

        <div className="w-16 mx-auto my-2">
          <GoldDivider />
        </div>

        <div className="space-y-2.5 mt-4">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full py-2 px-3 bg-[#25D366] hover:bg-[#1fb355] text-white font-sans font-semibold text-xs rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-2 px-3 bg-[#072e21] hover:bg-[#0c4733] text-[#f7e6b5] font-cinzel font-semibold text-xs rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Invitation Link'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
