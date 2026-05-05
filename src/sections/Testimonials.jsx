import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  { name: 'Harsh J.', city: 'YouTube Creator', text: "I wasn't sure how to improve my retention at first, but UVA Makers' editing really helped the algorithm. My Reels engagement increased by 40%. Best part? Their speed!", stars: 5 },
  { name: 'Sahil Sharma', city: 'E-commerce Owner', text: 'We got our landing page and ads managed by UVA Makers. The landing page is fast and the ads are generating quality leads. Such professionalism is rare in Rajasthan.', stars: 5 },
  { name: 'Aman Preet', city: 'Digital Marketer', text: "I've worked with many freelancers before, but deadlines were always an issue. UVA team is on point—drafts always arrive on time and revisions are handled smoothly without any hassle.", stars: 5 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="sticky top-0 z-0 py-32 px-6 overflow-hidden bg-[#0d0d1a]">
      <div className="absolute inset-0 pdots opacity-[.07]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block outfit text-xs font-bold tracking-widest uppercase py-2 px-5 rounded-full border-4 border-[#00F5D4] text-[#00F5D4] mb-6" style={{ background: 'rgba(0,245,212,.1)' }}>
            ⭐ Client Reviews
          </div>
          <h2 className="outfit text-5xl md:text-7xl font-black uppercase leading-none ts1 text-white">
            What <span className="text-[#00F5D4]">Clients</span> Say
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="card cursor-default mx-auto max-w-md"
              style={{
                border: '2px solid #00F5D4',
                boxShadow: '6px 6px 0 #00F5D4',
              }}
            >
              <div className="text-[#FFE600] text-2xl mb-4" aria-label={`${reviews[currentIndex].stars} out of 5 stars`} role="img">{'★'.repeat(reviews[currentIndex].stars)}</div>
              <p className="text-white/90 text-xl leading-[1.6] mb-6">"{reviews[currentIndex].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center outfit font-black text-xl text-white" style={{ background: 'linear-gradient(135deg,#FF3AF2,#7B2FFF)' }}>
                  {reviews[currentIndex].name[0]}
                </div>
                <div>
                  <div className="outfit font-black text-white">{reviews[currentIndex].name}</div>
                  <div className="text-[#00F5D4] text-sm font-bold">📍 {reviews[currentIndex].city}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#00F5D4] w-6' : 'bg-white/30'}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
              className="card cursor-default"
              style={{
                border: '2px solid #00F5D4',
                boxShadow: '6px 6px 0 #00F5D4',
                rotate: i === 0 ? '-2deg' : i === 1 ? '2deg' : '-1deg',
                transition: 'transform 0.3s ease'
              }}
            >
              <div className="text-[#FFE600] text-2xl mb-4" aria-label={`${r.stars} out of 5 stars`} role="img">{'★'.repeat(r.stars)}</div>
              <p className="text-white/90 text-xl leading-[1.6] mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center outfit font-black text-xl text-white" style={{ background: 'linear-gradient(135deg,#FF3AF2,#7B2FFF)' }}>
                  {r.name[0]}
                </div>
                <div>
                  <div className="outfit font-black text-white">{r.name}</div>
                  <div className="text-[#00F5D4] text-sm font-bold">📍 {r.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}