import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { InfluencerShowcase } from '@/app/components/InfluencerShowcase';
// 1. Import the Partners component
import Partners from '@/app/components/Partners'; 
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
          
          {/* 2. Add the component here */}
          <Partners /> 
          
          <Services />
          <Footer />
        </div>
      </ContactModalProvider>
    </LanguageProvider>
  );
}
