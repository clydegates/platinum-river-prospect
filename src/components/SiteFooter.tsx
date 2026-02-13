import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <Link to="/" className="font-display text-lg text-ivory/50 tracking-wide hover:text-ivory/70 transition-colors duration-500">
          Platinum River Elite
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/approach" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            Approach
          </Link>
          <Link to="/institute" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            Institute
          </Link>
          <Link to="/leadership" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            Leadership
          </Link>
          <Link to="/contact" className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-500">
            Contact
          </Link>
        </div>
        <p className="font-body text-[10px] text-ivory/20 tracking-widest">
          © {currentYear} Platinum River Elite
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
