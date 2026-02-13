import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-6">
            Start the Conversation
          </h2>
          <p className="text-lg font-body font-light text-primary-foreground/60 leading-relaxed mb-10">
            We welcome inquiries from organizations committed to strategic workforce performance.
          </p>
          <a
            href="mailto:contact@platinumriverelite.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-navy font-body text-sm font-medium rounded-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Contact Platinum River Elite
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
