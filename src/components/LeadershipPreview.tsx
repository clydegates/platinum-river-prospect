import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import catherineImage from "@/assets/catherine-laurent.jpg";

const LeadershipPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section id="leadership" ref={sectionRef} className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory-dark overflow-hidden">
      {/* Decorative corner accents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-24 left-16 w-32 h-[1px] bg-navy hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-24 left-16 w-[1px] h-32 bg-navy hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 right-16 w-32 h-[1px] bg-navy hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 right-16 w-[1px] h-32 bg-navy hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 md:gap-20 items-center">
          {/* Left: Text + CEO portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            {/* Header */}
            <div className="flex items-center gap-6 mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-[1px] bg-navy/15"
              />
              <p className="font-body text-[9px] tracking-[0.45em] uppercase text-warm-gray">
                Our Team
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-display text-navy leading-[1.08] mb-8 tracking-[-0.01em]">
              Leadership
            </h2>

            <p className="font-body text-[13.5px] font-extralight text-foreground/45 leading-[2.1] mb-16 tracking-wide">
              Platinum River Elite is led by senior advisors with decades of experience across executive leadership, organizational strategy, and global workforce transformation.
            </p>

            {/* CEO card — elevated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-6 mb-16 p-6 md:p-8 border border-navy/[0.08] hover:border-navy/15 transition-all duration-1000 backdrop-blur-sm bg-white/20"
            >
              {/* Portrait with parallax */}
              <motion.div
                style={{ y: portraitY }}
                className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={catherineImage}
                  alt="Catherine Laurent-Meister"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-ivory/[0.12]" />
              </motion.div>

              <div>
                <p className="font-display text-xl md:text-2xl text-navy leading-tight">
                  Catherine Laurent-Meister
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-[1px] bg-navy/20 my-2"
                />
                <p className="font-body text-[9px] tracking-[0.4em] uppercase text-warm-gray">
                  Chief Executive Officer
                </p>
              </div>
            </motion.div>

            {/* CTA — refined */}
            <Link
              to="/leadership"
              className="group inline-flex items-center gap-4 cursor-pointer"
            >
              <span className="font-body text-[10px] tracking-[0.35em] uppercase text-navy group-hover:text-navy/70 transition-colors duration-700">
                Meet the Team
              </span>
              <div className="relative w-10 h-[1px] bg-navy/20 group-hover:w-14 group-hover:bg-navy/40 transition-all duration-700">
                <ArrowRight className="absolute -right-1 -top-[5px] w-3 h-3 text-navy/30 group-hover:text-navy/60 transition-all duration-700" />
              </div>
            </Link>
          </motion.div>

          {/* Right: Quote card — luxury elevation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="relative">
              {/* Main quote card with layers */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.8 }}
                className="relative bg-navy p-12 md:p-16 lg:p-20 border border-ivory/[0.08] overflow-hidden group"
              >
                {/* Background gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy/0 via-transparent to-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Decorative corner elements */}
                <div className="absolute top-6 left-8 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-700 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-ivory/20" />
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-ivory/20" />
                </div>
                <div className="absolute bottom-6 right-8 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-700 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-full h-[1px] bg-ivory/20" />
                  <div className="absolute bottom-0 right-0 w-[1px] h-full bg-ivory/20" />
                </div>

                {/* Quotation mark — subtle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.08 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="absolute top-6 right-12 font-display text-[140px] text-ivory leading-none select-none"
                >
                  "
                </motion.div>

                {/* Quote text */}
                <blockquote className="relative z-10 font-display text-2xl md:text-3xl lg:text-[2.15rem] text-ivory leading-[1.6] italic mb-12 tracking-[-0.01em]">
                  "The most overlooked competitive advantage in any organization is the strategic expertise of its most experienced women."
                </blockquote>

                {/* Separator line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-[1px] bg-ivory/15 mb-8"
                />

                {/* Attribution */}
                <div className="relative z-10 flex items-center gap-5">
                  <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden">
                    <img
                      src={catherineImage}
                      alt="Catherine Laurent-Meister"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-ivory/[0.15]" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/70">
                      Catherine Laurent-Meister
                    </p>
                    <p className="font-body text-[9px] tracking-[0.4em] uppercase text-ivory/30 mt-1">
                      CEO & Founder
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative offset borders */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-full h-full border border-navy/[0.08] -z-10"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="absolute -bottom-8 -right-8 w-full h-full border border-navy/[0.04] -z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
