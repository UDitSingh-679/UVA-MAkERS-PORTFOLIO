import { motion } from 'framer-motion';

const steps = [
  { n: '01', icon: '📋', title: 'THE STRATEGY BRIEF', desc: 'Share your vision, niche, and style references. A quick 10-minute deep dive to align our creative goals.' },
  { n: '02', icon: '⚡', title: '48-HOUR FIRST DRAFT', desc: 'We sprint to deliver your first high-fidelity draft within 48 hours—speed meets quality, guaranteed.' },
  { n: '03', icon: '✏️', title: 'PRECISION REVISIONS', desc: 'Refine the details with two rounds of comprehensive revisions. We don\'t stop until the vibe is perfect.' },
  { n: '04', icon: '🚀', title: 'FINAL DEPLOYMENT', desc: 'Your high-quality, platform-ready assets are delivered. Optimized for maximum engagement and ready to go viral.' },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 50%,rgba(123,47,255,.12) 0%,transparent 60%),radial-gradient(ellipse at 80% 30%,rgba(0,245,212,.1) 0%,transparent 60%)' }} aria-hidden="true" />
      <div className="absolute inset-0 pdots opacity-30" aria-hidden="true" />
      <div className="max-w-full px-10 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block outfit text-xs font-bold tracking-widest uppercase py-2 px-5 rounded-full border-4 border-[#7B2FFF] text-[#7B2FFF] mb-6" style={{ background: 'rgba(123,47,255,.1)' }}>
            🔄 How It Works
          </div>
          <h2 className="outfit text-5xl md:text-7xl font-black uppercase leading-none ts1">
            Our <span className="text-[#7B2FFF]">Process</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">No surprises. You'll always know what's happening next.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{
                boxShadow: `8px 8px 0 ${['#FF3AF2', '#FFE600', '#00F5D4', '#7B2FFF'][i]}`,
                y: (i === 1 || i === 3) ? -45 : -15,
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              className="card flex flex-col lg:flex-row gap-4 lg:items-center py-6 lg:py-8 px-6 cursor-default"
              style={{
                border: `2px solid ${['#FF3AF2', '#FFE600', '#00F5D4', '#7B2FFF'][i]}`,
                boxShadow: `6px 6px 0 ${['#FF3AF2', '#FFE600', '#00F5D4', '#7B2FFF'][i]}`,
                y: (i === 1 || i === 3) ? -30 : 0
              }}
            >
              <div className="text-4xl flex-shrink-0 text-center lg:text-left">{s.icon}</div>
              <div className="text-center lg:text-left">
                <div className="outfit text-xs font-black tracking-widest text-white/30 mb-1">STEP {s.n}</div>
                <h3 className="outfit text-xl lg:text-2xl font-black uppercase mb-2" style={{ color: ['#FF3AF2', '#FFE600', '#00F5D4', '#7B2FFF'][i] }}>{s.title}</h3>
                <p className="text-white/90 text-base lg:text-lg leading-[1.6]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}