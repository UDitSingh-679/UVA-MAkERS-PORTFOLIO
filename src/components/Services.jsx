import { motion } from 'framer-motion';
import editingImg from '../assets/editing.webp';
import reelsImg from '../assets/reels.webp';
import adsImg from '../assets/Ads.webp';
import webImg from '../assets/website.jpeg';

const servicesData = [
  { title: 'Video Editing', professional: 'Retention-First Editing', hook: 'Cinematic storytelling for YouTube creators who want to dominate the algorithm.', img: editingImg, color: '#FF3AF2', accent: '#FFE600' },
  { title: 'Reels & Shorts', professional: 'Vertical Viral Hooks', hook: 'High-energy, 60-second edits designed to stop the scroll and explode your reach.', img: reelsImg, color: '#00F5D4', accent: '#7B2FFF' },
  { title: 'Ads & Branding', professional: 'Conversion Campaigns', hook: "Strategic product ads that don't just look good—they sell your vision.", img: adsImg, color: '#FFE600', accent: '#FF3AF2' },
  { title: 'Web Dev', professional: 'High-Performance UI', hook: 'Fast, secure, and aggressive landing pages built to turn visitors into leads.', img: webImg, color: '#FF6B35', accent: '#00F5D4' }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-32 px-6 overflow-hidden bg-premium-tech">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="bungee text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            <span className="text-shadow-pink inline-block transform -skew-x-12">Our</span> <span className="text-shadow-pink inline-block transform -skew-x-12">Services</span>
          </h2>
          <p className="text-white/80 text-lg font-medium tracking-wide mt-2">Everything you need to build faster and better. No fluff, just pure power.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {servicesData.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex flex-col bg-white rounded-3xl overflow-hidden border-2" style={{ borderColor: s.color, boxShadow: `8px 8px 0 ${s.accent}` }}>
              <div className="p-4 flex-1 flex flex-col items-center justify-center min-h-[280px]">
                <motion.div whileHover={{ rotate: i % 2 === 0 ? 5 : -5, scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="bg-[#160B24] p-3 rounded-2xl border-2 w-full max-w-[280px] text-center transform transition-transform overflow-hidden" style={{ borderColor: s.color, rotate: i % 2 === 0 ? -2 : 2 }}>
                   <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden border" style={{ borderColor: s.color }}>
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                      />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#160B24] to-transparent opacity-40"></div>
                   </div>
                   <div className="bungee text-lg text-white mb-1 uppercase tracking-tight">{s.title}</div>
                   <div className="outfit text-[10px] font-black uppercase tracking-widest" style={{ color: s.color }}>{s.professional}</div>
                </motion.div>
              </div>
              <div className="bg-[#160B24] p-7 border-t-2" style={{ borderColor: s.color }}>
                <h3 className="bungee text-xl mb-3" style={{ color: s.color }}>{s.professional}</h3>
                <p className="text-white/90 text-lg leading-[1.6] font-medium tracking-wide">{s.hook}</p>
                 <div className="mt-5 flex justify-between items-center">
                   <div className="text-white/20 text-xs font-black uppercase tracking-tighter">SERVICE {String(i + 1).padStart(2, '0')}</div>
                   <div className="text-3xl" style={{ color: s.color }} aria-hidden="true">✦</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}