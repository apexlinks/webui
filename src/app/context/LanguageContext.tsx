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
    },
    footer: {
      brandDesc: 'Your bridge to influencer marketing success. Connecting brands with authentic voices.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Get in Touch',
      newsletter: {
        title: 'Stay Updated',
        desc: 'Subscribe to our newsletter for the latest trends in influencer marketing',
        placeholder: 'Enter your email',
        button: 'Subscribe'
      },
      rights: '© 2026 Apexlinks. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      scan: 'Scan to connect:'
    },
    serviceList: {
      strategy: 'Campaign Strategy',
      matching: 'Influencer Matching',
      content: 'Content Creation',
      analytics: 'Analytics & Reporting',
      partnerships: 'Brand Partnerships',
      social: 'Social Media Management'
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
    },
    footer: {
      brandDesc: 'جسر نجاحك في التسويق عبر المؤثرين. نربط العلامات التجارية بأصوات حقيقية.',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
      newsletter: {
        title: 'ابق على اطلاع',
        desc: 'اشترك في نشرتنا الإخبارية لمعرفة أحدث اتجاهات التسويق عبر المؤثرين',
        placeholder: 'أدخل بريدك الإلكتروني',
        button: 'اشترك'
      },
      rights: '© 2026 Apexlinks. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'سياسة ملفات تعريف الارتباط',
      scan: 'امسح للتواصل:'
    },
    serviceList: {
      strategy: 'استراتيجية الحملات',
      matching: 'مطابقة المؤثرين',
      content: 'صناعة المحتوى',
      analytics: 'التحليلات والتقارير',
      partnerships: 'شراكات العلامات التجارية',
      social: 'إدارة وسائل التواصل الاجتماعي'
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
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
