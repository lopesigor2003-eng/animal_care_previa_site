import React from 'react';
import { ShieldCheck, Heart, Sparkles, MessageCircle, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-slate-100 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/VLF40P46/301898718-615110266805086-5823584350790318582-n.png')",
      }}
      aria-label="Apresentação Animal Care Veterinária"
    >
      {/* Background image element with soft overlay */}
      <img
        src="https://i.postimg.cc/VLF40P46/301898718-615110266805086-5823584350790318582-n.png"
        alt="Pet recebendo carinho na Animal Care"
        loading="lazy"
        decoding="async"
        className="hero-background-image absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Soft gradient overlay for text readability and Neumorphism depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/90 to-white/75 backdrop-blur-[2px] pointer-events-none" />
      <div className="absolute inset-0 bg-[#ECF2F3]/40 pointer-events-none" />

      {/* Subtle Neumorphic background light spots */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00B1B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF2F3] neu-raised-sm mb-6 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00B1B2] text-white">
                <Heart className="w-3 h-3 fill-white" />
              </span>
              <span>Medicina Veterinária de Alta Qualidade · Santa Maria, RS</span>
            </div>

            {/* Unique single H1 as strictly required */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-bold tracking-tight text-slate-900 leading-[1.18] mb-5 [text-wrap:balance]">
              Animal Care: Cuidado e Carinho que Seu Pet Merece.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-normal">
              Uma equipe especializada e estrutura de primeira para a saúde e bem-estar do seu melhor amigo.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00B1B2] shrink-0" />
                <span>Equipe multidisciplinar e atenciosa</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00B1B2] shrink-0" />
                <span>Exames laboratoriais e imagem</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00B1B2] shrink-0" />
                <span>Especialidade em geriatria felina</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00B1B2] shrink-0" />
                <span>Castração segura e monitorada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#servicos"
                aria-label="Ir para a seção Nossos Serviços para conhecer os atendimentos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold neu-btn text-slate-800 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2] transition-colors"
              >
                <span>Nossos Serviços</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5555999361366"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale Conosco pelo WhatsApp para tirar dúvidas ou agendar"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold neu-teal-btn focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00B1B2]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
            </div>

            {/* Fast Location Trust Marker */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-[#00B1B2] shrink-0" />
              <span>Av. Nossa Sra. Medianeira, 1567 · Fácil acesso e estacionamento em Santa Maria</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with specified background image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Neumorphic base card container */}
              <div className="p-3 sm:p-4 rounded-3xl bg-[#ECF2F3] neu-raised-lg relative">
                {/* Decorative Soft UI glow ring */}
                <div className="relative rounded-2xl overflow-hidden shadow-inner bg-white/95 flex items-center justify-center min-h-[360px] sm:min-h-[420px] border border-white/80">
                  {/* Hero card image requested by user */}
                  <img
                    src="https://i.postimg.cc/wTkFRYFj/305568770-615110263471753-1068013473686653478-n.png"
                    alt="Animal Care Veterinária"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[360px] sm:h-[420px] object-contain p-6 sm:p-8 transform hover:scale-103 transition-transform duration-500"
                  />

                  {/* Scrim overlay information with high contrast on white card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-[#ECF2F3]/90 border border-white/80 text-slate-800 shadow-xs">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#00B1B2] mb-0.5">
                      Amor, Técnica & Diagnóstico
                    </p>
                    <p className="text-xs sm:text-sm font-medium leading-snug text-slate-700">
                      Estrutura acolhedora pensada para o alívio e a saúde do seu pet em cada momento.
                    </p>
                  </div>
                </div>

                {/* Floating Neumorphic Trust Card 1 */}
                <div className="absolute -top-4 -right-3 sm:-right-5 bg-[#ECF2F3] neu-raised p-3 sm:p-3.5 rounded-2xl border border-white/80 max-w-[200px] hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00B1B2] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">100% Confiável</div>
                    <div className="text-[11px] text-slate-500 leading-tight">Clínica & Exames</div>
                  </div>
                </div>

                {/* Floating Neumorphic Trust Card 2 */}
                <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-[#ECF2F3] neu-raised p-3 sm:p-3.5 rounded-2xl border border-white/80 max-w-[220px] hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Cuidado Integral</div>
                    <div className="text-[11px] text-slate-500 leading-tight">De filhotes a idosos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
