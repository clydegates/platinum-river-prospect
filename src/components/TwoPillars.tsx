import { motion } from "framer-motion";
import { Briefcase, Globe } from "lucide-react";

const TwoPillars = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-ice">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-navy">
            Two Pillars of Impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="bg-background rounded-sm p-8 md:p-10 border border-border"
          >
            <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center mb-6">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display text-navy mb-4">
              Advisory & Training
            </h3>
            <p className="font-body text-base font-light text-muted-foreground leading-relaxed">
              We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth. Our approach is grounded in business outcomes — not advocacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-background rounded-sm p-8 md:p-10 border border-border"
          >
            <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center mb-6">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display text-navy mb-4">
              Women Institute
            </h3>
            <p className="font-body text-base font-light text-muted-foreground leading-relaxed">
              A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy with rigor and independence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
