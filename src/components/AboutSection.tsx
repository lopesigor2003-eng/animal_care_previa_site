import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CLINIC_PHOTOS, ClinicPhoto } from '../data/clinicData';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Stethoscope,
  Microscope,
  HeartHandshake,
  Play,
  Pause,
  Clock,
  Sparkles,
} from 'lucide-react';

const SLIDE_DURATION_MS = 6000; // Exact 6 seconds requested

export const AboutSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modalPhoto, setModalPhoto] = useState<ClinicPhoto | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const activePhoto = CLINIC_PHOTOS[selectedIndex];
  const lastTimeRef = useRef<number>(Date.now());

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? CLINIC_PHOTOS.length - 1 : prev - 1));
    setProgress(0);
    lastTimeRef.current = Date.now();
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === CLINIC_PHOTOS.length - 1 ? 0 : prev + 1));
    setProgress(0);
    lastTimeRef.current = Date.now();
  }, []);

  // 6-second carousel timer and smooth progress calculation
  useEffect(() => {
    if (!isPlaying || isHovered) {
      lastTimeRef.current = Date.now();
      return;
    }

    lastTimeRef.current = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastTimeRef.current;

      if (elapsed >= SLIDE_DURATION_MS) {
        handleNext();
      } else {
        setProgress((elapsed / SLIDE_DURATION_MS) * 100);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, handleNext]);

  const selectSlide = (index: number) => {
    setSelectedIndex(index);
    setProgress(0);
    lastTimeRef.current = Date.now();
  };

  const handleImageError = (photoId: string) => {
    setImageErrors((prev) => ({ ...prev, [photoId]: true }));
  };

  return (
    <section
      id="sobre"
      className="py-16 md:py-24 bg-[#FFFFFF] relative overflow-hidden"
      aria-label="Sobre a Animal Care"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF2F3] neu-raised-sm mb-3 text-xs font-semibold text-[#00B1B2]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossa Estrutura e Propósito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6 [text-wrap:balance]">
            Sobre a Animal Care
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-[#ECF2F3] neu-raised p-6 sm:p-8 rounded-2xl border border-white/80">
            Aqui na Animal Care, além de todo amor e carinho que reservamos para o seu pet, dispomos de uma equipe especializada, técnica, altamente qualificada e uma estrutura de primeira, contando com os exames necessários para um diagnóstico completo!
          </p>
        </div>

        {/* 3 Pillars of Care */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Equipe Especializada</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Médicos veterinários em constante atualização com foco em medicina felina, diagnóstico e cirurgias precisas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] mb-4">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Estrutura Completa de Exames</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Agilidade na realização de ultrassom, exames laboratoriais e diagnósticos por imagem para início rápido do tratamento.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Atendimento Humanizado</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compreensão, acolhimento do tutor e ambiente confortável para diminuir o medo e a ansiedade dos animais.
            </p>
          </div>
        </div>

        {/* 6-Second Interactive Neumorphic Clinic Gallery (Formato Original) */}
        <div className="p-4 sm:p-8 rounded-3xl bg-[#ECF2F3] neu-raised-lg">
          {/* Gallery Top Navigation Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00B1B2]">
                  Conheça Nossas Instalações
                </span>
                <span className="text-slate-400">·</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-full border border-slate-200">
                  <Clock className="w-3 h-3 text-[#00B1B2]" />
                  Carrossel 6s
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Galeria da Clínica Animal Care
              </h3>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2.5 self-start md:self-auto">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-[#ECF2F3] neu-btn text-slate-700 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                aria-label={isPlaying ? 'Pausar carrossel automático de 6 segundos' : 'Reproduzir carrossel automático de 6 segundos'}
                title={isPlaying ? 'Pausar (6s)' : 'Reproduzir (6s)'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#ECF2F3] neu-btn text-slate-700 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                aria-label="Ver foto anterior da clínica"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Counter Indicator */}
              <span className="text-xs font-bold text-slate-600 px-2 tabular-nums">
                {selectedIndex + 1} / {CLINIC_PHOTOS.length}
              </span>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#ECF2F3] neu-btn text-slate-700 hover:text-[#00B1B2] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                aria-label="Ver próxima foto da clínica"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 6-Second Smooth Progress Bar */}
          <div className="w-full bg-slate-300/60 rounded-full h-1.5 mb-6 overflow-hidden">
            <div
              className="bg-[#00B1B2] h-full rounded-full transition-all duration-75 ease-linear"
              style={{ width: `${isPlaying && !isHovered ? progress : 100}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progresso da transição do carrossel (6 segundos)"
            />
          </div>

          {/* Featured Stage (Formato Original preserving full proportions) */}
          <div
            className="relative rounded-2xl overflow-hidden bg-slate-900 neu-inset-sm mb-6 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Stage backdrop blur */}
            <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

            {/* Display in Formato Original (object-contain with natural height) */}
            <div className="relative min-h-[380px] sm:min-h-[440px] md:h-[500px] w-full flex items-center justify-center p-2 sm:p-4">
              <img
                key={activePhoto.id}
                src={imageErrors[activePhoto.id] ? activePhoto.fallbackUrl : activePhoto.url}
                alt={activePhoto.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                onError={() => handleImageError(activePhoto.id)}
                className="max-h-[360px] sm:max-h-[420px] md:max-h-[480px] w-auto max-w-full object-contain rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-101"
              />
            </div>

            {/* Hover pause indicator */}
            {isHovered && isPlaying && (
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none animate-in fade-in">
                <Pause className="w-3 h-3" />
                <span>Pausado no cursor</span>
              </div>
            )}

            {/* Gradient Scrim & Information Bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 text-white pointer-events-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded-md border border-teal-500/30">
                      Formato Original · {activePhoto.dimensions} px
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 text-white">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl">
                    {activePhoto.caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setModalPhoto(activePhoto)}
                  className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white shrink-0 self-start sm:self-auto"
                  aria-label={`Ver foto completa em tela cheia: ${activePhoto.title}`}
                  title="Expandir foto"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails Grid (All in Formato Original Thumbnails) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CLINIC_PHOTOS.map((photo, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => selectSlide(index)}
                  className={`relative rounded-xl overflow-hidden p-1 transition-all duration-200 text-left bg-slate-900 flex flex-col justify-between ${
                    isSelected
                      ? 'ring-3 ring-[#00B1B2] neu-inset scale-102 bg-slate-800'
                      : 'opacity-70 hover:opacity-100 neu-raised-sm'
                  }`}
                  aria-label={`Selecionar foto ${index + 1}: ${photo.title} (${photo.dimensions})`}
                  aria-current={isSelected ? 'true' : 'false'}
                >
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center overflow-hidden rounded-lg bg-black/40">
                    <img
                      src={imageErrors[photo.id] ? photo.fallbackUrl : photo.url}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={() => handleImageError(photo.id)}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-1.5">
                    <span className="block text-[11px] font-bold text-white truncate">
                      {photo.title}
                    </span>
                    <span className="block text-[10px] text-teal-300 font-medium">
                      {photo.dimensions}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal / Lightbox for viewing photos in full uncropped resolution */}
      {modalPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada no formato original: ${modalPhoto.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#ECF2F3] rounded-3xl p-4 sm:p-6 neu-raised-lg text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  {modalPhoto.title}
                </h4>
                <span className="text-xs font-semibold text-[#00B1B2]">
                  Resolução Original: {modalPhoto.dimensions} px
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalPhoto(null)}
                className="p-2.5 rounded-full neu-btn text-slate-700 hover:text-red-500 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                aria-label="Fechar janela ampliada da imagem"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-black/90 max-h-[72vh] flex items-center justify-center p-2 mb-4">
              <img
                src={imageErrors[modalPhoto.id] ? modalPhoto.fallbackUrl : modalPhoto.url}
                alt={modalPhoto.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {modalPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
