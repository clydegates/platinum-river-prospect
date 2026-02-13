import { motion } from "framer-motion";

const impacts = [
  {
    number: "01",
    title: "Retention of Senior Talent",
    description:
      "Preserving institutional knowledge and leadership continuity through strategic engagement of experienced professionals.",
  },
  {
    number: "02",
    title: "Reduction of Turnover Costs",
    description:
      "Minimizing the significant financial burden of replacing seasoned leaders with targeted retention frameworks.",
  },
  {
    number: "03",
    title: "ESG & Governance Alignment",
    description:
      "Strengthening environmental, social, and governance positioning through measurable workforce inclusivity initiatives.",
  },
  {
    number: "04",
    title: "Leadership Stability",
    description:
      "Building resilient leadership pipelines that leverage decades of accumulated strategic expertise.",
  },
];

const BusinessImpact = () => {
  return (
    <section id="impact" className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory overflow-hidden">
      {/* Decorative */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-navy/[0.06] origin-left"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-[1px] bg-navy/20" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gray">
              Why It Matters
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-navy leading-[1.1] max-w-lg tracking-[-0.01em]">
            Measurable Business{" "}
            <em className="italic font-light">Impact</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-0">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group py-10 md:py-12 border-t border-navy/[0.08] hover:border-navy/20 transition-colors duration-700"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-5xl lg:text-6xl text-navy/[0.06] group-hover:text-navy/[0.12] transition-colors duration-700 leading-none flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display text-navy mb-4 leading-[1.2]">
                    {item.title}
                  </h3>
                  <p className="font-body text-base font-extralight text-foreground/55 leading-[1.9] tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
