import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { CONTACT } from '../config/constants';

const WA = `${CONTACT.WHATSAPP.BASE}?text=${encodeURIComponent(CONTACT.WHATSAPP.DEFAULT_TEXT)}`;

export default function Hero() {
  return (
    <section id="home" className="sticky top-0 z-0 min-h-screen overflow-hidden flex items-center pt-40 pb-24 bg-gradient-acme">
      <div className="absolute inset-0 pdots opacity-40" aria-hidden="true" />

       <motion.div
         animate={{ rotate: 360, scale: [1, 1.2, 1] }}
         transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[12%] left-[8%] text-[#FFE600] text-6xl drop-shadow-[0_0_20px_rgba(255,230,0,0.8)]"
         aria-hidden="true"
       >
         ★
       </motion.div>

       <motion.div
         animate={{ y: [0, -30, 0], rotate: [45, 225, 45], scale: [1, 1.1, 1] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
         className="absolute bottom-[10%] left-[25%] text-[#FF3AF2] text-5xl border-[3px] border-[#FF3AF2] w-14 h-14 flex items-center justify-center bg-transparent drop-shadow-[0_0_15px_rgba(255,58,242,0.8)]"
         aria-hidden="true"
       >
         ♦
       </motion.div>

       <motion.div
         animate={{ y: [0, 40, 0], scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-[40%] right-[5%] text-[#FF3AF2] text-5xl drop-shadow-[0_0_15px_rgba(255,58,242,0.8)]"
         aria-hidden="true"
       >
         ★
       </motion.div>
       <div className="absolute bottom-[20%] right-[15%] w-16 h-16 rounded-full border-2 border-[#00F5D4]/40 drop-shadow-[0_0_15px_rgba(0,245,212,0.3)]" aria-hidden="true"></div>
       <div className="absolute bottom-[25%] right-[38%] text-[#FFE600] text-2xl" aria-hidden="true">✨</div>
       <div className="absolute top-[35%] left-[12%] text-[#FFE600] text-xl border-2 border-[#FFE600] w-4 h-4 transform rotate-45" aria-hidden="true"></div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="col-span-1 lg:col-span-7">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <div className="inline-block mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default">
                 <div className="outfit text-sm font-black tracking-widest uppercase py-2 px-6 rounded-full border-[3px] border-dashed border-[#FFE600] text-[#FFE600] flex items-center gap-2 drop-shadow-[0_0_10px_rgba(255,230,0,0.4)]" style={{ background: 'rgba(255,230,0,.15)' }}>
                   <span aria-hidden="true">⭐</span> TRUSTED BY FORWARD-THINKING BRANDS <span aria-hidden="true">⭐</span>
                 </div>
               </div>

              <h1 className="bungee text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] uppercase leading-[0.9] tracking-wide mb-6 sm:mb-8">
                <span className="text-shadow-cyan inline-block transform -skew-x-12">SCALE</span> <span className="text-shadow-pink inline-block transform -skew-x-12">YOUR</span><br />
                <span className="text-shadow-cyan inline-block transform -skew-x-12">BRAND</span> <span className="text-shadow-pink inline-block transform -skew-x-12">WITH</span><br />
                <span className="text-shadow-cyan inline-block transform -skew-x-12">VIRAL</span> <span className="text-shadow-pink inline-block transform -skew-x-12">CREATIVES</span>
              </h1>

              <div className="relative mb-6 sm:mb-8 md:mb-10 max-w-lg md:max-w-xl">
                <div className="border-[2px] sm:border-[3px] border-[#00F5D4] bg-[#0d0d1a]/50 backdrop-blur-xl p-4 sm:p-6 rounded-2xl sm:rounded-3xl" style={{ boxShadow: '0 0 30px rgba(0,245,212,.15)' }}>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-[1.6] font-medium">
                    Your brand's unfair advantage. We build websites, edit videos, and manage ads that transform ordinary businesses into digital leaders.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 items-center">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block outfit font-black text-sm tracking-widest uppercase text-white py-4 px-8 rounded-full border-[3px] border-white/30 transition-all hover:scale-105" style={{ background: 'linear-gradient(90deg, #FF3AF2, #00F5D4)', boxShadow: '0 0 25px rgba(0,245,212,.6)' }}>
                  BOOK A CALL 📞
                </a>
              </div>
            </motion.div>
          </div>

          {/* Desktop Feature Cards - Only shown on large screens */}
          <div className="col-span-1 lg:col-span-5 hidden lg:block">
            <div className="grid grid-cols-2 gap-6 lg:gap-8 items-center justify-items-center h-full min-h-[500px]">
               <div className="justify-self-start lg:ml-8">
                 <FeatureCard title="FAST" icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>} bg="linear-gradient(135deg, #B524FF 0%, #7B2FFF 100%)" borderColor="#FFE600" boxShadow="8px 8px 0px #FFE600, 16px 16px 0px #FF3AF2" delay={0.2} hoverRotate={8} initialRotate={-6} className="" textClass="text-white" />
               </div>
               <div className="justify-self-end lg:mr-8">
                 <FeatureCard title="SECURE" icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>} bg="linear-gradient(135deg, #D4E157 0%, #FFE600 100%)" borderColor="#FF3AF2" boxShadow="8px 8px 0px #FF3AF2, 16px 16px 0px #A800FF" delay={0.4} hoverRotate={-8} initialRotate={8} className="" textClass="text-black">
                   <div className="absolute -top-6 -right-4 text-3xl transform rotate-12" aria-hidden="true">🚀</div>
                   <div className="absolute -top-8 right-8 text-2xl text-[#FF3AF2]" aria-hidden="true">✦</div>
                 </FeatureCard>
               </div>
               <div className="col-span-2 justify-self-center">
                 <FeatureCard title="TEAM" icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>} bg="linear-gradient(135deg, #FF6B35 0%, #FF3AF2 100%)" borderColor="#00F5D4" boxShadow="6px 6px 0px #00F5D4, 12px 12px 0px #FFE600, 18px 18px 0px #FF3AF2" delay={0.6} hoverRotate={5} initialRotate={-4} className="" textClass="text-white" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}