/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-slate-800 font-sans selection:bg-[#00B1B2] selection:text-white">
      {/* Semantic Accessible Header */}
      <Header />

      {/* Semantic Accessible Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section with single <h1> */}
        <Hero />

        {/* 2. Sobre Nós Section */}
        <AboutSection />

        {/* 3. Nossos Serviços Section */}
        <ServicesSection />

        {/* 4. Depoimentos de Clientes Section */}
        <TestimonialsSection />

        {/* 5. Contato e Localização Section */}
        <ContactSection />
      </main>

      {/* Semantic Accessible Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
