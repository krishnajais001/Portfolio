import { motion, AnimatePresence } from 'framer-motion';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.js';
import Github from 'lucide-react/dist/esm/icons/github.js';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left.js';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right.js';
import { useState } from 'react';

const projects = [
  {
    id: "01",
    title: "Motion Workspace",
    problem: "Fragmented productivity workflows across multiple tabs lead to cognitive overhead and decreased study efficiency.",
    solution: "Engineered a unified brutalist workspace integrating a real-time study engine, Excalidraw whiteboarding, and persistent streak tracking.",
    stack: ["REACT", "SUPABASE", "EXCALIDRAW", "NODE.JS", "TAILWIND", "FRAMER MOTION", "EXPRESS"],
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?max-w=800",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "02",
    title: "EcoShop Architecture",
    problem: "Legacy e-commerce platforms suffer from slow page transitions and insecure payment processing flows.",
    solution: "Engineered a high-performance full-stack engine with secure Stripe integration and Redux-managed global state.",
    stack: ["REACT", "NODE", "MONGODB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    liveUrl: "https://ecoshop-mern.vercel.app",
    githubUrl: "https://github.com/krishnajais/ecoshop",
  },
  {
    id: "03",
    title: "AI Neural Interface",
    problem: "Standard chatbots lack deep context awareness and fail to retrieve specific knowledge from specialized datasets.",
    solution: "Designed a multi-layered infrastructure using GPT-4 and vector-retrieval for accurate, context-rich responses.",
    stack: ["NEXT.JS", "OPENAI", "SUPABASE"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    liveUrl: "https://ai-chat-krishna.vercel.app",
    githubUrl: "https://github.com/krishnajais/ai-chat",
  },
  {
    id: "04",
    title: "DevSync Pipeline",
    problem: "Remote development teams face high latency and desynchronization when managing real-time collaborative tasks.",
    solution: "Built a robust sync system using Socket.io to ensure instantaneous state updates across all team members.",
    stack: ["REACT", "NODE", "SOCKET.IO"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800",
    liveUrl: "https://devsync-app.onrender.com",
    githubUrl: "https://github.com/krishnajais/devsync",
  },
  {
    id: "05",
    title: "Nexus Cloud",
    problem: "Centralized file storage solutions often lack transparent end-to-end encryption for sensitive enterprise data.",
    solution: "Implemented a distributed management system with AES-256 encryption and optimized concurrency handling.",
    stack: ["REACT", "FIREBASE", "TYPESCRIPT"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    liveUrl: "https://nexus-cloud.vercel.app",
    githubUrl: "https://github.com/krishnajais/nexus",
  },
  {
    id: "06",
    title: "BlockEstate Ledger",
    problem: "Real estate transactions are historically slow, expensive, and prone to document tampering or fraud.",
    solution: "Developed a decentralized tracking system using Solidity smart contracts to create immutable property records.",
    stack: ["REACT", "SOLIDITY", "ETHERS.JS"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    liveUrl: "https://blockestate.online",
    githubUrl: "https://github.com/krishnajais/blockestate",
  },
  {
    id: "07",
    title: "Lumina Analytics",
    problem: "Visualizing enterprise-scale telemetry data hits performance bottlenecks with traditional rendering methods.",
    solution: "Architected a visualization platform using Redis caching and high-performance, real-time Chart.js integration.",
    stack: ["NEXT.JS", "CHART.JS", "REDIS", "TYPESCRIPT"],
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?w=800",
    liveUrl: "https://lumina-analytics.vercel.app",
    githubUrl: "https://github.com/krishnajais/lumina",
  }
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextProjects = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProjects = () => {
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = [
    projects[startIndex],
    projects[(startIndex + 1) % projects.length]
  ];

  return (
    <section id="projects" className="py-8 bg-background border-b border-foreground/5 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-8">
          <div className="space-y-4">
             <h2 className="text-[22px] sm:text-4xl font-black uppercase tracking-tight whitespace-nowrap leading-none">Technical <span className="text-foreground/20">Portfolio</span></h2>
             <div className="w-16 sm:w-24 h-1 bg-foreground rounded-none"></div>
          </div>
          
          <div className="flex items-center gap-6">
             <span className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase">
               NEXT PROJECT <span className="ml-2 text-foreground/20 tracking-widest">{projects[startIndex].id}/{projects.length < 10 ? `0${projects.length}` : projects.length}</span>
             </span>
             <div className="flex bg-foreground/5 border border-foreground/10 p-1">
               <button onClick={prevProjects} className="p-2.5 hover:bg-foreground hover:text-background transition-all border-r border-foreground/5">
                 <ChevronLeft size={16} />
               </button>
               <button onClick={nextProjects} className="p-2.5 hover:bg-foreground hover:text-background transition-all">
                 <ChevronRight size={16} />
               </button>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 overflow-hidden min-h-[350px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={`${project.id}-${idx}`}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: idx === 0 ? 20 : -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col bg-background relative overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-video border-b border-foreground/10 group overflow-hidden bg-foreground/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-background px-3 py-1 border border-foreground font-black text-[8px] tracking-widest uppercase">
                    PROJECT {project.id}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-loose wrap-break-word">
                      {project.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-[9px] text-foreground/30 font-black uppercase tracking-[0.2em]">Problem</p>
                      <p className="text-[11px] sm:text-xs text-foreground/70 font-medium uppercase tracking-tight leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-foreground/30 font-black uppercase tracking-[0.2em]">Solution</p>
                      <p className="text-[11px] sm:text-xs text-foreground/80 font-semibold uppercase tracking-tight leading-relaxed line-clamp-2">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-foreground/5">
                      {project.stack.map((item, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-black uppercase tracking-widest text-foreground/30">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center justify-center gap-2.5 p-3.5 bg-background hover:bg-foreground hover:text-background transition-all font-black text-[9px] tracking-widest uppercase"
                      >
                        LIVE <ExternalLink size={12} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center justify-center gap-2.5 p-3.5 bg-background hover:bg-foreground hover:text-background transition-all font-black text-[9px] tracking-widest uppercase"
                      >
                        CODE <Github size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-2">
          {projects.map((_, idx) => (
            <div 
              key={idx}
              className={`h-0.5 transition-all duration-500 ${
                idx === startIndex || idx === (startIndex + 1) % projects.length ? 'bg-foreground w-full' : 'bg-foreground/5 w-full'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
