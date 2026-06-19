import { useState } from 'react';
import { motion } from 'framer-motion';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import Phone from 'lucide-react/dist/esm/icons/phone.js';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js';
import Send from 'lucide-react/dist/esm/icons/send.js';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right.js';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0610a9e5-c158-4706-8816-eb895e465234", // User needs to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={16} />, label: "EMAIL", value: "jaiskrishna06@gmail.com", href: "mailto:jaiskrishna06@gmail.com" },
    { icon: <Phone size={16} />, label: "PHONE", value: "+91 6204815018", href: "tel:+916204815018" },
    { icon: <MapPin size={16} />, label: "LOCATION", value: "DELHI, INDIA", href: "#" },
  ];

  return (
    <section id="contact" className="py-8 bg-background border-b border-foreground/5 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-[22px] sm:text-4xl font-black uppercase tracking-tight whitespace-nowrap leading-none">Connect <span className="text-foreground/20">Systems</span></h2>
            <div className="w-16 sm:w-24 h-1 bg-foreground rounded-none"></div>
            <p className="text-sm sm:text-base text-foreground/40 leading-relaxed font-black uppercase tracking-tight max-w-md">
              ACTIVELY SEEKING FULL-STACK INTERNSHIP OPPORTUNITIES, WITH A STRONG FOUNDATION IN FRONTEND AND BACKEND DEVELOPMENT. LET'S CONNECT AND BUILD SOMETHING IMPACTFUL.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-0 border border-foreground/10 divide-y divide-foreground/10">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center justify-between p-6 sm:p-8 bg-background hover:bg-foreground hover:text-background transition-all group"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <div className="w-10 h-10 border border-current flex items-center justify-center font-black">
                      {item.label[0]}
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest mb-1 opacity-50 group-hover:opacity-100">{item.label}</p>
                      <p className="font-bold text-sm sm:text-lg uppercase tracking-tight whitespace-nowrap">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="pt-8">
              {/* Social directory removed from contact system to streamline focus on the message form */}
            </div>
          </div>
        </div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="border-[1.5px] border-foreground p-4 sm:p-6 space-y-6 relative bg-background shadow-none shadow-foreground/5"
          >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-1">NAME</label>
                <input
                  type="text"
                  required
                  placeholder="YOUR NAME"
                  className="w-full h-14 px-6 bg-foreground/3 border-b border-foreground/10 focus:border-foreground focus:bg-background transition-all outline-none font-black text-sm placeholder:text-foreground/10 uppercase tracking-widest"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-1">EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="YOUR EMAIL"
                  className="w-full h-14 px-6 bg-foreground/3 border-b border-foreground/10 focus:border-foreground focus:bg-background transition-all outline-none font-black text-sm placeholder:text-foreground/10 uppercase tracking-widest"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-1">SUBJECT</label>
              <input
                type="text"
                required
                placeholder="MESSAGE SUBJECT"
                className="w-full h-14 px-6 bg-foreground/3 border-b border-foreground/10 focus:border-foreground focus:bg-background transition-all outline-none font-black text-sm placeholder:text-foreground/10 uppercase tracking-widest"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 ml-1">MESSAGE</label>
              <textarea
                required
                placeholder="YOUR MESSAGE..."
                rows={6}
                className="w-full px-6 py-6 bg-foreground/3 border-b border-foreground/10 focus:border-foreground focus:bg-background transition-all outline-none font-black text-sm placeholder:text-foreground/10 uppercase tracking-widest resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
 
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-16 bg-foreground text-background font-black text-lg sm:text-xl uppercase tracking-widest hover:bg-foreground/90 flex items-center justify-center gap-6 group ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <span>SENDING...</span>
              ) : isSuccess ? (
                <><span>MESSAGE SENT</span> <Send size={20} className="fill-current" /></>
              ) : (
                <><span>SEND MESSAGE</span> <Send size={20} className="fill-current group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
