import React, { useState } from 'react';
import { TESTIMONIALS, Testimonial } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareHeart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 bg-[#ECF2F3]/40 relative overflow-hidden"
      aria-label="Depoimentos e Avaliações de Clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF2F3] neu-raised-sm mb-3 text-xs font-semibold text-[#00B1B2]">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Avaliações Verificadas em Santa Maria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 [text-wrap:balance]">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Histórias de carinho e confiança.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#ECF2F3] neu-raised-lg relative">
            {/* Soft decorative quote watermark */}
            <div className="absolute top-6 right-8 text-[#00B1B2]/15 pointer-events-none">
              <Quote className="w-20 h-20 rotate-180" />
            </div>

            {/* Testimonial Active Card */}
            <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">5.0 / 5.0</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
                  "{current.content}"
                </blockquote>
              </div>

              {/* Author & Pet Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/70">
                <div className="flex items-center gap-3.5">
                  {/* Mock profile photo avatar */}
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#00B1B2] to-[#0D9488] neu-raised p-0.5 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                    <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center">
                      {current.initials}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base">{current.author}</div>
                    <div className="text-xs text-[#00B1B2] font-semibold">
                      {current.pet || 'Avaliação Verificada'}
                    </div>
                    <div className="text-[11px] text-slate-400">{current.date} · Google Maps</div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-[#ECF2F3] neu-btn text-slate-700 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-slate-500 px-2 tabular-nums">
                    {currentIndex + 1} de {TESTIMONIALS.length}
                  </span>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-[#ECF2F3] neu-btn text-slate-700 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2.5 mt-6">
            {TESTIMONIALS.map((t: Testimonial, idx: number) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-8 bg-[#00B1B2] shadow-sm'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1} de ${t.author}`}
                  aria-current={isActive ? 'true' : 'false'}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
