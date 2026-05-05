import logo from '../assets/logo-removebg-preview.webp';
import { CONTACT, SOCIAL } from '../config/constants';

const WA = CONTACT.WHATSAPP.BASE;

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t-2 border-white/10" style={{ background: '#0a0a14' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="UVA Makers" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/70 text-base leading-relaxed font-medium">
              Your brand's unfair advantage. We build websites, edit videos, and manage ads that transform ordinary businesses into digital leaders.
            </p>
             <div className="flex items-center gap-5">
                <a href={`${WA}?text=${encodeURIComponent(CONTACT.WHATSAPP.DEFAULT_TEXT)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#FF3AF2] hover:border-[#FF3AF2] hover:bg-[#FF3AF2]/10 transition-all text-lg" aria-label="WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true" /></a>
                <a href={`mailto:${CONTACT.EMAIL}`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#00F5D4] hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all text-lg" aria-label="Email"><i className="fas fa-envelope" aria-hidden="true" /></a>
                <a href={SOCIAL.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#FFE600] hover:border-[#FFE600] hover:bg-[#FFE600]/10 transition-all text-lg" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
             </div>
          </div>
           <div>
             <h4 className="outfit text-white text-lg font-black tracking-widest uppercase mb-6">Quick Links</h4>
             <ul className="space-y-3">
               {['Services', 'Portfolio', 'Process', 'Contact'].map((link) => (
                 <li key={link}>
                   <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-[#00F5D4] transition-colors text-base font-medium flex items-center gap-2">
                     <span className="text-[#00F5D4]/50 text-xs">✦</span> {link}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
          <div>
            <h4 className="outfit text-white text-lg font-black tracking-widest uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy.html' },
                { name: 'Terms of Service', href: '/terms.html' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-[#FF3AF2] transition-colors text-base font-medium flex items-center gap-2">
                    <span className="text-[#FF3AF2]/50 text-xs">✦</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="outfit text-white text-lg font-black tracking-widest uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4">
               <li className="flex items-start gap-3 text-white/60 text-base font-medium">
                  <i className="fas fa-envelope mt-1 text-[#FFE600]" aria-hidden="true"></i>
                  <a href={`mailto:${CONTACT.EMAIL}`} className="hover:text-white transition-colors">{CONTACT.EMAIL}</a>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-base font-medium">
                  <i className="fas fa-phone-alt mt-1 text-[#FFE600]" aria-hidden="true"></i>
                  <div className="flex flex-col">
                   <a href={`tel:${CONTACT.PHONES.AMIT}`} className="hover:text-white transition-colors">{CONTACT.PHONES.AMIT} (Amit)</a>
                   <a href={`tel:${CONTACT.PHONES.SUMIT}`} className="hover:text-white transition-colors">{CONTACT.PHONES.SUMIT} (Sumit)</a>
                 </div>
               </li>
               <li className="flex items-start gap-3 text-white/60 text-base font-medium">
                 <i className="fas fa-map-marker-alt mt-1 text-[#FFE600]" aria-hidden="true"></i>
                 <span>Sikar, Rajasthan, India</span>
               </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} UVA Makers. All rights reserved.
          </p>
           <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
             Built with <i className="fas fa-heart text-[#FF3AF2]" aria-hidden="true"></i> by UVA Makers
           </div>
        </div>
      </div>
    </footer>
  );
}
