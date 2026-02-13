import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import pillarAdvisory from "@/assets/pillar-advisory.jpg";
import pillarInstitute from "@/assets/pillar-institute.jpg";

const pillars = [
  {
    number: "01",
    title: "Advisory & Training",
    subtitle: "Strategic Counsel",
    description:
      "We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth.",
    image: pillarAdvisory,
    link: "/approach",
  },
  {
    number: "02",
    title: "Women Institute",
    subtitle: "Thought Leadership",
    description:
      "A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy.",
    image: pillarInstitute,
    link: "/institute",
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
      className="group relative overflow-hidden border border-ivory/[0.08]"
    >
      {/* Image area */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy" />

        {/* Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
          className="absolute top-6 left-6"
        >
          <span className="font-display text-sm text-ivory/50">{pillar.number}</span>
        </motion.div>

      </div>

      {/* Content area */}
      <div className="relative bg-navy border-t border-ivory/[0.06] p-8 md:p-10">
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

        {/* CTA */}
        <Link to={pillar.link} className="relative inline-flex items-center gap-3 cursor-pointer group/cta">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 group-hover/cta:text-ivory/60 transition-colors duration-500">
            Explore
          </span>
          <div className="relative w-8 h-[1px] bg-ivory/15 group-hover/cta:w-12 group-hover/cta:bg-ivory/30 transition-all duration-500">
            <ArrowRight className="absolute -right-1 -top-[5px] w-3 h-3 text-ivory/30 group-hover/cta:text-ivory/60 transition-all duration-500" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const TwoPillars = () => {
  return (
    <section id="services" className="relative py-20 md:py-32 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
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

        {/* Grid */}
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
