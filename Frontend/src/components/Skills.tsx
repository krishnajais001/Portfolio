import { motion } from 'framer-motion';
import Code2 from 'lucide-react/dist/esm/icons/code-2.js';
import Database from 'lucide-react/dist/esm/icons/database.js';
import Layout from 'lucide-react/dist/esm/icons/layout.js';
import Terminal from 'lucide-react/dist/esm/icons/terminal.js';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.js';
import { 
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiCplusplus, SiOpenjdk, SiTypescript, SiZod, SiReactquery,
  SiMysql, SiMongodb, SiSupabase, SiPostgresql,
  SiGit, SiGithub, SiVercel, SiNetlify, SiRender, SiPostman,
  SiAnthropic, SiOpenai, SiN8N, SiGooglegemini, SiFramer
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Frontend Core",
    icon: <Layout size={20} />,
    description: "Architecting high-performance, accessible, and responsive visual interfaces.",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "REACT.JS", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-background" /> }
    ],
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Backend Core",
    icon: <Code2 size={20} />,
    description: "Building robust backend architectures and complex systems logic.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="group-hover:text-background" /> },
      { name: "C++ (DSA)", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "Java", icon: <SiOpenjdk className="text-[#E76F00]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Zod", icon: <SiZod className="text-[#3068B7]" /> },
      { name: "TanStack Query", icon: <SiReactquery className="text-[#FF4154]" /> }
    ],
    color: "from-purple-500/10 to-transparent"
  },
  {
    title: "Database Architecture",
    icon: <Database size={20} />,
    description: "Designing resilient data schemas and optimizing information retrieval.",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> }
    ],
    color: "from-green-500/10 to-transparent"
  },
  {
    title: "System Operations",
    icon: <Terminal size={20} />,
    description: "Managing deployment pipelines and version-controlled environments.",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="group-hover:text-background" /> },
      { name: "Vercel", icon: <SiVercel className="group-hover:text-background" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
    ],
    color: "from-orange-500/10 to-transparent"
  },
  {
    title: "Intelligent Workflows",
    icon: <Sparkles size={20} />,
    description: "Leveraging agentic AI systems and LLMs to refine and accelerate complex development cycles.",
    skills: [
      { name: "Antigravity", icon: <Sparkles className="text-pink-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Claude AI", icon: <SiAnthropic className="text-[#D97757]" /> },
      { name: "Cursor", icon: <Sparkles className="text-cyan-400" /> },
      { name: "ChatGPT", icon: <SiOpenai className="text-[#10A37F]" /> },
      { name: "Gemini", icon: <SiGooglegemini className="text-[#8E75C2]" /> },
      { name: "n8n", icon: <SiN8N className="text-[#FF6D5A]" /> },
      { name: "Stitch", icon: <Sparkles className="text-purple-400" /> }
    ],
    color: "from-pink-500/10 to-transparent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-8 bg-background border-b border-foreground/5 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 sm:mb-10 gap-12 text-left">
          <div className="space-y-4">
            <h2 className="text-[26px] sm:text-5xl font-black uppercase tracking-tight whitespace-nowrap leading-none">Skill <span className="text-foreground/20">Manifesto</span></h2>
            <div className="w-24 sm:w-40 h-1.5 bg-foreground rounded-none"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`group p-6 sm:p-10 bg-background relative overflow-hidden ${category.title === "Intelligent Workflows" ? "md:col-span-2" : ""}`}
            >
              <div className={`relative z-10 space-y-8 ${category.title === "Intelligent Workflows" ? "flex flex-col items-center text-center" : ""}`}>
                <div className={`flex items-center ${category.title === "Intelligent Workflows" ? "justify-center" : "justify-between"}`}>
                   <div className={`w-12 h-12 border border-foreground/10 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-all ${category.title === "Intelligent Workflows" ? "bg-transparent" : "bg-foreground/5"}`}>
                      {category.icon}
                   </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight wrap-break-word">{category.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/60 font-medium uppercase tracking-tight max-w-md wrap-break-word">
                    {category.description}
                  </p>
                </div>

                <div className={`flex flex-wrap gap-3 ${category.title === "Intelligent Workflows" ? "justify-center" : ""}`}>
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 border border-foreground/10 flex items-center gap-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-all cursor-default ${category.title === "Intelligent Workflows" ? "bg-transparent" : "bg-foreground/3"}`}
                    >
                      <span className="text-sm">{(skill as any).icon}</span>
                      {(skill as any).name}
                    </div>
                  ))}
                </div>
              </div>
              
              {category.title !== "Intelligent Workflows" && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/2 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-foreground/5 transition-all"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
