import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
          const duration = 2000;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
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
      <span className="text-ivory/30">{suffix}</span>
    </span>
  );
};

const BusinessImpact = () => {
  return (
    <section id="impact" className="relative bg-ivory overflow-hidden">
      {/* Top separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-navy/[0.06] origin-left"
      />

      {/* Split layout: Image + Stats */}
      <div className="grid lg:grid-cols-2">
        {/* Left: Editorial image */}
        <div className="relative h-[50vh] lg:h-auto lg:min-h-[700px] overflow-hidden">
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={businessImage}
              alt="Corporate architecture at twilight"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ivory lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ivory lg:hidden" />

          {/* Floating headline on image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-12 left-8 md:left-16 lg:bottom-20 lg:left-20 z-10"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-[1px] bg-ivory/30" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/60">
                Why It Matters
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-ivory leading-[1.1] tracking-[-0.01em]">
              Measurable{" "}
              <em className="italic font-light">Impact</em>
            </h2>
          </motion.div>
        </div>

        {/* Right: Stats grid */}
        <div className="relative py-20 md:py-32 px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 gap-0">
            {impacts.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group p-6 md:p-10 lg:p-12 border border-navy/[0.06] hover:bg-ivory-dark transition-colors duration-700"
              >
                <p className="font-display text-5xl md:text-6xl lg:text-7xl text-navy leading-none mb-4">
                  <AnimatedNumber value={item.stat} suffix={item.suffix} />
                </p>
                <p className="font-body text-[10px] tracking-[0.35em] uppercase text-warm-gray mb-4">
                  {item.label}
                </p>
                <p className="font-body text-sm font-extralight text-foreground/50 leading-[1.8] tracking-wide">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
