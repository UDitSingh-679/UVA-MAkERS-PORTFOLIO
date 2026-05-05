import video1 from '../assets/video1.webm';
import video2 from '../assets/video2.webm';
import video3 from '../assets/video3.webm';
import video4 from '../assets/video4.webm';
import poster1 from '../assets/frame-1.webp';
import poster2 from '../assets/frame-2.webp';
import poster3 from '../assets/frame-3.webp';
import poster4 from '../assets/frame-4.webp';
import LazyVideo from '../components/LazyVideo';

const projects = [
  { title: 'Tech Review Channel', niche: 'Technology / YouTube', result: '2.1L views in 7 days', video: video1, poster: poster1, color: '#FF3AF2', alt: 'Video editing portfolio for tech review YouTube channel with cinematic transitions and algorithmic hooks' },
  { title: 'Fashion Brand Reels', niche: 'E-commerce / Instagram', result: '38% reach increase', video: video2, poster: poster2, color: '#00F5D4', alt: 'Fashion brand reels editing for Instagram e-commerce with high-energy viral hooks' },
  { title: 'Motivational Creator', niche: 'Personal Brand / YouTube', result: '1.4L impressions in 3 days', video: video3, poster: poster3, color: '#FFE600', alt: 'Motivational content video editing for personal brand YouTube creator' },
  { title: 'Viral Vlog Series', niche: 'Lifestyle / Shorts', result: '1.2M Views Milestone', video: video4, poster: poster4, color: '#7B2FFF', alt: 'Lifestyle vlog short-form video editing for viral content series' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 overflow-hidden bg-gradient-acme relative">
      <div className="absolute inset-0 pdots opacity-40" aria-hidden="true"></div>
      <div className="max-w-[1400px] w-full mx-auto relative z-10 px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block outfit text-xs font-bold tracking-widest uppercase py-2 px-5 rounded-full border-4 border-[#FF3AF2] text-[#FF3AF2] mb-6" style={{ background: 'rgba(255,58,242,.1)' }}>
            🎬 Our Work
          </div>
          <h2 className="outfit text-5xl md:text-7xl font-black uppercase leading-[1.1] ts1 text-white max-w-4xl mx-auto">
            Creatives That <span className="text-[#FF3AF2]">Capture</span> Attention.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:pt-10 lg:pb-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`card group relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none cursor-pointer transition-all duration-500 hover:z-20 hover:scale-105 hover:!rotate-0 lg:hover:-translate-y-4 hover:-translate-y-2 ${i === 0 ? 'lg:translate-y-16 lg:-rotate-6' :
                i === 1 ? 'lg:translate-y-4 lg:-rotate-2' :
                  i === 2 ? 'lg:translate-y-4 lg:rotate-2' :
                    'lg:translate-y-16 lg:rotate-6'
                }`}
              style={{ border: `2px solid ${p.color}`, boxShadow: `6px 6px 0 ${p.color}`, padding: '1rem' }}
            >
                <div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black">
                  <LazyVideo
                    src={p.video}
                    poster={p.poster}
                    className="w-full h-full object-cover origin-center transition-transform duration-500 group-hover:scale-110"
                    width="1200"
                    height="630"
                    altText={p.alt}
                  />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}