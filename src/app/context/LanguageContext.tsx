import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      influencers: 'Influencers',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Connecting Brands with Influencers',
      titleLine1: 'Elevate your reach:',
      titleLine2: 'Apex links Bridges the Gap',
      description: 'We connect innovative brands with authentic influencers to create campaigns that resonate, engage, and drive real results.',
      startBtn: 'Start Your Campaign',
      exploreBtn: 'Explore Success Stories',
      stats: {
        influencers: 'Influencers',
        campaigns: 'Campaigns',
        reach: 'Reach',
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      influencers: 'المؤثرين',
      contact: 'اتصل بنا',
      getStarted: 'ابدأ الآن',
    },
    hero: {
      badge: 'نربط العلامات التجارية بالمؤثرين',
      titleLine1: 'ارتقِ بوصولك:',
      titleLine2: 'أبيكس لينكس هي الجسر',
      description: 'نربط العلامات التجارية المبتكرة بمؤثرين حقيقيين لإنشاء حملات لها صدى وتفاعل ونتائج حقيقية.',
      startBtn: 'ابدأ حملتك',
      exploreBtn: 'اكتشف قصص النجاح',
      stats: {
        influencers: 'مؤثر',
        campaigns: 'حملة',
        reach: 'وصول',
      }
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Automatically flips the layout to RTL for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
