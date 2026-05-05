import { motion } from 'framer-motion';
import logo from '../assets/logo-removebg-preview.webp';

export default function Collaboration() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden bg-[#0d0d1a]">
      <div className="absolute inset-0 pdots opacity-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] lg:-ml-8 xl:-ml-24">
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-[#A855F7] via-[#D946EF] to-[#7B2FFF] shadow-[0_0_80px_rgba(217,70,239,0.5)] lg:shadow-[0_0_120px_rgba(217,70,239,0.5)] flex items-center justify-center z-20 border-[4px] sm:border-[5px] lg:border-[7px] border-white/10">
             <img src={logo} alt="UVA Makers" loading="lazy" className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-[280px] lg:h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] lg:drop-shadow-[0_0_40px_rgba(255,255,255,0.7)] brightness-110" width="160" height="48" />
          </motion.div>

          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] border-[4px] sm:border-[5px] lg:border-[7px] border-dotted border-[#FFE600]/60 rounded-full drop-shadow-[0_0_10px_rgba(255,230,0,0.3)]" aria-hidden="true" />

          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[620px] lg:h-[620px] border-[4px] sm:border-[5px] lg:border-[7px] border-[#00F5D4]/20 rounded-full" aria-hidden="true">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-3 sm:-top-4 lg:-top-6 left-1/2 -translate-x-1/2 text-[#FFE600] drop-shadow-[0_0_10px_rgba(255,230,0,0.8)]"><svg width="20" height="20" className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -right-3 sm:-right-4 lg:-right-6 -translate-y-1/2 text-[#00F5D4] drop-shadow-[0_0_10px_rgba(0,245,212,0.8)]"><svg width="20" height="20" className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 text-[#FF6B35] drop-shadow-[0_0_10px_rgba(255,107,53,0.8)]"><svg width="20" height="20" className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -left-3 sm:-left-4 lg:-left-6 -translate-y-1/2 text-[#7B2FFF] drop-shadow-[0_0_10px_rgba(123,47,255,0.8)]"><svg width="20" height="20" className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="6" y1="20" x2="6" y2="14"></line><line x1="12" y1="20" x2="12" y2="9"></line><line x1="18" y1="20" x2="18" y2="4"></line></svg></motion.div>
          </div>

          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[750px] lg:h-[750px] border-[4px] sm:border-[5px] lg:border-[7px] border-dashed border-[#FF3AF2]/40 rounded-full" aria-hidden="true" />

          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div aria-hidden="true" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[10%] right-[10%] text-lg lg:text-xl text-[#00F5D4]">✦</motion.div>
            <motion.div aria-hidden="true" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-[15%] left-[5%] text-xl lg:text-2xl text-[#FF3AF2]">✧</motion.div>
          </div>
        </div>

        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="card border-2 border-[#FF3AF2] bg-[#160B24]/90 p-6 md:p-8" style={{ boxShadow: '8px 8px 0 #FF3AF2' }}>
          <h2 className="bungee text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl text-white leading-[1.1] mb-6 md:mb-8 tracking-tight" style={{ textShadow: '4px 4px 0px #000000' }}>WE DON'T JUST <span className="text-[#FF3AF2]">MANAGE</span> BRANDS; WE <span className="text-[#00F5D4]">ENGINEER</span> DIGITAL <span className="text-[#FFE600]">DOMINANCE</span>.</h2>
          <div className="space-y-6 md:space-y-8">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[4px] md:w-[6px] bg-gradient-to-b from-[#00F5D4] to-[#7B2FFF] rounded-full" />
              <p className="text-white/90 text-base md:text-lg lg:text-xl font-medium leading-[1.6] md:leading-[1.7] tracking-wide">UVA Makers is a full-stack creative engine. From cinematic video editing and high-performance web development to strategic ads management, we build the entire ecosystem your brand needs to scale, convert, and lead the market.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}