import { motion } from 'framer-motion';
import Code2 from 'lucide-react/dist/esm/icons/code-2.js';
import Database from 'lucide-react/dist/esm/icons/database.js';
import Layout from 'lucide-react/dist/esm/icons/layout.js';
import Terminal from 'lucide-react/dist/esm/icons/terminal.js';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.js';
import BookOpen from 'lucide-react/dist/esm/icons/book-open.js';
import Cloud from 'lucide-react/dist/esm/icons/cloud.js';
import Settings from 'lucide-react/dist/esm/icons/settings.js';

import { 
  SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiCplusplus, SiOpenjdk, SiTypescript,
  SiMysql, SiMongodb, SiSupabase, SiFirebase, SiDocker,
  SiAnthropic, SiOpenai, SiN8N, SiGit, SiGithub, SiPostman, SiPython, SiLangchain,
  SiKubernetes, SiGithubactions
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    description: "Core instruction languages for system logic, algorithms, and application backends.",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <SiOpenjdk className="text-[#E76F00]" /> }
    ]
  },
  {
    title: "Frontend Development",
    icon: <Layout size={20} />,
    description: "Designing and building high-performance, responsive, and modern user interfaces.",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-background" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
    ]
  },
  {
    title: "Backend Development",
    icon: <Terminal size={20} />,
    description: "Architecting server-side application logic, routing, and robust REST APIs.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="group-hover:text-background" /> },
      { name: "REST APIs", icon: <SiPostman className="text-[#FF6C37]" /> }
    ]
  },
  {
    title: "Database Systems",
    icon: <Database size={20} />,
    description: "Designing schemas, modeling relationships, and optimizing data retrieval.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={20} />,
    description: "Deploying applications and managing containerized services on cloud infrastructure.",
    skills: [
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "CI/CD", icon: <Settings size={12} className="text-foreground/60" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> }
    ]
  },
  {
    title: "Generative AI & LLMs",
    icon: <Sparkles size={20} />,
    description: "Orchestrating autonomous agents, retrieval systems, and prompt pipelines.",
    skills: [
      { name: "OpenAI API", icon: <SiOpenai className="text-[#10A37F]" /> },
      { name: "Claude API", icon: <SiAnthropic className="text-[#D97757]" /> },
      { name: "LangChain", icon: <SiLangchain className="text-[#1C3C3A]" /> },
      { name: "RAG", icon: <Database size={12} className="text-foreground/60" /> },
      { name: "Vector Databases", icon: <Database size={12} className="text-foreground/60" /> },
      { name: "Prompt Engineering", icon: <Sparkles size={12} className="text-foreground/60" /> }
    ]
  },
  {
    title: "Developer Tools",
    icon: <Settings size={20} />,
    description: "Using industry-standard utilities, IDEs, and workflow automation tools.",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="group-hover:text-background" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "n8n", icon: <SiN8N className="text-[#FF6D5A]" /> }
    ]
  },
  {
    title: "CS Fundamentals",
    icon: <BookOpen size={20} />,
    description: "Applying computer science theory to build mathematically sound and optimized software.",
    skills: [
      { name: "Data Structures & Algorithms", icon: <Code2 size={12} className="text-foreground/60" /> },
      { name: "Object-Oriented Programming", icon: <Code2 size={12} className="text-foreground/60" /> },
      { name: "DBMS", icon: <Database size={12} className="text-foreground/60" /> },
      { name: "Operating Systems", icon: <Terminal size={12} className="text-foreground/60" /> },
      { name: "Computer Networks", icon: <Terminal size={12} className="text-foreground/60" /> },
      { name: "System Design", icon: <Settings size={12} className="text-foreground/60" /> }
    ]
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
              className="group p-6 sm:p-10 bg-background relative overflow-hidden"
            >
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                   <div className="w-12 h-12 border border-foreground/10 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-all bg-foreground/5">
                      {category.icon}
                   </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight wrap-break-word">{category.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/60 font-medium uppercase tracking-tight max-w-md wrap-break-word">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 border border-foreground/10 flex items-center gap-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-all cursor-default bg-foreground/3"
                    >
                      <span className="text-sm">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/2 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-foreground/5 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
