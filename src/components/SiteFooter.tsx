import { motion } from "framer-motion";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-14 md:py-16 px-8 md:px-16 lg:px-20 bg-navy">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-8 right-8 md:left-16 md:right-16 h-[1px] bg-ivory/[0.06] origin-left"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg text-ivory/50 tracking-wide">
          Platinum River Elite
        </div>
        <div className="flex items-center gap-8">
          <a href="#about" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            About
          </a>
          <a href="#services" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            Services
          </a>
          <a href="#contact" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            Contact
          </a>
        </div>
        <p className="font-body text-[10px] text-ivory/20 tracking-widest">
          © {currentYear} Platinum River Elite
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
