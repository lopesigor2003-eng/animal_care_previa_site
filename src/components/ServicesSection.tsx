import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/clinicData';
import { MessageCircle, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de tirar dúvidas e agendar o serviço de ${serviceTitle} para o meu pet na Animal Care.`
    );
    return `https://wa.me/5555999361366?text=${text}`;
  };

  return (
    <section
      id="servicos"
      className="py-16 md:py-24 bg-[#ECF2F3]/40 relative overflow-hidden"
      aria-label="Nossos Serviços Veterinários"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF2F3] neu-raised-sm mb-3 text-xs font-semibold text-[#00B1B2]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Medicina Veterinária Especializada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 [text-wrap:balance]">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Cuidado completo para a saúde e bem-estar do seu pet.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="space-y-12">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const isReversed = index % 2 === 1;
            const isLongText = service.description.length > 280;
            const isExpanded = expandedCards[service.id];

            return (
              <article
                key={service.id}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#ECF2F3] neu-raised transition-all duration-300 hover:shadow-2xl"
                aria-labelledby={`service-heading-${service.id}`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden neu-img-frame group bg-slate-100">
                      <img
                        src={service.imageUrl}
                        alt={
                          service.id === 'exames-rotina'
                            ? 'Pet fazendo exame de rotina'
                            : service.id === 'geriatria-felinos'
                            ? 'Gato idoso sendo cuidado'
                            : 'Veterinário preparando pet para castração'
                        }
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECF2F3]/95 backdrop-blur-xs text-[#00B1B2] shadow-sm">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col items-start ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00B1B2]">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3
                      id={`service-heading-${service.id}`}
                      className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                    >
                      {service.title}
                    </h3>

                    {/* Exact text requested */}
                    <div className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      <p className={!isExpanded && isLongText ? 'line-clamp-4' : ''}>
                        {service.description}
                      </p>
                      {isLongText && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(service.id)}
                          className="mt-2 text-xs font-bold text-[#00B1B2] hover:underline inline-flex items-center gap-1 focus:outline-hidden"
                          aria-label={isExpanded ? `Recolher descrição de ${service.title}` : `Ler descrição completa de ${service.title}`}
                        >
                          {isExpanded ? (
                            <>
                              <span>Ver menos</span>
                              <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              <span>Ler texto completo</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Highlights bullet points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full">
                      {service.highlights.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                          <div className="w-4 h-4 rounded-full bg-[#00B1B2]/15 text-[#00B1B2] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a
                      href={getWhatsAppServiceLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Agendar ${service.title} via WhatsApp com a equipe da Animal Care`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold neu-teal-btn focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00B1B2]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agendar {service.title} no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
