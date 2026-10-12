import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', ariaLabel: 'Ir para a seção Inicial' },
    { label: 'Sobre', href: '#sobre', ariaLabel: 'Ir para a seção Sobre Nós' },
    { label: 'Serviços', href: '#servicos', ariaLabel: 'Ir para a seção Nossos Serviços' },
    { label: 'Depoimentos', href: '#depoimentos', ariaLabel: 'Ir para a seção Depoimentos de Clientes' },
    { label: 'Contato', href: '#contato', ariaLabel: 'Ir para a seção Fale Conosco e Localização' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECF2F3] shadow-xs">
      {/* Top micro-bar for quick contact info */}
      <div className="bg-[#ECF2F3] border-b border-slate-200/50 py-1.5 px-4 text-xs text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#00B1B2]" />
              Seg a Sex: 09h–12h30 / 14h–18h30 · Sáb: 09h–12h30
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-600">
              Av. Nossa Sra. Medianeira, 1567 – Santa Maria / RS
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-[#00B1B2]">
            <a
              href="https://wa.me/5555999361366"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#00898A] transition-colors"
              aria-label="Conversar no WhatsApp da Animal Care"
            >
              <Phone className="w-3.5 h-3.5" />
              (55) 99936-1366
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo container */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2] rounded-xl p-1"
            aria-label="Animal Care Veterinária - Página Inicial"
          >
            <div className="p-1 rounded-xl bg-[#ECF2F3] neu-raised-sm flex items-center justify-center">
              <img
                src="https://i.postimg.cc/wTkFRYFj/305568770-615110263471753-1068013473686653478-n.png"
                alt="Logotipo Animal Care Veterinária"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto max-w-[130px] object-contain transition-transform group-hover:scale-102"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#00B1B2] transition-colors">
                Animal Care
              </span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                Veterinária
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#ECF2F3] neu-inset-sm"
            aria-label="Navegação Principal do Site"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-[#00B1B2] hover:bg-white/80 rounded-full transition-all duration-200 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Action button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5555999361366"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agende uma consulta via WhatsApp com a Animal Care"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold neu-teal-btn focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00B1B2]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agende uma Consulta</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#ECF2F3] neu-btn text-slate-700 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-slate-200 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5 mb-4" aria-label="Menu móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:text-[#00B1B2] hover:bg-[#ECF2F3] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5555999361366"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Agende uma consulta no WhatsApp"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold neu-teal-btn text-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Agende pelo WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
