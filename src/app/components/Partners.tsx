import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/context/LanguageContext';

export const Partners = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: "Our Strategic Partners",
      subtitle: "Collaborating with industry leaders to drive excellence"
    },
    ar: {
      title: "شركاؤنا في النجاح",
      subtitle: "نتعاون مع رواد الصناعة لتحقيق التميز"
    }
  };

  const partners = [
    { name: "Aura", logo: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
    { name: "Vibe", logo: "https://cdn.worldvectorlogo.com/logos/v-5.svg" },
    { name: "Nexus", logo: "https://cdn.worldvectorlogo.com/logos/target-6.svg" },
    { name: "Flux", logo: "https://cdn.worldvectorlogo.com/logos/pulse-2.svg" },
    { name: "Echo", logo: "https://cdn.worldvectorlogo.com/logos/sound.svg" }, // Added one to fill grid
    { name: "Orbit", logo: "https://cdn.worldvectorlogo.com/logos/globe-3.svg" }, // Added another
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-purple-950/20 to-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Matches Influencer Showcase Exactly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              {content[language].title}
            </span>
          </h2>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto ${isRTL ? 'font-cairo' : ''}`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* GRID: Uses the same 'Glass' effect as Influencer Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-40"
            >
              {/* The Card Container - Exact match to Influencer card style */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20 flex items-center justify-center p-8 backdrop-blur-sm">
                
                {/* The Logo */}
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                />
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
