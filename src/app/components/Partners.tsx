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
    { name: "TechFlow", category: "Technology", logo: "https://placehold.co/600x800/2a1b3d/ffffff/png?text=TechFlow" },
    { name: "VibeSync", category: "Audio", logo: "https://placehold.co/600x800/2a1b3d/ffffff/png?text=VibeSync" },
    { name: "Nexus", category: "Network", logo: "https://placehold.co/600x800/2a1b3d/ffffff/png?text=Nexus" },
    { name: "PureLife", category: "Wellness", logo: "https://placehold.co/600x800/2a1b3d/ffffff/png?text=PureLife" },
    { name: "Zenith", category: "Finance", logo: "https://placehold.co/600x800/2a1b3d/ffffff/png?text=Zenith" },
    { name: "Apex", category: "Growth", logo: "https://placehold.co/600x800/2a1b3d/ffffff/png?text=Apex" },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-purple-950/20 to-black overflow-hidden border-t border-white/5">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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
      </div>

      {/* 2. Scrollable Container (Matches InfluencerShowcase) */}
      <div className="relative">
        <div className="flex gap-6 px-6 overflow-x-auto scrollbar-custom pb-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 group" // Exact width of Influencer card
            >
              {/* 3. The Portrait Card (Aspect 3:4) */}
              <div className="
                relative overflow-hidden rounded-2xl 
                bg-gradient-to-br from-purple-900/30 to-pink-900/30 
                border border-white/10 
                hover:border-purple-500/50 
                transition-all duration-300 
                hover:shadow-2xl hover:shadow-purple-500/30
                aspect-[3/4] 
              ">
                
                {/* Logo Area (Centered in the portrait space) */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                  <p className="text-purple-300 text-sm">
                    {partner.category}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`text-center mt-8 text-white/50 text-sm ${isRTL ? 'font-arabic' : ''}`}
        >
           {language === 'ar' ? '← اسحب لاستكشاف المزيد →' : '← Scroll to explore more →'}
        </motion.div>
      </div>

      {/* 4. Scrollbar Styles (Essential for the scroll effect) */}
      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #9333ea, #ec4899);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #a855f7, #f472b6);
        }
      `}</style>
    </section>
  );
};
