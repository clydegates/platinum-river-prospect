import { motion } from "framer-motion";

const LeadershipPreview = () => {
  return (
    <section className="py-28 md:py-36 px-6 gradient-section">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Leadership
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-10">
            Platinum River Elite is led by a team of senior advisors with decades of experience across executive leadership, organizational strategy, and global workforce transformation.
          </p>
          <a
            href="#"
            className="inline-block font-body text-sm tracking-widest uppercase text-gold border-b border-gold pb-1 hover:opacity-70 transition-opacity duration-300"
          >
            Meet the Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
