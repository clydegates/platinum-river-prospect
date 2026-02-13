import { motion } from "framer-motion";

const StrategicContext = () => {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-foreground">
            The Strategic Imperative
          </h2>
          <div className="w-12 h-px bg-gold mb-10" />
          <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-8">
            The global workforce is undergoing a structural demographic shift. By 2030, women over 50 will represent one of the largest and most experienced talent segments in developed economies — yet most organizations remain unprepared to retain, develop, and leverage this critical asset.
          </p>
          <p className="text-lg font-body font-light text-muted-foreground leading-relaxed">
            The cost of inaction is measurable: accelerated turnover, institutional knowledge loss, leadership gaps, and weakened governance. For forward-looking organizations, this represents both an urgent risk and a decisive competitive opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicContext;
