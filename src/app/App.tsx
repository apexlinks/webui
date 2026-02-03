import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { InfluencerShowcase } from '@/app/components/InfluencerShowcase';
// 1. ADD THIS IMPORT
import { Partners } from '@/app/components/Partners'; 
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { ContactModalProvider } from '@/app/context/ContactModalContext';

export default function App() {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <div className="size-full bg-black text-white overflow-x-hidden">
          <Navigation />
          <Hero />
          <InfluencerShowcase />
          
          {/* 2. PLACE THE COMPONENT HERE */}
          <Partners /> 
          
          <Services />
          <Footer />
        </div>
      </ContactModalProvider>
    </LanguageProvider>
  );
}
