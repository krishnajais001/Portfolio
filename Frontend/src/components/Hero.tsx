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
                AI ENGINEER INTERN @ QUILD
              </span>
              <div className="w-16 h-[2px] bg-foreground/10 shrink-0"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-4">
              KRISHNA <br />
              <span className="text-foreground/20">JAISWAL</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-xl text-foreground/60 max-w-2xl leading-tight font-medium tracking-tight mx-auto"
            >
              Full Stack & GenAI Developer focused on building modern web applications, AI agents, automation workflows, and production-ready AI solutions.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-0 border border-foreground/20 w-full sm:w-fit items-stretch group overflow-hidden bg-background shadow-2xl shadow-foreground/5">
            <a
              href="https://drive.google.com/file/d/14SyeDMjf0CyZgXewLMdMKrDtiy0rBxaw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-12 py-6 bg-foreground text-background font-black uppercase tracking-widest hover:bg-foreground/90 transition-all text-sm"
            >
              DOWNLOAD_CV
              <Download size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-12 border-t border-foreground/10 w-full max-w-4xl">
            {[
              { label: "STATUS", value: "BUILDING & LEARNING" },
              { label: "LOCATION", value: "GURGAON, HARYANA" },
              { label: "SPECIALIZATION", value: "FULL STACK & GENAI" },
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
