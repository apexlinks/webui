import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-black to-purple-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              APEXLINKS
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Your bridge to influencer marketing success. Connecting brands with authentic voices.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center border border-white/10 hover:border-transparent transition-all"
                  >
                    <Icon size={18} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Influencers', 'Case Studies', 'Blog'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Campaign Strategy',
                'Influencer Matching',
                'Content Creation',
                'Analytics & Reporting',
                'Brand Partnerships',
                'Social Media Management',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-pink-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-pink-400 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <Mail size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:hello@apexlinks.com" className="hover:text-purple-400 transition-colors">
                    hello@apexlinks.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Phone size={20} className="text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-pink-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  123 Marketing Avenue<br />
                  New York, NY 10001
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 px-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-white/10 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-white/60 mb-6">
              Subscribe to our newsletter for the latest trends in influencer marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Apexlinks. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-purple-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
