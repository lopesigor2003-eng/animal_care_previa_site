import React from 'react';
import { Instagram, Phone, MapPin, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ECF2F3] border-t border-slate-200/80 pt-16 pb-12" aria-label="Rodapé do site">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-300/60">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1 rounded-xl bg-white neu-raised-sm flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/wTkFRYFj/305568770-615110263471753-1068013473686653478-n.png"
                  alt="Logotipo Animal Care Veterinária"
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto max-w-[110px] object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900 block">Animal Care</span>
                <span className="text-xs font-semibold text-[#00B1B2] uppercase tracking-wider block">
                  Veterinária
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-sm">
              Cuidado, carinho e tecnologia para a saúde e a longevidade do seu melhor amigo em Santa Maria, RS.
            </p>

            <a
              href="https://www.instagram.com/animalcaresm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite nosso Instagram @animalcaresm"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ECF2F3] neu-btn text-xs font-bold text-slate-700 hover:text-[#00B1B2]"
            >
              <Instagram className="w-4 h-4 text-[#00B1B2]" />
              <span>@animalcaresm no Instagram</span>
            </a>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  aria-label="Ir para a página inicial da Animal Care"
                  className="text-slate-600 hover:text-[#00B1B2] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  aria-label="Ir para a seção Sobre Nós"
                  className="text-slate-600 hover:text-[#00B1B2] transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  aria-label="Ir para a seção Serviços"
                  className="text-slate-600 hover:text-[#00B1B2] transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  aria-label="Ir para a seção Depoimentos"
                  className="text-slate-600 hover:text-[#00B1B2] transition-colors"
                >
                  O que Nossos Clientes Dizem
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  aria-label="Ir para a seção Contato e Localização"
                  className="text-slate-600 hover:text-[#00B1B2] transition-colors"
                >
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Col */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Informações de Contato
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00B1B2] shrink-0 mt-0.5" />
                <span>
                  Avenida Nossa Sra. Medianeira, 1567 - Nossa Sra. Medianeira, Santa Maria - RS, 97060-003
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00B1B2] shrink-0" />
                <a
                  href="https://wa.me/5555999361366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00B1B2] transition-colors font-medium text-slate-800"
                  aria-label="Ligue ou chame no WhatsApp (55) 99936-1366"
                >
                  (55) 99936-1366
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00B1B2] shrink-0 mt-0.5" />
                <span>
                  Seg a Sex: 09:00–12:30, 14:00–18:30 <br />
                  Sábado: 09:00–12:30
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; 2026 Animal Care - Veterinária. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-slate-600">
            <span>Cuidado feito com</span>
            <Heart className="w-3.5 h-3.5 fill-[#00B1B2] text-[#00B1B2]" />
            <span>em Santa Maria - RS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
