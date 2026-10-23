import { motion } from "framer-motion";

export default function ExperienceSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Firnas",
      type: "Full-time",
      period: "5 months",
      location: "Pakistan",
      description:
        "Shipped multiple internal products with a focus on clean architecture, secure authentication, and maintainable REST APIs.",
      highlights: [
        "Built a Document Generator for invoices, experience letters, and business proposals with multiple templates, live preview, and PDF export",
        "Built Fleet Manager, a fleet management app for drivers, vehicles, routes, trips, fuel, accidents, and compliance documents, with separate admin and driver portals",
        "Implemented secure authentication, password reset, approval workflows, and expiry notifications across these products",
        "Developed the company's official website",
      ],
      tech: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "AUXIO One (Australian Client)",
      type: "Freelance",
      period: "Freelance",
      location: "Remote · Australia",
      description:
        "Built a multi-tenant SaaS platform for an Australian disability-services client to manage organizations, teams, and participants.",
      highlights: [
        "Built a multi-tenant SaaS platform that lets disability service providers manage organizations, teams, and participants",
        "Implemented role-based access control, module-based permissions, and participant onboarding through scalable REST APIs",
      ],
      tech: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gradient-text {
          background: linear-gradient(135deg, #0fbfff, #3b82f6, #8b5cf6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .experience-card {
          transition: all 0.4s ease;
        }

        .experience-card:hover {
          transform: translateY(-6px);
          border-color: rgba(15, 191, 255, 0.5);
          box-shadow: 0 16px 40px rgba(15, 191, 255, 0.2);
        }

        .timeline-dot {
          box-shadow: 0 0 0 6px rgba(15, 191, 255, 0.15);
        }
      `}</style>

      <section
        id="experience"
        className="py-20 bg-[#081d2c] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#0fbfff] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-[#0fbfff] text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-[#0fbfff] rounded-full animate-pulse"></span>
              Career Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0fbfff] to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Production web applications built with modern full-stack
              technologies for clients and companies
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0fbfff]/60 via-purple-500/40 to-transparent md:-translate-x-1/2"></div>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className={`relative md:flex ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#0fbfff] timeline-dot md:-translate-x-1/2 mt-8 z-10"></div>

                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] experience-card glass-morphism rounded-2xl p-6 border border-[#0fbfff]/20 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#0fbfff]/15 text-[#0fbfff] border border-[#0fbfff]/30">
                        {exp.type}
                      </span>
                      <span className="text-white/50 text-sm">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#0fbfff] font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-white/50 text-sm mb-4">{exp.location}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-white/65 text-sm leading-relaxed"
                        >
                          <span className="text-[#0fbfff] mt-1 shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#0fbfff]/10 text-[#0fbfff] text-xs rounded-full border border-[#0fbfff]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
