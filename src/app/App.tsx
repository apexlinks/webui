import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { InfluencerShowcase } from '@/app/components/InfluencerShowcase';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="size-full bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <InfluencerShowcase />
      <Services />
      <Footer />
    </div>
  );
}
