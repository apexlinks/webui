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

  // 1. RELIABLE PLACEHOLDER IMAGES (Guaranteed to load)
  // Later, replace the 'logo' strings with your local imports like: import logo1 from '@/assets/logo1.png'
  const partners = [
    { name: "TechFlow", logo: "https://placehold.co/400x150/2a1b3d/ffffff/png?text=TechFlow" },
    { name: "VibeSync", logo: "https://placehold.co/400x150/2a1b3d/ffffff/png?text=VibeSync" },
    { name: "Nexus", logo: "https://placehold.co/400x150/2a1b3d/ffffff/png?text=Nexus" },
    { name: "PureLife", logo: "https://placehold.co/400x150/2a1b3d/ffffff/png?text=PureLife" },
    { name: "Zenith", logo: "https://placehold.co/400x150/2a1b3d/ffffff/png?text=Zenith" },
    { name: "Apex", logo: "https://placehold.co/400x150/2a1b3d/ffffff/png?text=Apex" },
  ];

  return (
    // Background matches the end of the Influencer section for smooth flow
    <section className="relative py-20 bg-black overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Exact copy of InfluencerShowcase typography */}
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
          <p className={`text-white/70 text-lg max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* CARD: Exact copy of Influencer Card classes */}
              <div className="
                relative overflow-hidden rounded-2xl 
                bg-gradient-to-br from-purple-900/30 to-pink-900/30 
                border border-white/10 
                hover:border-purple-500/50 
                transition-all duration-300 
                hover:shadow-2xl hover:shadow-purple-500/30
                h-32 md:h-40 flex items-center justify-center p-6
              ">
                
                {/* Logo Image */}
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="
                    max-h-12 md:max-h-16 w-auto 
                    object-contain 
                    opacity-60 group-hover:opacity-100 
                    transition-all duration-500 
                    group-hover:scale-110
                  "
                />
                
                {/* Subtle Inner Highlight (Optional, adds depth) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
