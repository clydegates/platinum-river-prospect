import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-gold mx-auto mb-12" />
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
            Start the Conversation
          </h2>
          <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-12">
            We welcome inquiries from organizations committed to strategic workforce performance.
          </p>
          <a
            href="mailto:contact@platinumriverelite.com"
            className="inline-block px-10 py-4 border border-gold text-gold font-body text-sm tracking-widest uppercase hover:bg-gold hover:text-gold-foreground transition-all duration-500"
          >
            Contact Platinum River Elite
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
