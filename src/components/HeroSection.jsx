import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Specialist",
    "Backend Developer",
    "Flutter Developer",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentText = roles[currentIndex];

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        setCurrentRole(
          currentText.substring(0, charIndex + (isDeleting ? -1 : 1)),
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    };

    const timeout = handleTyping();
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, roles]);

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
        
        /* Clean gradient text without problematic animations */
        .gradient-text {
          background: linear-gradient(135deg, #0fbfff, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Enhanced name with strong glow - NO color animation */
        .name {
        font-size: clamp(2.8rem, 5vw, 4.2rem);
        }

        .name-accent {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          background: linear-gradient(
          135deg,
          #0fbfff 0%,
          #0fbfff 35%,  
          #3b82f6 60%,
          #8b5cf6 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        }

        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .code-block {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.6;
        }
        
        /* 3D Scene Styles */
        .scene-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .cube {
          width: 100px;
          height: 100px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 15s infinite linear;
        }
        
        @keyframes rotateCube {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        
        .cube-face {
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(15, 191, 255, 0.1);
          border: 2px solid rgba(15, 191, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .cube-face:nth-child(1) { transform: rotateY(0deg) translateZ(50px); }
        .cube-face:nth-child(2) { transform: rotateY(90deg) translateZ(50px); }
        .cube-face:nth-child(3) { transform: rotateY(180deg) translateZ(50px); }
        .cube-face:nth-child(4) { transform: rotateY(-90deg) translateZ(50px); }
        .cube-face:nth-child(5) { transform: rotateX(90deg) translateZ(50px); }
        .cube-face:nth-child(6) { transform: rotateX(-90deg) translateZ(50px); }
        
        /* Beautiful typewriter line */
        .typewriter-line {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(
            90deg,
            rgba(15, 191, 255, 0.1) 0%,
            rgba(59, 130, 246, 0.1) 50%,
            rgba(139, 92, 246, 0.1) 100%
          );
          border-left: 3px solid #0fbfff;
          border-radius: 0.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .typewriter-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(15, 191, 255, 0.2),
            transparent
          );
          animation: shimmer 3s infinite;
        }
        
        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: linear-gradient(to bottom, #0fbfff, #3b82f6);
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          box-shadow: 0 0 8px rgba(15, 191, 255, 0.8);
        }
        
        .role-bracket {
          font-family: 'Courier New', monospace;
          font-weight: bold;
          color: #0fbfff;
          text-shadow: 0 0 10px rgba(15, 191, 255, 0.5);
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen bg-[#081d2c] pt-16 flex items-center relative overflow-hidden"
      >
        {/* Static Background - NO animations that interfere with text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#0fbfff] rounded-full opacity-3 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-3 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-3 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading - Crystal Clear Name */}
              <div
                className="animate-fadeInLeft opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-lg md:text-xl text-white/70 mt-4 font-normal">
                    Hi, I'm
                  </span>
                  {/* <span className="name-text block">Muhammad Abdullah</span> */}
                  <span className="name text-white/90">
                    Muhammad <span className="name-accent">Abdullah</span>
                  </span>
                </h1>
              </div>

              {/* Beautiful Typewriter Effect Line */}
              <div
                className="animate-fadeInLeft opacity-0"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="typewriter-line">
                  <span className="role-bracket">&lt;</span>
                  <span className="text-white/90 font-medium text-xl md:text-2xl min-w-[280px]">
                    {currentRole || "\u00A0"}
                  </span>
                  <span className="typewriter-cursor"></span>
                  <span className="role-bracket">/&gt;</span>
                </div>
              </div>

              {/* Description */}
              <div
                className="animate-fadeInLeft opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                  Crafting exceptional digital experiences with modern
                  technologies. Specialized in building scalable web
                  applications that blend beautiful design with powerful
                  functionality.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div
                className="flex flex-wrap gap-3 animate-fadeInLeft opacity-0"
                style={{ animationDelay: "0.5s" }}
              >
                {["React", "Node.js", "Express.js", "MongoDB", "Flutter"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass-morphism rounded-lg text-[#0fbfff] text-sm font-medium hover:bg-[#0fbfff]/10 hover:border-[#0fbfff]/40 transition-all duration-300 border border-[#0fbfff]/20"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 animate-fadeInLeft opacity-0"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-gradient-to-r from-[#0fbfff] to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>View My Work</span>
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

                <a
                  href="#contact"
                  className="group px-8 py-4 glass-morphism text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Let's Talk</span>
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - 3D Animated Scene */}
            <div className="relative h-[600px] hidden lg:block">
              <div
                className="animate-fadeInRight opacity-0 h-full"
                style={{ animationDelay: "0.3s" }}
              >
                {/* Central Code Window */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]">
                  <div className="glass-morphism rounded-2xl p-6 shadow-2xl shadow-[#0fbfff]/20 animate-float">
                    {/* Window Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-white/50 text-xs ml-2">App.jsx</div>
                    </div>

                    {/* Code Content */}
                    <div className="code-block text-white/80 space-y-2">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">developer</span> = {`{`}
                      </div>
                      <div className="ml-4">
                        <span className="text-green-300">name</span>:{" "}
                        <span className="text-orange-300">
                          'Muhammad Abdullah'
                        </span>
                        ,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-300">role</span>:{" "}
                        <span className="text-orange-300">
                          'Full Stack Dev'
                        </span>
                        ,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-300">skills</span>: [
                      </div>
                      <div className="ml-8">
                        <span className="text-orange-300">'React'</span>,{" "}
                        <span className="text-orange-300">'Node.js'</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-orange-300">'MongoDB'</span>,{" "}
                        <span className="text-orange-300">'Next.js'</span>
                      </div>
                      <div className="ml-4">],</div>
                      <div className="ml-4">
                        <span className="text-green-300">passion</span>:{" "}
                        <span className="text-orange-300">
                          'Building awesome things'
                        </span>
                      </div>
                      <div>{`}`};</div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Cube 1 */}
                <div className="absolute top-20 right-20 scene-3d">
                  <div className="cube">
                    <div className="cube-face">
                      <svg
                        className="w-8 h-8 text-[#0fbfff]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                    </div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                  </div>
                </div>

                {/* Floating 3D Cube 2 */}
                <div
                  className="absolute bottom-20 left-20 scene-3d"
                  style={{ animation: "float 7s ease-in-out infinite" }}
                >
                  <div
                    className="cube"
                    style={{
                      animation: "rotateCube 20s infinite linear reverse",
                    }}
                  >
                    <div className="cube-face">
                      <svg
                        className="w-8 h-8 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                    <div className="cube-face"></div>
                  </div>
                </div>

                {/* Orbiting Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        animation: `orbit ${15 + i * 5}s linear infinite ${i * 2}s`,
                      }}
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${i === 0 ? "bg-[#0fbfff]" : i === 1 ? "bg-purple-500" : "bg-blue-500"} shadow-lg`}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Floating Icons */}
                <div
                  className="absolute top-32 left-12 glass-morphism rounded-xl p-4 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <svg
                    className="w-10 h-10 text-[#0fbfff]"
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
                </div>

                <div
                  className="absolute bottom-32 right-12 glass-morphism rounded-xl p-4 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <svg
                    className="w-10 h-10 text-purple-400"
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
                </div>

                {/* Pulsing Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-[#0fbfff]/20 rounded-full"
                      style={{
                        animation: `ripple 4s ease-out infinite ${i * 1.3}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Gradient Orbs - Static */}
                <div className="absolute top-16 right-32 w-20 h-20 rounded-full bg-gradient-to-br from-[#0fbfff] to-purple-500 opacity-20 blur-xl"></div>
                <div className="absolute bottom-24 left-32 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-[#0fbfff] opacity-15 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
