export default function Stats() {
  return (
    <section className="relative z-10 py-10 px-6 border-y-4 border-[#FF3AF2] bg-[#0d0d1a]" style={{ backdropFilter: 'blur(12px)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="sr-only">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['50+', 'Videos Delivered', '#FF3AF2'],
            ['20+', 'Happy Clients', '#00F5D4'],
            ['2+', 'Years Experience', '#FFE600'],
            ['100%', 'On-Time Delivery', '#FF6B35'],
          ].map(([num, label, c], i) => (
            <div key={i}>
              <div className="outfit text-5xl font-black ts1" style={{ color: c }}>{num}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-bold mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}