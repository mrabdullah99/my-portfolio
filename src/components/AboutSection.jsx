import { motion } from "framer-motion";
import { useState } from "react";
import profileImg from "../assets/profile-pic.png";

export default function AboutSection() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const allSkills = [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 85, icon: "🚀" },
    { name: "JavaScript", level: 90, icon: "📜" },
    { name: "MongoDB", level: 90, icon: "🍃" },
    { name: "Flutter", level: 85, icon: "🌀" },
    { name: "Firebase", level: 80, icon: "🔥" },
    { name: "Git", level: 85, icon: "📦" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
    { name: "Postman", level: 95, icon: "📬" },
  ];

  return (
    <>
      <style>{`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skill-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(15, 191, 255, 0.1), rgba(139, 92, 246, 0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .skill-card:hover::before {
          opacity: 1;
        }
        
        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(15, 191, 255, 0.3);
          border-color: rgba(15, 191, 255, 0.6);
        }
        
        .progress-bar {
          animation: progressFill 1.5s ease-out forwards;
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
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .stat-card {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(15, 191, 255, 0.05);
        }
      `}</style>

      <section
        id="about"
        className="py-20 bg-[#081d2c] relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#0fbfff] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-[#0fbfff] text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-[#0fbfff] rounded-full animate-pulse"></span>
              Get to know me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0fbfff] to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Image with decorative elements */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInLeft}
            >
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0fbfff] via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>

                {/* Image container */}
                <div className="relative glass-morphism rounded-2xl p-2 overflow-hidden max-w-sm mx-auto">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={profileImg}
                      alt="Muhammad Abdullah"
                      className="w-full rounded-xl transform hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081d2c] via-transparent to-transparent opacity-50"></div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass-morphism rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0fbfff]">3+</div>
                    <div className="text-sm text-white/70">
                      Years Experience
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#0fbfff] rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-purple-500 rounded-full opacity-30"></div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                variants={fadeInRight}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Full Stack Developer &{" "}
                  <span className="gradient-text">Problem Solver</span>
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-[#0fbfff] to-purple-500 rounded-full mb-6"></div>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer who builds modern,
                  scalable web applications with a strong focus on clean
                  architecture and user experience.
                </p>

                <p className="text-lg text-white/70 leading-relaxed mb-4">
                  With 3+ years of experience, I've worked on projects ranging
                  from e-commerce platforms to SaaS applications, turning ideas
                  into reliable, high-quality solutions.
                </p>

                <p className="text-lg text-white/70 leading-relaxed">
                  I enjoy solving complex problems, learning new technologies,
                  and delivering products that are both functional and visually
                  polished.
                </p>
              </motion.div>

              {/* Experience Stats */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={fadeInRight}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "50+", label: "Projects", icon: "🚀" },
                  { value: "30+", label: "Clients", icon: "🤝" },
                  { value: "100%", label: "Satisfaction", icon: "⭐" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="stat-card glass-morphism rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold text-[#0fbfff] mb-1">
                      {item.value}
                    </div>
                    <div className="text-white/60 text-xs">{item.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={fadeInRight}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="/resume.pdf"
                  download="Resume.pdf"
                  className="group px-8 py-4 bg-[#0fbfff] text-white font-semibold rounded-lg shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 hover:bg-[#0fbfff]/90 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="group px-8 py-4 glass-morphism text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical <span className="gradient-text">Expertise</span>
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className={`group relative ${index >= 6 && !showAllSkills ? "hidden md:block" : ""}`}
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        {skill.icon}
                      </span>
                      <h4 className="text-white font-semibold text-lg group-hover:text-[#0fbfff] transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-2xl font-bold text-[#0fbfff]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="relative h-3 bg-[#112e42] rounded-full overflow-hidden group-hover:translate-x-2 transition-transform duration-300">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          animation: "shimmer 2s infinite",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>

                    {/* Progress Fill */}
                    <div
                      className="progress-bar h-full bg-gradient-to-r from-[#0fbfff] via-blue-500 to-purple-500 rounded-full relative overflow-hidden"
                      style={{
                        "--progress-width": `${skill.level}%`,
                        width: "0%",
                      }}
                    >
                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More/Less Button - Only visible on mobile when there are more skills */}
            {allSkills.length > 6 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                variants={fadeInUp}
                className="text-center mt-8 md:hidden"
              >
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="group px-8 py-3 glass-morphism text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <span>
                    {showAllSkills ? "Show Less" : "Show More Skills"}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showAllSkills ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </div>

          {/* What I Do / Specialties */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="mt-20 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Creative Solutions",
                description:
                  "Turning complex problems into elegant, user-friendly solutions",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Fast Performance",
                description:
                  "Building lightning-fast applications optimized for speed",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
                title: "Scalable Code",
                description:
                  "Writing maintainable code that grows with your business",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={scaleIn}
                className="glass-morphism rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0fbfff] to-purple-500 rounded-full mb-4 text-white">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
