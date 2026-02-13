import { motion } from "framer-motion";
import { Users, TrendingDown, Shield, Landmark } from "lucide-react";

const impacts = [
  {
    icon: Users,
    title: "Retention of Senior Talent",
    description: "Preserving institutional knowledge and leadership continuity through strategic engagement.",
  },
  {
    icon: TrendingDown,
    title: "Reduction of Turnover Costs",
    description: "Minimizing the financial burden of replacing seasoned leaders with targeted frameworks.",
  },
  {
    icon: Shield,
    title: "ESG & Governance Alignment",
    description: "Strengthening governance positioning through measurable workforce inclusivity initiatives.",
  },
  {
    icon: Landmark,
    title: "Leadership Stability",
    description: "Building resilient pipelines that leverage decades of accumulated strategic expertise.",
  },
];

const BusinessImpact = () => {
  return (
    <section id="impact" className="py-24 md:py-32 px-6 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-navy">
            Measurable Business Impact
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-left"
            >
              <item.icon className="w-6 h-6 text-navy mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-display text-navy mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
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
