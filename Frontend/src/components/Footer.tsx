import Github from 'lucide-react/dist/esm/icons/github.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import Twitter from 'lucide-react/dist/esm/icons/twitter.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import FileDown from 'lucide-react/dist/esm/icons/file-down.js';
import LeetCode from './icons/LeetCode.js';
import { CodeChef, Codeforces, GFG, HackerRank } from './icons/PlatformIcons.js';

import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentDate, setCurrentDate] = useState(() => new Date().toLocaleDateString('en-US'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString('en-US'));
    }, 60000); // Check/update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-20 bg-background border-t border-foreground/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 mb-20">
          {/* BRANDING */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
              KRISHNA <span className="text-foreground/20">JAISWAL</span>
            </h2>
            <div className="border-l-2 border-foreground/5 pl-8 py-1 space-y-2">
              <p className="text-[10px] sm:text-[11px] text-foreground/40 font-bold tracking-wider leading-relaxed text-left">
                Full Stack & GenAI Developer focused on building <br />
                modern web applications, AI agents, automation <br />
                workflows, and production-ready AI solutions.
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6 md:pl-8 lg:pl-16">
            <span className="text-sm font-black tracking-[0.3em] text-foreground/20 uppercase">LINKS</span>
            <div className="flex flex-col gap-4">
              {['ABOUT', 'PROJECTS', 'SKILLS', 'TIMELINE', 'CONTACT'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-black tracking-widest text-foreground/40 hover:text-foreground transition-all uppercase">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* SOCIALS */}
          <div className="space-y-6 md:pl-8 lg:pl-16">
            <span className="text-sm font-black tracking-[0.3em] text-foreground/20 uppercase">SOCIALS</span>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: <Github size={18} />, name: "GITHUB", href: "https://github.com/krishnajais001" },
                { icon: <Linkedin size={18} />, name: "LINKEDIN", href: "https://www.linkedin.com/in/krishnajaiswal06/" },
                { icon: <Mail size={16} />, name: "EMAIL", href: "mailto:jaiskrishna06@gmail.com" },
                { icon: <LeetCode size={18} />, name: "LEETCODE", href: "https://leetcode.com/u/krishnajais/" },
                { icon: <CodeChef size={18} />, name: "CODECHEF", href: "https://www.codechef.com/users/krishnajais" },
                { icon: <Codeforces size={18} />, name: "CODEFORCES", href: "https://codeforces.com/profile/krishnajais" },
                { icon: <HackerRank size={18} />, name: "HACKERRANK", href: "https://www.hackerrank.com/profile/krishnajais" },
                { icon: <GFG size={18} />, name: "GFG", href: "https://www.geeksforgeeks.org/user/jaiskrishna06/" },
                { icon: <Twitter size={18} />, name: "TWITTER", href: "https://x.com/KrishnaJais1432" },
                { icon: <FileDown size={18} />, name: "RESUME", href: "https://drive.google.com/file/d/14SyeDMjf0CyZgXewLMdMKrDtiy0rBxaw/view?usp=sharing" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-foreground"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* TACTICAL BAR */}
        <div className="pt-16 border-t border-foreground/3 space-y-12">
          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-foreground/10 translate-y-[-50%]"></div>
            <div className="relative flex flex-wrap items-center justify-center gap-6 z-10">
              <div className="px-6 py-2.5 border border-foreground/10 bg-background flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">
                  DATE: {currentDate}
                </span>
              </div>
              <div className="px-6 py-2.5 border border-foreground/10 bg-background flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">
                  LOC: GURGAON, HARYANA
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-px bg-foreground/10"></div>
            <p className="text-[10px] font-black tracking-[0.5em] text-foreground/30 uppercase text-center">
              © {currentYear} ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[80%] left-0 w-full h-px bg-foreground/5"></div>
    </footer>
  );
};

export default Footer;
