import { motion } from "framer-motion";

const SiteHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="font-display text-xl text-navy tracking-wide">
          Platinum River Elite
        </div>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#about" className="hover:text-navy transition-colors">About</a>
          <a href="#services" className="hover:text-navy transition-colors">Services</a>
          <a href="#impact" className="hover:text-navy transition-colors">Impact</a>
          <a
            href="#contact"
            className="px-5 py-2 bg-navy text-primary-foreground rounded-sm text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden px-4 py-2 bg-navy text-primary-foreground rounded-sm text-xs font-body font-medium"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
