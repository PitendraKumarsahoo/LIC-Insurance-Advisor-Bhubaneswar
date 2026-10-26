import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { AGENT_DATA } from '../data/agent';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 shadow-lg flex items-center gap-3">
        <a
          href={`tel:${AGENT_DATA.phone}`}
          className="flex-1 bg-[#0B3C8C] hover:bg-[#093275] active:bg-[#072455] text-white py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
        >
          <Phone className="w-4 h-4 text-amber-300" />
          <span>Call Advisor</span>
        </a>
        <a
          href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(AGENT_DATA.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#1faa4f] active:bg-[#188c40] text-white py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(AGENT_DATA.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30"
          aria-label="Direct WhatsApp Consultation"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
          </span>
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <div className="text-left pr-1">
            <p className="text-[10px] text-emerald-100 font-medium leading-none">Quick Assistance</p>
            <p className="text-xs font-bold leading-tight">Chat on WhatsApp</p>
          </div>
        </a>
      </div>
    </>
  );
};
