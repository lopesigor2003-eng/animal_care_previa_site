import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    tutorName: '',
    petName: '',
    petType: 'Cão',
    service: 'Exames de Rotina',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Olá equipe Animal Care!
Me chamo ${formData.tutorName || 'Tutor'}.
Meu pet é um(a) ${formData.petType} chamado(a) ${formData.petName || 'Pet'}.
Gostaria de agendar: ${formData.service}.
Observações: ${formData.notes || 'Sem observações adicionais.'}`;

    const waUrl = `https://wa.me/5555999361366?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-[#FFFFFF] relative overflow-hidden"
      aria-label="Fale Conosco e Localização"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF2F3] neu-raised-sm mb-3 text-xs font-semibold text-[#00B1B2]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Estamos Prontos para Receber Seu Pet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 [text-wrap:balance]">
            Fale Conosco e Visite-nos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Agende uma consulta ou venha conhecer nossa estrutura completa em Santa Maria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Endereço</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Avenida Nossa Sra. Medianeira, 1567 - Nossa Sra. Medianeira, Santa Maria - RS, 97060-003
                </p>
                <a
                  href="https://maps.google.com/?q=Avenida+Nossa+Sra.+Medianeira,+1567+-+Nossa+Sra.+Medianeira,+Santa+Maria+-+RS,+97060-003"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir localização no Google Maps"
                  className="inline-block mt-2 text-xs font-bold text-[#00B1B2] hover:underline"
                >
                  Ver rota no Google Maps →
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Telefone / WhatsApp</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Atendimento direto para agendamentos e esclarecimento de dúvidas:
                </p>
                <a
                  href="https://wa.me/5555999361366"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar no WhatsApp com o número (55) 99936-1366"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl neu-teal-btn text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>(55) 99936-1366</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-base font-bold text-slate-900 mb-2">Horário de Atendimento</h3>
                <div className="space-y-1.5 text-sm text-slate-700">
                  <div className="flex justify-between border-b border-slate-200/60 pb-1">
                    <span className="font-medium">Segunda a Sexta:</span>
                    <span className="tabular-nums font-semibold text-slate-800">
                      09:00–12:30, 14:00–18:30
                    </span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-medium">Sábado:</span>
                    <span className="tabular-nums font-semibold text-slate-800">09:00–12:30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 rounded-2xl bg-[#ECF2F3] neu-raised flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white neu-inset-sm flex items-center justify-center text-[#00B1B2] shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Siga no Instagram</h3>
                  <p className="text-xs text-slate-500">Dicas de saúde e rotina da clínica</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/animalcaresm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visite nosso Instagram @animalcaresm"
                className="px-4 py-2 rounded-xl bg-[#ECF2F3] neu-btn text-xs font-bold text-[#00B1B2] hover:text-[#00898A]"
              >
                @animalcaresm
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Schedule Form & Map */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Quick Consultation Request Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#ECF2F3] neu-raised">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Pré-Agendamento Rápido
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Preencha os dados do seu pet para iniciar o atendimento no WhatsApp com mensagem personalizada.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-white/80 border border-teal-200 text-center animate-in fade-in">
                  <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 text-[#00B1B2] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Mensagem gerada com sucesso!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">
                    O WhatsApp foi aberto para enviar seus dados à equipe da Animal Care.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-full neu-btn text-slate-700"
                  >
                    Fazer novo agendamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tutorName" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Seu Nome Completo
                      </label>
                      <input
                        id="tutorName"
                        type="text"
                        required
                        placeholder="Ex: Amanda Silva"
                        value={formData.tutorName}
                        onChange={(e) => setFormData({ ...formData, tutorName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl neu-inset bg-[#ECF2F3] text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#00B1B2]"
                      />
                    </div>

                    <div>
                      <label htmlFor="petName" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nome do Pet
                      </label>
                      <input
                        id="petName"
                        type="text"
                        required
                        placeholder="Ex: Thor, Mel, Luna..."
                        value={formData.petName}
                        onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl neu-inset bg-[#ECF2F3] text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#00B1B2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="petType" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Espécie
                      </label>
                      <select
                        id="petType"
                        value={formData.petType}
                        onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl neu-inset bg-[#ECF2F3] text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#00B1B2]"
                      >
                        <option value="Cão">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Outro">Outro pet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Serviço Desejado
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl neu-inset bg-[#ECF2F3] text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#00B1B2]"
                      >
                        <option value="Exames de Rotina">Exames de Rotina</option>
                        <option value="Geriatria para Felinos">Geriatria para Felinos</option>
                        <option value="Castração">Castração</option>
                        <option value="Consulta Clínica Geral">Consulta Clínica Geral</option>
                        <option value="Outros Cuidados">Outros Cuidados</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sintomas ou Observações (opcional)
                    </label>
                    <textarea
                      id="notes"
                      rows={2}
                      placeholder="Ex: Gostaria de agendar para o turno da tarde; vacinação pendente..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-xl neu-inset bg-[#ECF2F3] text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#00B1B2]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold neu-teal-btn flex items-center justify-center gap-2 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B1B2]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Agendamento via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Google Maps Embed */}
            <div className="p-4 sm:p-5 rounded-3xl bg-[#ECF2F3] neu-raised">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Localização da Clínica
                </span>
                <span className="text-xs text-slate-500">Santa Maria - RS</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden neu-inset aspect-16/9 w-full bg-slate-200">
                <iframe
                  title="Mapa de Localização Animal Care Veterinária"
                  src="https://maps.google.com/maps?q=Avenida%20Nossa%20Sra.%20Medianeira,%201567,%20Santa%20Maria,%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
