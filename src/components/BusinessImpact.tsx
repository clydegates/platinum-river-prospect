import { motion } from "framer-motion";
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
      <span className="text-ivory/25">{suffix}</span>
    </span>
  );
};

const BusinessImpact = () => {
  return (
    <section id="impact" className="relative overflow-hidden">
      {/* Full-bleed image background for the entire section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={businessImage}
              alt="Corporate architecture at twilight"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-32 md:py-48 px-8 md:px-16 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-24 md:mb-32"
            >
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="w-10 h-[1px] bg-ivory/15" />
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/35">
                  Why It Matters
                </p>
                <div className="w-10 h-[1px] bg-ivory/15" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-display text-ivory leading-[1.05] tracking-[-0.02em]">
                Measurable{" "}
                <em className="italic font-light">Impact</em>
              </h2>
            </motion.div>

            {/* Stats grid with glass morphism */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-ivory/[0.06]">
              {impacts.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="group relative backdrop-blur-sm bg-navy/60 p-8 md:p-12 lg:p-14 hover:bg-navy/40 transition-colors duration-700"
                >
                  <p className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-none mb-6">
                    <AnimatedNumber value={item.stat} suffix={item.suffix} />
                  </p>
                  <div className="w-10 h-[1px] bg-ivory/10 mb-5 group-hover:w-16 transition-all duration-700" />
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory/40 mb-4">
                    {item.label}
                  </p>
                  <p className="font-body text-sm font-extralight text-ivory/30 leading-[1.8] tracking-wide">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
