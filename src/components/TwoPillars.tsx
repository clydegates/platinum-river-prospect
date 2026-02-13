import { motion } from "framer-motion";
import pillarAdvisory from "@/assets/pillar-advisory.jpg";
import pillarInstitute from "@/assets/pillar-institute.jpg";

const pillars = [
  {
    number: "01",
    title: "Advisory & Training",
    description:
      "We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth. Our approach is grounded in business outcomes — not advocacy.",
    image: pillarAdvisory,
  },
  {
    number: "02",
    title: "Women Institute",
    description:
      "A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy with rigor and independence.",
    image: pillarInstitute,
  },
];

const TwoPillars = () => {
  return (
    <section id="services" className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
      {/* Decorative corner lines */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 left-16 w-24 h-[1px] bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 left-16 w-[1px] h-24 bg-ivory hidden lg:block"
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
            <div className="w-16 h-[1px] bg-ivory/20" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/35">
              Our Approach
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-ivory leading-[1.1] max-w-lg tracking-[-0.01em]">
            Two Pillars of{" "}
            <em className="italic font-light">Impact</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative border border-ivory/[0.06] overflow-hidden"
            >
              {/* Background image with hover zoom */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/50 to-navy" />
                <span className="absolute top-6 left-8 font-display text-7xl lg:text-8xl text-ivory/[0.1]">
                  {pillar.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-10 md:p-16 lg:p-20">
                <h3 className="text-3xl md:text-4xl font-display text-ivory mb-8 leading-[1.15]">
                  {pillar.title}
                </h3>
                <p className="font-body text-base font-extralight text-ivory/45 leading-[1.9] tracking-wide">
                  {pillar.description}
                </p>
                <div className="mt-10">
                  <span className="inline-flex items-center gap-3 font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 group-hover:text-ivory/50 transition-colors duration-500">
                    Learn More
                    <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-8" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
