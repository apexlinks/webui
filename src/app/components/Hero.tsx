import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export function Hero() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section 
      id="home" 
      // Force LTR for English, RTL for Arabic to fix punctuation issues
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-white/80 text-sm">{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          // CONDITIONAL SIZING: Smaller text for Arabic, Normal for English
          className={`mb-6 font-bold ${
            isRTL 
              ? 'text-4xl md:text-6xl leading-relaxed tracking-wide' // Arabic: Smaller & Taller lines
              : 'text-5xl md:text-7xl lg:text-8xl tracking-tight'    // English: Bigger & Tighter
          }`}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent block pb-2">
             {t('hero.titleLine1')}
          </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent block mt-2 pb-2">
             {t('hero.titleLine2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 ${
            isRTL ? 'font-arabic leading-loose' : ''
          }`}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
            {t('hero.startBtn')}
            {/* Flip arrow direction for Arabic */}
            <ArrowRight size={20} className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-colors">
            {t('hero.exploreBtn')}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20"
        >
          {[
            { number: '500+', label: t('hero.stats.influencers') },
            { number: '1000+', label: t('hero.stats.campaigns') },
            { number: '50M+', label: t('hero.stats.reach') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
