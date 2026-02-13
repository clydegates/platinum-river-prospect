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
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      ref={ref}
      key={pillar.number}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1.2,
        delay: index * 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden"
    >
      {/* Outer glow border on hover */}
      <div className="absolute inset-0 border border-ivory/[0.04] group-hover:border-ivory/[0.12] transition-all duration-1000 z-10 pointer-events-none" />

      {/* Image with parallax */}
      <div className="relative h-[340px] md:h-[440px] lg:h-[480px] overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 via-navy/30 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent" />

        {/* Floating number — massive, ethereal */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
          className="absolute -top-4 -left-2 font-display text-[10rem] md:text-[12rem] lg:text-[14rem] text-ivory/[0.04] select-none leading-none pointer-events-none"
        >
          {pillar.number}
        </motion.span>

        {/* Subtitle badge — refined */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
          className="absolute bottom-8 left-10"
        >
          <span className="inline-block font-body text-[8px] tracking-[0.45em] uppercase text-ivory/50 border border-ivory/10 px-5 py-2.5 backdrop-blur-md bg-navy/30">
            {pillar.subtitle}
          </span>
        </motion.div>

        {/* Decorative vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 + index * 0.2 }}
          className="absolute top-8 right-10 w-[1px] h-16 bg-ivory/10 origin-top hidden md:block"
        />
      </div>

      {/* Content area */}
      <div className="relative p-10 md:p-14 lg:p-20 bg-navy">
        {/* Subtle top border accent */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-ivory/[0.08] to-transparent" />

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-display text-ivory mb-6 leading-[1.1] tracking-[-0.01em]"
        >
          {pillar.title}
        </motion.h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
          className="h-[1px] bg-ivory/20 mb-8"
        />

        <p className="font-body text-[13px] font-extralight text-ivory/40 leading-[2.1] tracking-wide mb-10 max-w-md">
          {pillar.description}
        </p>

        {/* Highlight tags — more refined spacing */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {pillar.highlights.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 + index * 0.2 }}
              className="font-body text-[9px] tracking-[0.25em] uppercase text-ivory/25 border border-ivory/[0.06] px-4 py-2 group-hover:text-ivory/40 group-hover:border-ivory/[0.12] transition-all duration-700"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA — elegant hover */}
        <div className="relative inline-flex items-center gap-4 cursor-pointer group/cta">
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory/25 group-hover/cta:text-ivory/60 transition-colors duration-700">
            Explore
          </span>
          <div className="relative w-10 h-[1px] bg-ivory/15 group-hover/cta:w-14 group-hover/cta:bg-ivory/40 transition-all duration-700">
            <ArrowRight className="absolute -right-1 -top-[5px] w-3 h-3 text-ivory/25 group-hover/cta:text-ivory/60 transition-all duration-700" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TwoPillars = () => {
  return (
    <section id="services" className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
      {/* Decorative corner accents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 left-16 w-28 h-[1px] bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 left-16 w-[1px] h-28 bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-16 right-16 w-28 h-[1px] bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-16 right-16 w-[1px] h-28 bg-ivory hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
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

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-ivory/[0.04]">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
