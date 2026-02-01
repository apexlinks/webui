import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/app/components/Logo';
import { useLanguage } from '@/app/context/LanguageContext';
// IMPORT THE MODAL TRIGGER
import { useContactModal } from '@/app/context/ContactModalContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  // GET THE OPEN FUNCTION
  const { openModal } = useContactModal();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'influencers', href: '#influencers' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              APEXLINKS
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`text-white/80 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors"
            >
              <Globe size={20} />
              <span className="uppercase text-sm font-semibold">{language === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* BUTTON TRIGGERS THE MODAL */}
            <motion.button
              onClick={openModal}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow cursor-pointer"
            >
              {t('nav.getStarted')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             <button
              onClick={toggleLanguage}
              className="text-white/80 hover:text-purple-400 transition-colors"
            >
              <span className="uppercase text-sm font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                 {t(`nav.${item.key}`)}
              </a>
            ))}
            {/* MOBILE BUTTON TRIGGERS THE MODAL */}
            <button 
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-center"
            >
              {t('nav.getStarted')}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
