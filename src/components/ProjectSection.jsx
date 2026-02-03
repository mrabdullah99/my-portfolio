import { motion } from "framer-motion";
import { useState } from "react";
import ecommerceImg from "../assets/ecommerce-project.png";
import foodDelApp from "../assets/food-del-app.png";
import schoolManagementImg from "../assets/school-management-project.png";
import journeyNest from "../assets/journey-nest.png";
import gym from "../assets/gym.png";
import stoneRockScissor from "../assets/stone-rock-scissor.png";
import amazonClone from "../assets/amazon-clone.png";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, Stripe payments, admin dashboard, and a chatbot for customer support.",
      image: ecommerceImg,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "Cloudinary",
        "JWT Authentication",
        "REST API",
      ],
      link: "https://ecommerce-store-pied-ten.vercel.app/",
      github: "https://github.com/mrabdullah99/ecommerce-web",
    },

    {
      id: 2,
      title: "Food Delivery App",
      category: "fullstack",
      description:
        "Multi-restaurant food delivery app with real-time order tracking, user authentication, and admin panel for managing restaurants and menus.",
      image: foodDelApp,
      technologies: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "REST API",
      ],
      link: "",
      github: "https://github.com/mrabdullah99/food-delivery-app",
    },

    {
      id: 3,
      title: "School Management System",
      category: "frontend",
      description:
        "A modern frontend for school management with dashboards for students, teachers, and admins, including class management, attendance, and grades.",
      image: schoolManagementImg,
      technologies: ["React", "Tailwind CSS", "Redux", "React Router"],
      link: "",
      github: "https://github.com/mrabdullah99/school-management-system",
    },

    {
      id: 4,
      title: "Journey Nest",
      category: "frontend",
      description:
        "React frontend for a tourism website to explore destinations, hotels, and travel packages, with smooth animations and responsive layouts.",
      image: journeyNest,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
      link: "",
      github: "https://github.com/mrabdullah99/journey-nest",
    },

    {
      id: 5,
      title: "Amazon Clone",
      category: "frontend",
      description:
        "A responsive Amazon frontend clone with product listings, search functionality, and a modern shopping UI.",
      image: amazonClone,
      technologies: ["React", "Tailwind CSS", "React Router", "Context API"],
      link: "",
      github: "https://github.com/mrabdullah99/amazon-clone",
    },

    {
      id: 6,
      title: "GYM Website",
      category: "frontend",
      description:
        "Frontend for a fitness website featuring services, trainers, packages, offers, and a contact form, fully responsive and visually appealing.",
      image: gym,
      technologies: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
      link: "",
      github: "https://github.com/mrabdullah99/gym",
    },

    {
      id: 7,
      title: "Stone Paper Scissors Game",
      category: "frontend",
      description:
        "Interactive Stone, Paper, Scissors game with dynamic UI, animations, and score tracking for a fun web experience.",
      image: stoneRockScissor,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      link: "",
      github: "https://github.com/mrabdullah99/stone-paper-scissors",
    },
  ];

  const filters = [
    { name: "All Projects", value: "all", icon: "📦" },
    { name: "Full Stack", value: "fullstack", icon: "🚀" },
    { name: "Frontend", value: "frontend", icon: "🎨" },
  ];

  const allFilteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Check if there are more projects to show
  const hasMoreOnMobile = allFilteredProjects.length > 3;
  const hasMoreOnMdAndAbove = allFilteredProjects.length > 6;

  return (
    <>
      <style>{`
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(15, 191, 255, 0.05), rgba(139, 92, 246, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .project-card:hover::before {
          opacity: 1;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(15, 191, 255, 0.3);
          border-color: rgba(15, 191, 255, 0.6);
        }
        
        .project-image {
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.15);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(8, 29, 44, 0.98), rgba(8, 29, 44, 0.8));
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #0fbfff, #3b82f6);
          color: white;
          box-shadow: 0 8px 20px rgba(15, 191, 255, 0.3);
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
      `}</style>

      <section
        id="projects"
        className="py-20 bg-[#081d2c] relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0fbfff] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-[#0fbfff] text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-[#0fbfff] rounded-full animate-pulse"></span>
              Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0fbfff] to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Explore my recent work and see how I transform ideas into
              exceptional digital experiences
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setShowAllProjects(false); // Reset to show initial 3 when filter changes
                }}
                className={`filter-btn px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.value
                    ? "active"
                    : "glass-morphism text-white/70 hover:bg-white/5 hover:text-white hover:border-[#0fbfff]/40"
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFilteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={scaleIn}
                className={`project-card glass-morphism rounded-xl overflow-hidden border border-[#0fbfff]/20 hover:border-[#0fbfff]/50 ${
                  !showAllProjects
                    ? index < 3
                      ? ""
                      : index < 6
                        ? "hidden md:block"
                        : "hidden"
                    : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-[#112e42]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />

                  {/* Overlay with Actions */}
                  <div className="project-overlay">
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-[#0fbfff] to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 transform hover:scale-110 transition-all duration-300"
                          title="View Project"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-300"
                        title="View Code"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#0fbfff]/10 text-[#0fbfff] text-xs rounded-full border border-[#0fbfff]/30 hover:bg-[#0fbfff]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {(hasMoreOnMobile || hasMoreOnMdAndAbove) && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-center mt-8"
            >
              {/* Mobile: Show if more than 3 projects */}
              {hasMoreOnMobile && (
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="md:hidden group px-8 py-3 glass-morphism text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <span>
                    {showAllProjects
                      ? "Show Less"
                      : `Show All (${allFilteredProjects.length} Projects)`}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showAllProjects ? "rotate-180" : ""
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
              )}

              {/* MD and above: Show if more than 6 projects */}
              {hasMoreOnMdAndAbove && (
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="hidden md:flex group px-8 py-3 glass-morphism text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 items-center gap-2 mx-auto"
                >
                  <span>
                    {showAllProjects
                      ? "Show Less"
                      : `Show All (${allFilteredProjects.length} Projects)`}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showAllProjects ? "rotate-180" : ""
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
              )}
            </motion.div>
          )}
          {/* Bottom CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="glass-morphism rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-white mb-3">
                Want to see more?
              </h3>
              <p className="text-white/70 mb-6">
                Check out my complete portfolio on GitHub
              </p>
              <a
                href="https://github.com/mrabdullah99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0fbfff] to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View All on GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
