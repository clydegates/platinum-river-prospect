import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        <div className={`font-display text-2xl tracking-wide transition-colors duration-500 ${scrolled ? "text-navy" : "text-ivory"}`}>
          Platinum River Elite
        </div>
        <nav className="hidden md:flex items-center gap-10 font-body text-xs tracking-[0.15em] uppercase">
          {["About", "Services", "Impact", "Leadership"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-500 ${
                scrolled ? "text-warm-gray hover:text-navy" : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-4 px-6 py-2.5 font-body text-xs tracking-[0.15em] uppercase transition-all duration-500 ${
              scrolled
                ? "bg-navy text-ivory hover:bg-navy-soft"
                : "bg-ivory/20 text-ivory border border-ivory/40 hover:bg-ivory/30"
            }`}
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className={`md:hidden px-5 py-2 font-body text-xs tracking-[0.15em] uppercase transition-all duration-500 ${
            scrolled ? "bg-navy text-ivory" : "bg-ivory/20 text-ivory border border-ivory/40"
          }`}
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
