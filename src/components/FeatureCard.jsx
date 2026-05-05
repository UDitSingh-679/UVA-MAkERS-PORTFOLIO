import { motion } from 'framer-motion';

export default function FeatureCard({ title, icon, bg, borderColor, delay, className, hoverRotate, initialRotate = 0, textClass = "text-white", children }) {
  return (
    <div className={`relative z-50 ${className}`}>
      <motion.div
        initial={{ y: 50, opacity: 0, rotate: initialRotate }}
        animate={{ y: 0, opacity: 1, rotate: initialRotate }}
        transition={{ delay, type: 'spring', stiffness: 200, damping: 12 }}
        whileHover={{
          y: -15,
          rotate: hoverRotate,
          scale: 1.1,
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        }}
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 flex flex-col items-center justify-center rounded-2xl border-2 p-3 sm:p-4 md:p-6 cursor-pointer"
        style={{
          background: bg,
          borderColor: borderColor,
          boxShadow: `6px 6px 0 ${borderColor}`,
        }}
      >
        {children}
        <div className={`mb-1 sm:mb-2 lg:mb-3 ${textClass}`}>{icon}</div>
        <h3 className={`outfit text-xs sm:text-sm md:text-base font-black tracking-widest uppercase ${textClass}`}>{title}</h3>
      </motion.div>
    </div>
  );
}