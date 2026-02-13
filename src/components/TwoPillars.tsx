import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
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

const PillarCard = ({ pillar, index }: { pillar: typeof pillars[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-ivory/[0.08] hover:border-ivory/[0.18] transition-all duration-700 bg-ivory/[0.03]"
    >
      {/* Glassmorphism glow effect on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-ivory/[0.06] via-transparent to-ivory/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image area */}
      <div className="relative h-[240px] md:h-[300px] overflow-hidden rounded-t-2xl">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* Bottom gradient for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/80" />

        {/* Number badge — glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          className="absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl bg-navy/40 border border-ivory/[0.1]"
        >
          <span className="font-display text-sm text-ivory/70">{pillar.number}</span>
        </motion.div>

        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
          className="absolute bottom-5 left-5"
        >
          <span className="inline-block font-body text-[9px] tracking-[0.35em] uppercase text-ivory/60 backdrop-blur-xl bg-ivory/[0.06] border border-ivory/[0.1] px-4 py-2 rounded-full">
            {pillar.subtitle}
          </span>
        </motion.div>
      </div>

      {/* Content area */}
      <div className="relative p-8 md:p-10">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
          className="text-2xl md:text-3xl font-display text-ivory mb-4 leading-[1.15] tracking-[-0.01em]"
        >
          {pillar.title}
        </motion.h3>

        <p className="font-body text-[13px] font-extralight text-ivory/40 leading-[2] tracking-wide mb-8 max-w-sm">
          {pillar.description}
        </p>

        {/* Highlight tags — pill style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {pillar.highlights.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 + index * 0.2 }}
              className="font-body text-[9px] tracking-[0.2em] uppercase text-ivory/30 bg-ivory/[0.04] border border-ivory/[0.06] px-4 py-1.5 rounded-full group-hover:text-ivory/50 group-hover:bg-ivory/[0.07] group-hover:border-ivory/[0.12] transition-all duration-500"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <div className="relative inline-flex items-center gap-3 cursor-pointer group/cta">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 group-hover/cta:text-ivory/60 transition-colors duration-500">
            Explore
          </span>
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-ivory/[0.1] group-hover/cta:border-ivory/[0.25] group-hover/cta:bg-ivory/[0.05] transition-all duration-500">
            <ArrowRight className="w-3.5 h-3.5 text-ivory/30 group-hover/cta:text-ivory/60 transition-all duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TwoPillars = () => {
  return (
    <section id="services" className="relative py-20 md:py-32 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-ivory/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ivory/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-6 mb-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[1px] bg-ivory/20"
            />
            <p className="font-body text-[10px] tracking-[0.45em] uppercase text-ivory/30">
              Our Approach
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-display text-ivory leading-[1.08] max-w-xl tracking-[-0.01em]">
            Two Pillars of{" "}
            <em className="italic font-light text-ivory/70">Impact</em>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
