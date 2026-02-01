import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Update these with your real contact details
  const contacts = [
    {
      icon: MessageCircle,
      label: t('modal.whatsapp'),
      href: 'https://wa.me/966579390788', // Update with your actual WhatsApp link
      color: 'bg-green-600 hover:bg-green-500',
    },
    {
      icon: Phone,
      label: t('modal.phone'),
      href: 'tel:+966579390788',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25',
    },
    {
      icon: Mail,
      label: t('modal.email'),
      href: 'mailto:sales@apex-links.net',
      color: 'bg-white/10 hover:bg-white/20',
    },
  ];

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-purple-900/20"
            >
              <button 
                onClick={closeModal}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 text-white/40 hover:text-white transition-colors`}
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8 mt-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {t('modal.title')}
                </h3>
                <p className="text-white/60 text-sm">
                  {t('modal.subtitle')}
                </p>
              </div>

              <div className="space-y-3">
                {contacts.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target={item.label === t('modal.whatsapp') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${item.color}`}
                    >
                      <div className="p-2 bg-white/10 rounded-full">
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="font-semibold text-white text-lg">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
