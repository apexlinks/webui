import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Target, Users, TrendingUp, BarChart3, Zap, Shield } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

const serviceIcons = {
  strategy: Target,
  matching: Users,
  growth: TrendingUp,
  roi: BarChart3,
  rapid: Zap,
  safety: Shield,
};

const serviceColors = {
  strategy: 'from-purple-500 to-pink-500',
  matching: 'from-pink-500 to-rose-500',
  growth: 'from-purple-600 to-blue-500',
  roi: 'from-blue-500 to-cyan-500',
  rapid: 'from-orange-500 to-pink-500',
  safety: 'from-emerald-500 to-teal-500',
};

// --- NEW COMPONENT: 3D TILT CARD ---
const ServiceCard = ({ service, index, language, title, description }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;
  const isRTL = language === 'ar';

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl"
      >
        {/* Floating Icon */}
        <div style={{ transform: "translateZ(50px)" }} className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
          <Icon className="text-white" size={28} />
        </div>

        {/* Content */}
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className={`text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all ${isRTL ? 'font-arabic' : ''}`}>
            {title}
          </h3>
          <p className={`text-white/60 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
      </div>
    </motion.div>
  );
};

// --- MAIN SERVICES SECTION ---
export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const services = [
    { key: 'strategy', icon: serviceIcons.strategy, color: serviceColors.strategy },
    { key: 'matching', icon: serviceIcons.matching, color: serviceColors.matching },
    { key: 'growth', icon: serviceIcons.growth, color: serviceColors.growth },
    { key: 'roi', icon: serviceIcons.roi, color: serviceColors.roi },
    { key: 'rapid', icon: serviceIcons.rapid, color: serviceColors.rapid },
    { key: 'safety', icon: serviceIcons.safety, color: serviceColors.safety },
  ];

  return (
    <section id="services" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ opacity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ opacity }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {language === 'ar' ? 'ماذا نقدم' : 'What We Do'}
            </span>
          </h2>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'ar' 
              ? 'حلول تسويق شاملة عبر المؤثرين مصممة لتعزيز علامتك التجارية'
              : 'End-to-end influencer marketing solutions designed to amplify your brand'}
          </p>
        </motion.div>

        {/* GRID with 3D CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => {
            const title = language === 'ar' 
                ? (service.key === 'growth' ? 'تحليلات النمو' : service.key === 'roi' ? 'تحسين العائد' : service.key === 'rapid' ? 'تنفيذ سريع' : service.key === 'safety' ? 'أمان العلامة التجارية' : service.key === 'strategy' ? 'استراتيجية' : 'مطابقة ذكية')
                : (service.key === 'growth' ? 'Growth Analytics' : service.key === 'roi' ? 'ROI Optimization' : service.key === 'rapid' ? 'Rapid Execution' : service.key === 'safety' ? 'Brand Safety' : service.key === 'strategy' ? 'Strategy' : 'Smart Matching');
            
            const desc = language === 'ar' 
                ? 'استراتيجيات تعتمد على البيانات ومصممة خصيصًا لأهداف علامتك التجارية.' 
                : 'Data-driven strategies tailored to your brand goals and target audience.';

            return (
              <ServiceCard 
                key={service.key} 
                service={service} 
                index={index} 
                language={language}
                title={title}
                description={desc}
              />
            );
          })}
        </div>

        {/* Vertical Scrolling Stats Section (Kept intact) */}
        <motion.div
          style={{ scale }}
          className="p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'لماذا تختار' : 'Why Choose'} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Apexlinks</span>?
              </h3>
              <p className={`text-white/70 text-lg leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? 'نحن لسنا مجرد وكالة أخرى. نحن شريكك الاستراتيجي في بناء علاقات حقيقية بين العلامات التجارية والمؤثرين لتحقيق نتائج ملموسة.'
                  : "We're not just another agency. We're your strategic partner in building authentic connections between brands and influencers that drive measurable results."}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '98%', label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction' },
                { value: '500+', label: language === 'ar' ? 'مؤثر نشط' : 'Active Influencers' },
                { value: '3.5x', label: language === 'ar' ? 'زيادة في العائد' : 'Avg. ROI Increase' },
                { value: '24/7', label: language === 'ar' ? 'دعم متواصل' : 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className={`text-white/60 text-sm ${isRTL ? 'font-arabic' : ''}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
