import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/context/LanguageContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Partners = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: "Our Strategic Partners",
      subtitle: "Collaborating with industry leaders to drive excellence"
    },
    ar: {
      title: "شركاؤنا الاستراتيجيون",
      subtitle: "نتعاون مع رواد الصناعة لتحقيق التميز"
    }
  };

  const partners = [
    { 
      name: "Luminary Studios", 
      categoryEn: "Creative & Media", 
      categoryAr: "الإبداع والإعلام",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080&h=1440" 
    },
    { 
      name: "Vitality Hub", 
      categoryEn: "Health & Wellness", 
      categoryAr: "الصحة والعافية",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1080&h=1440" 
    },
    { 
      name: "Nexus Digital", 
      categoryEn: "Tech Innovation", 
      categoryAr: "الابتكار التقني",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1080&h=1440" 
    },
    { 
      name: "Aura Lifestyle", 
      categoryEn: "Boutique Retail", 
      categoryAr: "تجارة التجزئة الفاخرة",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1080&h=1440" 
    },
    { 
      name: "Zenith Growth", 
      categoryEn: "Business Strategy", 
      categoryAr: "استراتيجية الأعمال",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1080&h=1440" 
    },
    { 
      name: "Velocity Labs", 
      categoryEn: "Performance Marketing", 
      categoryAr: "تسويق الأداء",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080&h=1440" 
    },
  ];

  return (
    <section id="partners" className="relative py-32 bg-gradient-to-b from-purple-950/20 to-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* FONT: Matched to InfluencerShowcase H2 */}
          <h2 className="text-4xl md:text-6xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {content[language].title}
            </span>
          </h2>
          {/* FONT: Matched to InfluencerShowcase Paragraph with Arabic logic */}
          <p className={`text-white/70 text-lg max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
             {content[language].subtitle}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex gap-6 px-6 overflow-x-auto scrollbar-custom pb-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <ImageWithFallback
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* FONT: Matched to Influencer Card H3 */}
                  <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                  {/* FONT: Matched to Influencer Card Category with Arabic logic */}
                  <p className={`text-purple-300 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? partner.categoryAr : partner.categoryEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint: Matched exactly to Influencer scroll hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`text-center mt-8 text-white/50 text-sm ${isRTL ? 'font-arabic' : ''}`}
        >
          {language === 'ar' ? '← اسحب لاستكشاف المزيد →' : '← Scroll to explore more →'}
        </motion.div>
      </div>

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
