import { motion } from "framer-motion";

const impacts = [
  {
    title: "Retention of Senior Talent",
    description: "Preserving institutional knowledge and leadership continuity through strategic engagement of experienced professionals.",
  },
  {
    title: "Reduction of Turnover Costs",
    description: "Minimizing the significant financial burden of replacing seasoned leaders with targeted retention frameworks.",
  },
  {
    title: "ESG & Governance Alignment",
    description: "Strengthening environmental, social, and governance positioning through measurable workforce inclusivity initiatives.",
  },
  {
    title: "Leadership Stability",
    description: "Building resilient leadership pipelines that leverage decades of accumulated strategic expertise and organizational memory.",
  },
];

const BusinessImpact = () => {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Measurable Business Impact
          </h2>
          <div className="w-12 h-px bg-gold" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4 block">
                0{index + 1}
              </span>
              <h3 className="text-xl font-serif text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base font-body font-light text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
