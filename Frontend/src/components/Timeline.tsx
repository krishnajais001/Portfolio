import { motion } from 'framer-motion';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap.js';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase.js';
import Award from 'lucide-react/dist/esm/icons/award.js';

const professionalExperience = [
  {
    type: 'EXPERIENCE',
    icon: <Briefcase size={16} />,
    title: "AI Engineer Intern",
    institution: "Quild",
    date: "April 2026 – Present",
    description: "Built AI-powered applications; design and implement APIs, plugins, and internal libraries. Design and implement multi-agent systems, workflows, and RAG pipelines; translate ideas into scalable architectures. Handle reliability, security, and edge cases; optimize performance, latency, and cost; deploy and maintain production applications.",
    status: "ACTIVE",
  },
  {
    type: 'EXPERIENCE',
    icon: <Briefcase size={16} />,
    title: "Quality Assurance Specialist",
    institution: "SolveLancer (Freelancer)",
    date: "Jan 2021 – Dec 2021",
    description: "Utilized problem-solving skills to resolve complex issues as a Math problem solver. Ensured accuracy and quality of answers as a quality checker.",
    status: "COMPLETED",
  },
];

const academicJourney = [
  {
    type: 'EDUCATION',
    icon: <GraduationCap size={16} />,
    title: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Guru Gobind Singh Indraprastha University, New Delhi",
    date: "Aug 2025 – Present",
    description: "Pursuing Bachelor of Technology in Computer Science & Engineering. Focusing on advanced software architectures and core computer science.",
    status: "PURSUING",
  },
  {
    type: 'EDUCATION',
    icon: <GraduationCap size={16} />,
    title: "Diploma in Computer Engineering - 76.63%",
    institution: "Aditya Institute of Technology, New Delhi",
    date: "Aug 2021 – July 2024",
    description: "Completed with an aggregate score of 76.63%. Groundwork in computer engineering principles and hardware-software interfacing.",
    status: "COMPLETED",
  },
];

const achievements = [
  {
    title: "Secured AIR 13 in GGSIPU CET 2025",
    description: "Achieved All India Rank 13 in Guru Gobind Singh Indraprastha University Common Lateral Entry Entrance Examination 2025.",
    icon: <Award size={16} />,
  }
];

const certifications = [
  {
    title: "National Cadet Corps A (NCC A)",
    description: "Completed NCC A Certificate (Army Wing). Participated in parade drills, camps, and community service activities. Developed discipline, teamwork, and leadership skills.",
    icon: <Award size={16} />,
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-8 bg-background border-b border-foreground/5 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-10 space-y-12">
        
        {/* PROFESSIONAL SECTION */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight wrap-break-word leading-none">Professional <span className="text-foreground/20">Work</span></h2>
            <div className="w-12 sm:w-16 h-1.5 bg-foreground rounded-none"></div>
          </div>

          <div className="space-y-4 border-l border-foreground/10 pl-12 relative">
            {professionalExperience.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-[57px] top-1.5 w-4 h-4 border-2 border-foreground bg-background rotate-45 z-10 group-hover:bg-foreground transition-colors" />
                
                <div className="space-y-2 text-left">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none">{event.title}</h3>
                    <p className="text-xs sm:text-sm font-bold text-foreground/40 uppercase tracking-widest">{event.institution}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mt-1">{event.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium uppercase tracking-tight max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACADEMIC SECTION */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight wrap-break-word leading-none">Academic <span className="text-foreground/20">Journey</span></h2>
            <div className="w-12 sm:w-16 h-1.5 bg-foreground rounded-none"></div>
          </div>

          <div className="space-y-4 border-l border-foreground/10 pl-12 relative">
            {academicJourney.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-[57px] top-1.5 w-4 h-4 border-2 border-foreground bg-background rotate-45 z-10 group-hover:bg-foreground transition-colors" />
                
                <div className="space-y-2 text-left">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none">{event.title}</h3>
                    <p className="text-xs sm:text-sm font-bold text-foreground/40 uppercase tracking-widest">{event.institution}</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mt-1">{event.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium uppercase tracking-tight max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS & CERTIFICATIONS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          {/* ACHIEVEMENTS */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight wrap-break-word leading-none">Key <span className="text-foreground/20">Achievements</span></h2>
              <div className="w-12 sm:w-16 h-1.5 bg-foreground rounded-none"></div>
            </div>

            <div className="space-y-4 border-l border-foreground/10 pl-12 relative">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[57px] top-1.5 w-4 h-4 border-2 border-foreground bg-background rotate-45 z-10 group-hover:bg-foreground transition-colors" />
                  
                  <div className="space-y-2 text-left">
                     <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none">{achievement.title}</h3>
                     <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium uppercase tracking-tight max-w-xl">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight wrap-break-word leading-none">Certifications</h2>
              <div className="w-12 sm:w-16 h-1.5 bg-foreground rounded-none"></div>
            </div>

            <div className="space-y-4 border-l border-foreground/10 pl-12 relative">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[57px] top-1.5 w-4 h-4 border-2 border-foreground bg-background rotate-45 z-10 group-hover:bg-foreground transition-colors" />
                  
                  <div className="space-y-2 text-left">
                     <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none">{cert.title}</h3>
                     <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium uppercase tracking-tight max-w-xl">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
