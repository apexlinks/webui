import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { InfluencerShowcase } from '@/app/components/InfluencerShowcase';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';
import { LanguageProvider } from '@/app/context/LanguageContext'; // Import this

export default function App() {
  return (
    <LanguageProvider> 
      <div className="size-full bg-black text-white overflow-x-hidden">
        <Navigation />
        <Hero />
        <InfluencerShowcase />
        <Services />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
