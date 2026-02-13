import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-32 md:py-44 px-8 md:px-16 bg-navy overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(215 40% 28%) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="w-10 h-[1px] bg-ivory/30 mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory/40 mb-6">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-display text-ivory leading-[1.1] mb-8">
            Start the Conversation
          </h2>
          <p className="text-lg font-body font-extralight text-ivory/50 leading-relaxed mb-12 max-w-xl mx-auto">
            We welcome inquiries from organizations committed to strategic workforce performance.
          </p>
          <a
            href="mailto:contact@platinumriverelite.com"
            className="inline-block px-12 py-5 bg-ivory text-navy font-body text-xs tracking-[0.2em] uppercase font-medium hover:bg-ivory-dark transition-colors duration-500"
          >
            Contact Platinum River Elite
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
