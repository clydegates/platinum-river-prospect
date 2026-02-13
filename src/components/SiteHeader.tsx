import { motion } from "framer-motion";

const SiteHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between"
    >
      <div className="font-serif text-lg tracking-wide text-foreground">
        Platinum River <span className="text-gold">Elite</span>
      </div>
      <a
        href="#contact"
        className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        Contact
      </a>
    </motion.header>
  );
};

export default SiteHeader;
