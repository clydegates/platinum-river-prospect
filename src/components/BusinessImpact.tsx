import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const impacts = [
  {
    number: "01",
    title: "Retention of Senior Talent",
    description: "Preserving institutional knowledge and leadership continuity through strategic engagement of experienced professionals.",
  },
  {
    number: "02",
    title: "Reduction of Turnover Costs",
    description: "Minimizing the significant financial burden of replacing seasoned leaders with targeted retention frameworks.",
  },
  {
    number: "03",
    title: "ESG & Governance Alignment",
    description: "Strengthening environmental, social, and governance positioning through measurable workforce inclusivity initiatives.",
  },
  {
    number: "04",
    title: "Leadership Stability",
    description: "Building resilient leadership pipelines that leverage decades of accumulated strategic expertise.",
  },
];

const BusinessImpact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="impact"
      className="py-28 md:py-40 px-8 md:px-16 bg-ivory overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="w-10 h-[1px] bg-navy/30 mb-8" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-warm-gray mb-4">
            Why It Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-navy leading-[1.15] max-w-lg">
            Measurable Business Impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {impacts.map((item, index) => {
            const y = useTransform(scrollYProgress, [0, 1], [
              index % 2 === 0 ? 60 : -60,
              index % 2 === 0 ? -60 : 60,
            ]);

            return (
              <motion.div
                key={item.title}
                style={{ y }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="border-t border-navy/10 pt-8"
              >
                <span className="font-display text-sm text-warm-gray mb-4 block">
                  {item.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-display text-navy mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-base font-extralight text-foreground/60 leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
