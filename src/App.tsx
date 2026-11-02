/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { InvitationFrame } from './components/InvitationFrame';

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-[#03150e] text-[#2c2016] relative flex items-center justify-center overflow-hidden selection:bg-[#c5a059]/30"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(6, 38, 27, 0.8), rgba(2, 14, 10, 0.98)), url('/src/assets/images/emerald_gold_backdrop_1793616236409.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Ambient Gold Glows */}
      <div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#c5a059]/10 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Pure Full-Screen Animated Wedding Invitation Card */}
      <main className="w-full h-screen flex items-center justify-center p-2 z-10">
        <InvitationFrame />
      </main>
    </div>
  );
}
