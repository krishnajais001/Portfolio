import { motion } from 'framer-motion';
import Download from 'lucide-react/dist/esm/icons/download.js';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-8 overflow-hidden border-b border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6 mb-4 overflow-hidden">
              <div className="w-16 h-[2px] bg-foreground/10 shrink-0"></div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-foreground/40 whitespace-nowrap shrink-0">
                ASPIRING SOFTWARE ENGINEER
              </span>
              <div className="w-16 h-[2px] bg-foreground/10 shrink-0"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-4">
              KRISHNA <br />
              <span className="text-foreground/20">JAISWAL</span>
            </h1>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.4 }
                }
              }}
              className="text-base sm:text-xl text-foreground/60 max-w-2xl leading-tight font-medium uppercase tracking-tight mx-auto"
            >
              {"Architecture full stack development Bridging the gap between software precision and structural design".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-0 border border-foreground/20 w-full sm:w-fit items-stretch group overflow-hidden bg-background shadow-2xl shadow-foreground/5">
            <a
              href="/resume.pdf"
              className="flex items-center justify-center gap-4 px-12 py-6 bg-foreground text-background font-black uppercase tracking-widest hover:bg-foreground/90 transition-all text-sm"
            >
              DOWNLOAD_CV
              <Download size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-12 border-t border-foreground/10 w-full max-w-4xl">
            {[
              { label: "STATUS", value: "SEEKING INTERNSHIPS" },
              { label: "LOCATION", value: "DELHI NCR" },
              { label: "SPECIALIZATION", value: "FULL STACK DEVELOPMENT" },
              { label: "EDUCATION", value: "B.TECH CSE" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                 <div className="flex items-center justify-center">
                    <p className="text-[11px] text-foreground/40 font-black tracking-widest uppercase">{stat.label}</p>
                 </div>
                <p className="font-bold text-[11px] sm:text-xs tracking-tight text-foreground uppercase">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
