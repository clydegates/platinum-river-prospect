import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(210 20% 92%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Thin gold rule */}
          <div className="w-16 h-px bg-gold mx-auto mb-12" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-foreground mb-8">
            Strategic Leadership for the{" "}
            <em className="text-gold not-italic">Next Era</em> of Workforce Performance
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl font-body font-light text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Platinum River Elite advises global organizations on unlocking the strategic value of women 50+ in today's evolving workforce.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-gold text-gold font-body text-sm tracking-widest uppercase hover:bg-gold hover:text-gold-foreground transition-all duration-500"
          >
            Request a Strategic Discussion
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
