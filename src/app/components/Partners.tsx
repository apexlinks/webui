import React from 'react';
// This connects to your existing language switcher
import { useLanguage } from '@/app/context/LanguageContext';

export const Partners = () => {
  const { language } = useLanguage();

  // 1. Translation Dictionary
  const content = {
    en: {
      title: "Our Strategic Partners",
    },
    ar: {
      title: "شركاء النجاح",
    }
  };

  // 2. The Logos (Clean, professional placeholders)
  const partners = [
    { name: "Aura", logo: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
    { name: "Vibe", logo: "https://cdn.worldvectorlogo.com/logos/v-5.svg" },
    { name: "Nexus", logo: "https://cdn.worldvectorlogo.com/logos/target-6.svg" },
    { name: "Flux", logo: "https://cdn.worldvectorlogo.com/logos/pulse-2.svg" },
  ];

  return (
    <section className="py-12 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 3. Title - Checks language to decide spacing */}
        <p className={`
          text-center text-xs font-medium uppercase text-white/40 mb-10
          ${language === 'ar' ? 'font-sans tracking-normal text-sm' : 'tracking-[0.3em]'}
        `}>
          {content[language].title}
        </p>
        
        {/* 4. Logo Grid - Auto-inverts colors to white */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-7 md:h-9 w-auto object-contain brightness-0 invert opacity-30 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
