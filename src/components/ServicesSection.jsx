import { motion } from "framer-motion";

export default function ServicesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks with pixel-perfect designs.",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: ["React.js & Next.js", "Tailwind CSS", "Responsive Design"],
      gradient: "from-[#0fbfff] to-blue-500",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications with Node.js and database systems.",
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      features: ["Node.js & Express", "MongoDB & PostgreSQL", "RESTful APIs"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "End-to-end web application development with seamless integration and deployment.",
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      features: ["MERN Stack", "Cloud Deployment", "Authentication"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "API Integration",
      description:
        "Integrating third-party APIs and services to extend functionality.",
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
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      features: ["REST APIs", "Payment Gateways", "Social Media APIs"],
      gradient: "from-blue-500 to-purple-500",
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

        .service-card {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
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

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(15, 191, 255, 0.3);
          border-color: rgba(15, 191, 255, 0.6);
        }

        .service-icon {
          transition: all 0.4s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
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
        id="services"
        className="py-20 bg-[#112e42] relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0fbfff] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Title */}
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
              What I Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0fbfff] to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Comprehensive web development services to transform your ideas
              into reality
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={scaleIn}
                className="service-card glass-morphism rounded-xl p-6 border border-[#0fbfff]/20 hover:border-[#0fbfff]/50"
              >
                {/* Icon */}
                <div
                  className={`service-icon w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/60 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#0fbfff]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-[#0fbfff]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="glass-morphism rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to start your project?
              </h3>
              <p className="text-white/70 mb-6 max-w-xl">
                Let's work together to bring your vision to life
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0fbfff] to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 transform hover:scale-105 transition-all duration-300"
              >
                <span>Get Started</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
