import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pillarAdvisory from "@/assets/pillar-advisory.jpg";
import pillarInstitute from "@/assets/pillar-institute.jpg";

const pillars = [
  {
    number: "01",
    title: "Advisory & Training",
    subtitle: "Strategic Counsel",
    description:
      "We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth.",
    highlights: ["Retention Strategy", "Leadership Development", "Performance Models"],
    image: pillarAdvisory,
  },
  {
    number: "02",
    title: "Women Institute",
    subtitle: "Thought Leadership",
    description:
      "A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy.",
    highlights: ["Global Research", "Policy Dialogue", "Strategic Convening"],
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
                delay: index * 0.25,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative border border-ivory/[0.06] overflow-hidden"
            >
              {/* Background image with hover zoom */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/40 to-navy" />

                {/* Large number watermark */}
                <span className="absolute top-6 left-8 font-display text-8xl lg:text-9xl text-ivory/[0.07] select-none">
                  {pillar.number}
                </span>

                {/* Subtitle badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="absolute bottom-6 left-8"
                >
                  <span className="inline-block font-body text-[9px] tracking-[0.35em] uppercase text-ivory/60 border border-ivory/15 px-4 py-2 backdrop-blur-sm bg-navy/20">
                    {pillar.subtitle}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-10 md:p-14 lg:p-16">
                <h3 className="text-3xl md:text-4xl font-display text-ivory mb-6 leading-[1.15]">
                  {pillar.title}
                </h3>

                <div className="w-12 h-[1px] bg-ivory/15 mb-8" />

                <p className="font-body text-sm font-extralight text-ivory/45 leading-[2] tracking-wide mb-10">
                  {pillar.description}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {pillar.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-[0.2em] uppercase text-ivory/30 border border-ivory/[0.08] px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-3 font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 group-hover:text-ivory/60 transition-colors duration-500 cursor-pointer">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
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
