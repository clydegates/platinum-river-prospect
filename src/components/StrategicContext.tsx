import { motion } from "framer-motion";

const StrategicContext = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            The Context
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-navy leading-tight">
            A Structural Shift Demands Strategic Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-base md:text-lg font-body font-light text-muted-foreground leading-relaxed">
            By 2030, women over 50 will represent one of the largest and most experienced talent segments in developed economies — yet most organizations remain unprepared to retain, develop, and leverage this critical asset.
          </p>
          <p className="text-base md:text-lg font-body font-light text-muted-foreground leading-relaxed">
            The cost of inaction is measurable: accelerated turnover, institutional knowledge loss, leadership gaps, and weakened governance. For forward-looking organizations, this represents both an urgent risk and a decisive competitive opportunity.
          </p>
          <div className="h-px w-16 bg-navy/20 mt-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicContext;
