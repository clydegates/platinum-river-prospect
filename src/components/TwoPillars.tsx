import { motion } from "framer-motion";

const TwoPillars = () => {
  return (
    <section className="py-28 md:py-36 px-6 gradient-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Two Pillars of Impact
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {/* Advisory & Training */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-background p-10 md:p-14"
          >
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-6 block">
              01
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Advisory & Training
            </h3>
            <p className="text-base font-body font-light text-muted-foreground leading-relaxed">
              We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth. Our approach is grounded in business outcomes — not advocacy.
            </p>
          </motion.div>

          {/* Women Institute */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-background p-10 md:p-14"
          >
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-6 block">
              02
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Women Institute
            </h3>
            <p className="text-base font-body font-light text-muted-foreground leading-relaxed">
              A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy with rigor and independence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
