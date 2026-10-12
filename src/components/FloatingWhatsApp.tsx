import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atalho para contato rápido no WhatsApp">
      <a
        href="https://wa.me/5555999361366"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp da clínica Animal Care"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#00B1B2] text-white shadow-xl hover:bg-[#009d9e] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#00B1B2]/40 group"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-[#00B1B2]" />
        <span className="text-sm font-bold hidden sm:inline-block pr-1">
          WhatsApp da Clínica
        </span>
      </a>
    </aside>
  );
};
