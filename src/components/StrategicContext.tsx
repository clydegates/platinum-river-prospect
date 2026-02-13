import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import boardroomImage from "@/assets/strategic-boardroom.jpg";

const StrategicContext = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="about" ref={sectionRef} className="relative bg-ivory overflow-hidden">
      {/* Full-width cinematic image band */}
      <div className="relative h-[280px] md:h-[400px] lg:h-[480px] overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 -top-[20%] -bottom-[20%]"
        >
          <img
            src={boardroomImage}
            alt="Strategic boardroom"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/10" />

        {/* Floating pull quote over image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute bottom-12 md:bottom-16 left-8 md:left-16 lg:left-20 right-8 md:right-auto max-w-xl"
        >
          <p className="font-display text-xl md:text-2xl lg:text-3xl italic font-light text-ivory leading-[1.4] tracking-wide drop-shadow-lg">
            "The most undervalued asset in global business isn't capital — it's experienced women."
          </p>
        </motion.div>
      </div>

      {/* Text content */}
      <div className="relative py-24 md:py-36 lg:py-44 px-8 md:px-16 lg:px-20">
        {/* Decorative vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-20 right-16 w-[1px] h-64 bg-navy/[0.04] origin-top hidden lg:block"
        />
        {/* Decorative corner accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute bottom-20 left-16 w-20 h-[1px] bg-navy hidden lg:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute bottom-20 left-16 w-[1px] h-20 bg-navy hidden lg:block"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            {/* Left column — overline + headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-4"
            >
              <div className="flex items-center gap-6 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-[1px] bg-navy/20"
                />
                <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gray">
                  The Imperative
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-navy leading-[1.08] tracking-[-0.01em]">
                A Structural Shift Demands{" "}
                <em className="italic font-light text-navy/70">Strategic Action</em>
              </h2>

              {/* Animated accent bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-navy/15 mt-10"
              />
            </motion.div>

            {/* Right column — body text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-7 md:col-start-6 flex flex-col justify-center"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="w-[1px] h-full min-h-[120px] bg-navy/10 mt-2 flex-shrink-0 hidden sm:block origin-top"
                />
                <div>
                  <p className="text-lg md:text-xl font-body font-extralight text-foreground/60 leading-[1.9] mb-10 tracking-wide">
                    By 2030, women over 50 will represent one of the largest and most experienced talent segments in developed economies — yet most organizations remain unprepared to retain, develop, and leverage this critical asset.
                  </p>
                  <p className="text-lg md:text-xl font-body font-extralight text-foreground/60 leading-[1.9] tracking-wide">
                    The cost of inaction is measurable: accelerated turnover, institutional knowledge loss, leadership gaps, and weakened governance. For forward-looking organizations, this represents both an urgent risk and a decisive competitive opportunity.
                  </p>

                  {/* Key stat callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-14 pt-10 border-t border-navy/[0.06]"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl md:text-6xl text-navy/[0.12] leading-none">
                        2030
                      </span>
                      <p className="font-body text-[11px] tracking-[0.3em] uppercase text-warm-gray max-w-xs">
                        The inflection point for workforce demographics
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicContext;
