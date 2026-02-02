import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>{`
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0fbfff, #3b82f6);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <footer className="bg-[#081d2c] border-t border-[#0fbfff]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center"
          >
            {/* Single Line Footer */}
            <p className="text-white/60 text-sm">
              © {currentYear} Muhammad Abdullah. Crafted with{" "}
              <span className="text-[#0fbfff]">♥</span> and{" "}
              <span className="text-[#0fbfff]">React</span>
            </p>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <a
          href="#home"
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#0fbfff] to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-[#0fbfff]/30 hover:shadow-xl hover:shadow-[#0fbfff]/50 hover:scale-110 transition-all duration-300 z-40 group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </footer>
    </>
  );
}
