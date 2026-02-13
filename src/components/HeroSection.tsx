import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-24 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-6">
              Strategic Advisory · Executive Training
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground leading-[1.15] mb-8">
              Strategic Leadership for the Next Era of Workforce Performance
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-body font-light text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            Platinum River Elite advises global organizations on unlocking the strategic value of women 50+ in today's evolving workforce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-foreground text-navy font-body text-sm font-medium rounded-sm hover:bg-primary-foreground/90 transition-colors"
            >
              Request a Strategic Discussion
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body text-sm font-medium rounded-sm hover:border-primary-foreground/60 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
