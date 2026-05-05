import { useState } from 'react';
import DOMPurify from 'dompurify';
import ContactSchema from '../components/ContactSchema';
import { CONTACT } from '../config/constants';

const WA = CONTACT.WHATSAPP.BASE;

// Sanitize and validate inputs using DOMPurify + validation
const sanitizeInput = (input) => {
  // Strip all HTML/script tags, return plain text
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
};

const isValidName = (name) => {
  const trimmed = name.trim();
  // Unicode-aware: letters (any language), spaces, hyphens, apostrophes
  return trimmed.length >= 2 && trimmed.length <= 50 && /^[\p{L}\s'’-]+$/u.test(trimmed);
};

const isValidPhone = (phone) => {
  const trimmed = phone.trim();
  // Basic phone: 10-15 digits, allows spaces, dashes, parentheses, +91 etc.
  return trimmed.length >= 10 && /^[\d\s+()-]{10,20}$/.test(trimmed);
};

const isValidMessage = (msg) => {
  const trimmed = msg.trim();
  return trimmed.length >= 5 && trimmed.length <= 500;
};

export default function Contact() {
  const [errors, setErrors] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check - if filled, silently ignore (bot detection)
    const honeypot = e.target['honeypot'];
    if (honeypot && honeypot.value) {
      return;
    }
    
    const nameInput = e.target['contact-name'];
    const phoneInput = e.target['contact-tel'];
    const msgInput = e.target['contact-msg'];
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    const msg = msgInput.value;
    
    const newErrors = { name: '', phone: '', message: '' };
    let hasError = false;
    
    if (!isValidName(name)) {
      newErrors.name = 'Please enter a valid name (2-50 characters, letters only)';
      hasError = true;
    }
    
    if (!isValidPhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number (10+ digits)';
      hasError = true;
    }
    
    if (!isValidMessage(msg)) {
      newErrors.message = 'Please describe your project (5-500 characters)';
      hasError = true;
    }
    
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({ name: '', phone: '', message: '' });
    
    const safeName = encodeURIComponent(sanitizeInput(name));
    const safeMsg = encodeURIComponent(sanitizeInput(msg));
    
    // Create secure anchor element to open WhatsApp with proper noopener noreferrer
    const link = document.createElement('a');
    link.href = `${WA}?text=Hi%2C%20I'm%20${safeName}%20and%20I%20want%20to%20discuss%3A%20${safeMsg}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <ContactSchema />
      <div className="absolute inset-0 pdots opacity-[.08]" aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 20%,rgba(255,107,53,.15) 0%,transparent 50%),radial-gradient(ellipse at 20% 80%,rgba(123,47,255,.15) 0%,transparent 50%)' }} aria-hidden="true" />
       <div className="max-w-4xl mx-auto relative z-10">
         <div className="text-center mb-16">
           <div className="inline-block outfit text-xs font-black tracking-widest uppercase py-2 px-5 rounded-full border-4 border-[#FF6B35] text-[#FF6B35] mb-6" style={{ background: 'rgba(255,107,53,.1)' }}>
             💬 Let's Connect
           </div>
            <h2 className="outfit text-5xl md:text-7xl font-black uppercase leading-none">
              <span className="text-[#FF6B35] inline-block">Let's Create</span> <span className="text-[#FF6B35]">Something Great</span>
            </h2>
         </div>
            <div className="max-w-lg mx-auto">
           <div className="card" style={{ border: '2px solid #FF6B35', boxShadow: '6px 6px 0 #FF6B35' }}>
             <form className="space-y-5" onSubmit={handleSubmit}>
               {/* Honeypot - hidden from humans, bots will fill this */}
               <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', overflow: 'hidden' }}>
                 <label htmlFor="honeypot">Website</label>
                 <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
               </div>
               <div>
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input type="text" placeholder="Your Name" className="inp bg-[#160B24]" id="contact-name" autoComplete="name" required aria-describedby={errors.name ? "name-error" : undefined} />
                {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 ml-2" role="alert">{errors.name}</p>}
              </div>
               <div>
                 <label htmlFor="contact-tel" className="sr-only">Your Phone Number</label>
                 <input 
                   type="tel" 
                   placeholder="Your phone number" 
                   className="inp bg-[#160B24]" 
                   id="contact-tel" 
                   autoComplete="tel"
                   required
                   pattern="[\d\s\+()-]{10,20}"
                   aria-describedby={errors.phone ? "phone-error" : undefined}
                 />
                 {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1 ml-2" role="alert">{errors.phone}</p>}
               </div>
              <div>
                <label htmlFor="contact-msg" className="sr-only">Tell us about your project</label>
                <textarea placeholder="Tell us about your crazy idea..." className="inp inp-ta bg-[#160B24]" id="contact-msg" rows="4" style={{ borderRadius: '1.5rem', resize: 'none' }} required aria-describedby={errors.message ? "msg-error" : undefined} />
                {errors.message && <p id="msg-error" className="text-red-500 text-xs mt-1 ml-2" role="alert">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-p w-full block text-center text-lg py-4 mt-2">LET'S TALK ON WHATSAPP ⚡</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}