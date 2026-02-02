import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .glass-morphism {
          background: rgba(8, 29, 44, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0fbfff, #3b82f6);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        
        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }
        
        .nav-link.active {
          color: #0fbfff;
        }
        
        .mobile-menu-enter {
          animation: slideDown 0.3s ease-out;
        }
        
        .logo-spin {
          animation: rotate 20s linear infinite;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-slideDown ${
          isScrolled
            ? "glass-morphism shadow-lg shadow-[#0fbfff]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 animate-fadeIn">
              <a href="#home" className="group flex items-center">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  {/* Multiple layered glows for depth */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-[#0fbfff] to-[#3b82f6] opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="absolute inset-0 rounded-full blur-2xl bg-[#0fbfff] opacity-10 group-hover:opacity-30 transition-opacity duration-500" />

                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 rounded-full border border-[#0fbfff]/20 group-hover:border-[#0fbfff]/40 transition-all duration-500 group-hover:scale-110" />
                  </div>

                  {/* Left bracket */}
                  <span className="relative z-10 text-3xl font-bold text-[#0fbfff] transition-all duration-300 group-hover:-translate-x-1.5 group-hover:text-[#3b82f6] group-hover:drop-shadow-[0_0_8px_rgba(15,191,255,0.8)]">
                    &lt;
                  </span>

                  {/* Slash with enhanced effects */}
                  <span className="relative z-10 mx-0.5 text-3xl font-bold bg-gradient-to-b from-[#0fbfff] via-[#3b82f6] to-[#0fbfff] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 drop-shadow-[0_0_10px_rgba(15,191,255,0.5)]">
                    /
                  </span>

                  {/* Right bracket */}
                  <span className="relative z-10 text-3xl font-bold text-[#0fbfff] transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#3b82f6] group-hover:drop-shadow-[0_0_8px_rgba(15,191,255,0.8)]">
                    &gt;
                  </span>

                  {/* Animated corner particles */}
                  <div
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#ff499e] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,73,158,0.8)]"
                    style={{ animationDuration: "2s" }}
                  />
                  <div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#0fbfff] rounded-full animate-pulse shadow-[0_0_8px_rgba(15,191,255,0.8)]"
                    style={{ animationDuration: "2s", animationDelay: "1s" }}
                  />

                  {/* Orbiting dots on hover */}
                  <div
                    className="absolute top-0 right-0 w-1 h-1 bg-gradient-to-r from-[#0fbfff] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-1 h-1 bg-gradient-to-r from-[#3b82f6] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-spin"
                    style={{
                      animationDuration: "4s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                  className={`nav-link px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 animate-fadeIn ${
                    activeSection === item.name.toLowerCase()
                      ? "active bg-[#0fbfff]/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {item.name}
                </a>
              ))}

              {/* CTA Button */}
              <a
                href="#contact"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-[#0fbfff] to-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 transform hover:scale-105 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-[#0fbfff] hover:bg-white/5 transition-all duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 glass-morphism border-t border-[#0fbfff]/20 mobile-menu-enter">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.name.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-gradient-to-r from-[#0fbfff]/20 to-blue-500/20 text-[#0fbfff] border-l-4 border-[#0fbfff]"
                    : "text-white/80 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-[#0fbfff] to-blue-500 text-white text-center font-semibold rounded-lg shadow-lg shadow-[#0fbfff]/30"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
