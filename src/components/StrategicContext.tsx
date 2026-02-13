import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StrategicContext = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-50, 100]);

  return (
    <section
      id="about"
      className="py-28 md:py-40 px-8 md:px-16 bg-ivory overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <motion.div
            style={{ y: yLeft }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-4"
          >
            <div className="w-10 h-[1px] bg-navy/30 mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-warm-gray mb-4">
              The Imperative
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-navy leading-[1.15]">
              A Structural Shift Demands Strategic Action
            </h2>
          </motion.div>

          <motion.div
            style={{ y: yRight }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-7 md:col-start-6 flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl font-body font-extralight text-foreground/70 leading-[1.8] mb-8">
              By 2030, women over 50 will represent one of the largest and most experienced talent segments in developed economies — yet most organizations remain unprepared to retain, develop, and leverage this critical asset.
            </p>
            <p className="text-lg md:text-xl font-body font-extralight text-foreground/70 leading-[1.8]">
              The cost of inaction is measurable: accelerated turnover, institutional knowledge loss, leadership gaps, and weakened governance. For forward-looking organizations, this represents both an urgent risk and a decisive competitive opportunity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicContext;
