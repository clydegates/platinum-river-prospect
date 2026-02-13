import { motion } from "framer-motion";

const StrategicContext = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-16 w-[1px] h-64 bg-navy hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-32 right-16 w-40 h-[1px] bg-navy hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-navy/20" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gray">
                The Imperative
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-navy leading-[1.1] tracking-[-0.01em]">
              A Structural Shift Demands{" "}
              <em className="italic font-light">Strategic Action</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-7 md:col-start-6 flex flex-col justify-center"
          >
            <div className="flex items-start gap-6">
              <div className="w-[1px] h-full min-h-[120px] bg-navy/10 mt-2 flex-shrink-0 hidden sm:block" />
              <div>
                <p className="text-lg md:text-xl font-body font-extralight text-foreground/65 leading-[1.9] mb-10 tracking-wide">
                  By 2030, women over 50 will represent one of the largest and most experienced talent segments in developed economies — yet most organizations remain unprepared to retain, develop, and leverage this critical asset.
                </p>
                <p className="text-lg md:text-xl font-body font-extralight text-foreground/65 leading-[1.9] tracking-wide">
                  The cost of inaction is measurable: accelerated turnover, institutional knowledge loss, leadership gaps, and weakened governance. For forward-looking organizations, this represents both an urgent risk and a decisive competitive opportunity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicContext;
