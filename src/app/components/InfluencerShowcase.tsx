import { motion } from 'motion/react';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const influencers = [
  {
    name: 'Sarah Chen',
    category: 'Fashion & Lifestyle',
    followers: '2.5M',
    image: 'https://images.unsplash.com/photo-1552109870-1da1bada6be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTcyMTA5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    engagement: '8.5%',
  },
  {
    name: 'Marcus Johnson',
    category: 'Tech & Innovation',
    followers: '1.8M',
    image: 'https://images.unsplash.com/photo-1712230778936-766a99478dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5mbHVlbmNlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTYzNzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    engagement: '7.2%',
  },
  {
    name: 'Elena Rodriguez',
    category: 'Travel & Adventure',
    followers: '3.2M',
    image: 'https://images.unsplash.com/photo-1563237739-e433cbb3fd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBpbmZsdWVuY2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NjM3NjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    engagement: '9.1%',
  },
  {
    name: 'Alex Thompson',
    category: 'Fitness & Wellness',
    followers: '1.5M',
    image: 'https://images.unsplash.com/photo-1660557989710-1a91e7e89d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5mbHVlbmNlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTYzNzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    engagement: '10.3%',
  },
  {
    name: 'Mia Zhang',
    category: 'Beauty & Skincare',
    followers: '2.9M',
    image: 'https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwY29udGVudCUyMGNyZWF0b3J8ZW58MXx8fHwxNzY5NjY5MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    engagement: '8.8%',
  },
  {
    name: 'Jordan Lee',
    category: 'Food & Culinary',
    followers: '1.2M',
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njk3MDA4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    engagement: '7.9%',
  },
];

export function InfluencerShowcase() {
  return (
    <section id="influencers" className="relative py-32 bg-gradient-to-b from-black to-purple-950/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Influencers
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Meet the creators who bring your brand story to life across multiple platforms
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <div className="flex gap-6 px-6 overflow-x-auto scrollbar-custom pb-8">
          {influencers.map((influencer, index) => (
            <motion.div
              key={influencer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <ImageWithFallback
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{influencer.name}</h3>
                  <p className="text-purple-300 text-sm mb-3">{influencer.category}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-white/60 text-xs">Followers</div>
                      <div className="text-white font-semibold">{influencer.followers}</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Engagement</div>
                      <div className="text-green-400 font-semibold">{influencer.engagement}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <Instagram size={18} className="text-white" />
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <Youtube size={18} className="text-white" />
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <Twitter size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-8 text-white/50 text-sm"
        >
          ← Scroll to explore more →
        </motion.div>
      </div>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #9333ea, #ec4899);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #a855f7, #f472b6);
        }
      `}</style>
    </section>
  );
}