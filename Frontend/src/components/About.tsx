import { motion } from 'framer-motion';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap.js';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js';
import Phone from 'lucide-react/dist/esm/icons/phone.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import Github from 'lucide-react/dist/esm/icons/github.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import Twitter from 'lucide-react/dist/esm/icons/twitter.js';
import FileDown from 'lucide-react/dist/esm/icons/file-down.js';
import LeetCode from './icons/LeetCode.js';
import { CodeChef, Codeforces, GFG, HackerRank } from './icons/PlatformIcons.js';

const About = () => {
  const infoItems = [
    { icon: <Mail size={14} />, label: "EMAIL", value: "jaiskrishna06@gmail.com" },
    { icon: <Phone size={14} />, label: "PHONE", value: "+91 6204815018" },
    { icon: <MapPin size={14} />, label: "LOCATION", value: "DELHI, INDIA" },
    { icon: <GraduationCap size={14} />, label: "EDUCATION", value: "B.TECH COMPUTER SCIENCE" },
  ];

  return (
    <section id="about" className="py-16 bg-background border-b border-foreground/5 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative overflow-hidden items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4 text-left">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none wrap-break-word">
                Engineering <span className="text-foreground/20">Aspirations</span>
              </h2>
              <div className="w-24 sm:w-40 h-1.5 bg-foreground rounded-none"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-black uppercase tracking-tight max-w-xl">
                I am a dedicated Computer Science & Engineering undergraduate at Guru Gobind Singh Indraprastha University. My passion lies in crafting high-performance, user-centric web applications and learning new technologies to solve real-world problems.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 mt-8">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 bg-background p-6 text-left">
                  <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center text-foreground shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-foreground/40 font-black uppercase tracking-widest mb-3">{item.label}</p>
                    <p className="font-bold text-[11px] sm:text-xs uppercase tracking-tighter whitespace-nowrap">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-10 border-foreground/5 p-2 bg-foreground/5 overflow-hidden">
              <div className="border border-foreground p-6 sm:p-10 space-y-8 relative z-10 bg-background">
                <ul className="space-y-8">
                  {[
                    { title: "MERN Stack Development", desc: "Building scalable, performat systems." },
                    { title: "Digital Blueprint Design", desc: "Constructing high-density UI architectures." },
                    { title: "Database Integrity", desc: "Structuring reliable and scalable data models." },
                    { title: "System Workflow", desc: "Optimizing dev cycles and CI/CD pipelines." }
                  ].map((focus, idx) => (
                    <li key={idx} className="space-y-2 border-l-2 border-foreground/10 pl-6 sm:pl-8 relative">
                      <div className="absolute top-1/2 -left-1.5 w-2 h-2 bg-foreground rotate-45"></div>
                      <span className="font-black text-xs uppercase tracking-widest text-foreground block">{focus.title}</span>
                      <span className="text-[10px] sm:text-[11px] text-foreground/40 font-bold uppercase tracking-tight">{focus.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </motion.div>
        </div>

        <div className="mt-20 pt-12 border-t border-foreground/5">
          <span className="text-[10px] font-black tracking-widest text-foreground/20 uppercase block mb-8 text-center">SOCIAL DIRECTORY</span>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 overflow-visible">
            {[
              { icon: <Github size={20} className="sm:w-5 sm:h-5" />, name: "GITHUB", href: "https://github.com/krishnajais001" },
              { icon: <Linkedin size={20} className="sm:w-5 sm:h-5" />, name: "LINKEDIN", href: "https://www.linkedin.com/in/krishnajais/" },
              { icon: <Mail size={18} className="sm:w-4.5 sm:h-4.5" />, name: "EMAIL", href: "mailto:jaiskrishna06@gmail.com" },
              { icon: <LeetCode size={20} className="sm:w-5 sm:h-5" />, name: "LEETCODE", href: "https://leetcode.com/u/krishnajais/" },
              { icon: <CodeChef size={20} className="sm:w-5 sm:h-5" />, name: "CODECHEF", href: "https://www.codechef.com/users/krishnajais" },
              { icon: <Codeforces size={20} className="sm:w-5 sm:h-5" />, name: "CODEFORCES", href: "https://codeforces.com/profile/krishnajais" },
              { icon: <HackerRank size={20} className="sm:w-5 sm:h-5" />, name: "HACKERRANK", href: "https://www.hackerrank.com/profile/krishnajais" },
              { icon: <GFG size={20} className="sm:w-5 sm:h-5" />, name: "GFG", href: "https://www.geeksforgeeks.org/user/jaiskrishna06/" },
              { icon: <Twitter size={20} className="sm:w-5 sm:h-5" />, name: "TWITTER", href: "https://x.com/KrishnaJais1432" },
              { icon: <FileDown size={20} className="sm:w-5 sm:h-5" />, name: "RESUME", href: "/resume.pdf" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-14 sm:h-14 border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all shrink-0"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-20">
                  {social.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-foreground"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
