import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import businessImage from "@/assets/business-impact.jpg";

const impacts = [
  {
    stat: "67",
    suffix: "%",
    label: "Talent Retention",
    description: "Improvement in senior talent retention through strategic engagement frameworks.",
  },
  {
    stat: "3.2",
    suffix: "x",
    label: "ROI on Training",
    description: "Average return on investment from our executive development programs.",
  },
  {
    stat: "200",
    suffix: "+",
    label: "Organizations",
    description: "Global enterprises leveraging our advisory and certification methodology.",
  },
  {
    stat: "40",
    suffix: "%",
    label: "Cost Reduction",
    description: "Decrease in leadership turnover costs within 18 months of engagement.",
  },
];

const AnimatedNumber = ({ value, suffix }: { value: string; suffix: string }) => {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numValue = parseFloat(value);
          const isDecimal = value.includes(".");
          const duration = 2500;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = numValue * eased;
            setDisplayed(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {displayed}
      <span className="text-navy/20 font-light">{suffix}</span>
    </span>
  );
};

const StatCard = ({ item, index }: { item: typeof impacts[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-8 md:p-10 lg:p-14 overflow-hidden"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-navy/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Cell borders — only inner edges */}
      <div className="absolute inset-0 border border-navy/[0.05]" />

      {/* Decorative corner on hover */}
      <div className="absolute top-4 right-4 w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-700 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-navy/10" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-navy/10" />
      </div>

      {/* Translucent background number */}
      <span className="absolute -top-3 -right-1 font-display text-[7rem] md:text-[8rem] text-navy/[0.025] leading-none select-none pointer-events-none">
        {item.stat}
      </span>

      <div className="relative z-10">
        <p className="font-display text-5xl md:text-6xl lg:text-[4.5rem] text-navy leading-none mb-5 tracking-[-0.02em]">
          <AnimatedNumber value={item.stat} suffix={item.suffix} />
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
          className="h-[1px] bg-navy/15 mb-5"
        />

        <p className="font-body text-[9px] tracking-[0.4em] uppercase text-warm-gray mb-4">
          {item.label}
        </p>
        <p className="font-body text-[13px] font-extralight text-foreground/40 leading-[2] tracking-wide">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const BusinessImpact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="impact" ref={sectionRef} className="relative bg-ivory overflow-hidden">
      {/* Top separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-navy/[0.06] origin-left z-10"
      />

      <div className="grid lg:grid-cols-2">
        {/* Left: Editorial image with parallax */}
        <div className="relative h-[55vh] lg:h-auto lg:min-h-[780px] overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 -top-[20%] -bottom-[20%]"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src={businessImage}
                alt="Corporate architecture at twilight"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-navy/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ivory lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory lg:hidden" />

          {/* Decorative vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-12 left-12 w-[1px] h-20 bg-ivory/15 origin-top hidden lg:block"
          />

          {/* Headline overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-14 left-8 md:left-16 lg:bottom-24 lg:left-20 z-10"
          >
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-[1px] bg-ivory/25"
              />
              <p className="font-body text-[9px] tracking-[0.45em] uppercase text-ivory/50">
                Why It Matters
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-display text-ivory leading-[1.08] tracking-[-0.01em]">
              Measurable{" "}
              <em className="italic font-light text-ivory/70">Impact</em>
            </h2>
            <p className="font-body text-[13px] font-extralight text-ivory/35 leading-[1.9] tracking-wide mt-6 max-w-xs hidden lg:block">
              Data-driven outcomes that demonstrate the strategic value of inclusive leadership.
            </p>
          </motion.div>
        </div>

        {/* Right: Stats grid */}
        <div className="relative py-16 md:py-24 lg:py-0 lg:flex lg:items-center">
          {/* Decorative corner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-12 right-12 w-20 h-[1px] bg-navy hidden lg:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-12 right-12 w-[1px] h-20 bg-navy hidden lg:block"
          />

          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2">
              {impacts.map((item, index) => (
                <StatCard key={item.label} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
