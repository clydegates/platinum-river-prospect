import { motion } from "framer-motion";

const SiteHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-ivory/70 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        <div className="font-display text-2xl text-navy tracking-wide">
          Platinum River Elite
        </div>
        <nav className="hidden md:flex items-center gap-10 font-body text-xs tracking-[0.15em] uppercase text-warm-gray">
          <a href="#about" className="hover:text-navy transition-colors duration-300">About</a>
          <a href="#services" className="hover:text-navy transition-colors duration-300">Services</a>
          <a href="#impact" className="hover:text-navy transition-colors duration-300">Impact</a>
          <a href="#leadership" className="hover:text-navy transition-colors duration-300">Leadership</a>
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-navy text-ivory font-body text-xs tracking-[0.15em] uppercase hover:bg-navy-soft transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden px-5 py-2 bg-navy text-ivory font-body text-xs tracking-[0.15em] uppercase"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
