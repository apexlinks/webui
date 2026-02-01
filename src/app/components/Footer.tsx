import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
// IMPORT THE IMAGE DIRECTLY
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <Mail size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:sales@apex-links.net" className="hover:text-purple-400 transition-colors">
                    sales@apex-links.net
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Phone size={20} className="text-pink-400 flex-shrink-0 mt-1" />
                <div style={{ direction: 'ltr' }}>
                  <a href="tel:+966579390788" className="hover:text-pink-400 transition-colors">
                    +966 57 939 0788
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  Jeddah, Saudi Arabia
                </div>
              </li>
            </ul>

             {/* QR Code Section */}
             <div className="mt-8">
              <p className="text-white/40 text-sm mb-3">{t('footer.scan')}</p>
              <div className="bg-white p-2 rounded-lg inline-block">
                <img 
                  // USE THE IMPORTED IMAGE VARIABLE
                  src={qrCodeImage} 
                  alt="Scan to connect" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 px-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-white/10 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">{t('footer.newsletter.title')}</h3>
            <p className="text-white/60 mb-6">
              {t('footer.newsletter.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow whitespace-nowrap"
              >
                {t('footer.newsletter.button')}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
             {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
