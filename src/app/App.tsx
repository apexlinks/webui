import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { InfluencerShowcase } from '@/app/components/InfluencerShowcase';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';
import { LanguageProvider } from '@/app/context/LanguageContext';
// 1. IMPORT THE NEW MODAL PROVIDER
import { ContactModalProvider } from '@/app/context/ContactModalContext';

export default function App() {
  return (
    <LanguageProvider>
      {/* 2. WRAP THE APP WITH IT */}
      <ContactModalProvider>
        <div className="size-full bg-black text-white overflow-x-hidden">
          <Navigation />
          <Hero />
          <InfluencerShowcase />
          <Services />
          <Footer />
        </div>
      </ContactModalProvider>
    </LanguageProvider>
  );
}
