import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

// 1. IMPORT THE IMAGE (This only works if the image is in the SAME folder as this file)
import qrCodeImage from './qr-code.png';

export function Footer() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <footer id="contact" className="bg-gradient-to-b from-black to-purple-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              APEXLINKS
            </h3>
            <p className={`text-white/60 leading-relaxed mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.brandDesc')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center border border-white/10 hover:border-transparent transition-all"
                  >
                    <Icon size={18} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {['home', 'services', 'influencers', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === 'home' ? 'home' : link}`}
                    className="text-white/60 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all" />
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {[
                'strategy',
                'matching',
                'content',
                'analytics',
                'partnerships',
                'social',
              ].map((serviceKey) => (
                <li key={serviceKey}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-pink-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-pink-400 transition-all" />
                    {t(`serviceList.${serviceKey}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity:
