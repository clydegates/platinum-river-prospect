import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pillarAdvisory from "@/assets/pillar-advisory.jpg";
import pillarInstitute from "@/assets/pillar-institute.jpg";

const TwoPillars = () => {
  return (
    <section id="services" className="relative bg-navy overflow-hidden">
      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-ivory/[0.06] origin-left"
      />

      {/* Section header */}
      <div className="px-8 md:px-16 lg:px-20 pt-32 md:pt-48 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-[1px] bg-ivory/20" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/35">
                Our Approach
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-display text-ivory leading-[1.05] max-w-lg tracking-[-0.02em]">
              Two Pillars of{" "}
              <em className="italic font-light">Impact</em>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Pillar 1: Advisory — Full-width asymmetric layout */}
      <div className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[60vh] lg:h-[85vh] overflow-hidden"
          >
            <motion.img
              src={pillarAdvisory}
              alt="Executive advisory session"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/40 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent lg:hidden" />
            {/* Large floating number */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.06 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute top-8 left-8 font-display text-[12rem] lg:text-[16rem] text-ivory leading-none select-none pointer-events-none"
            >
              01
            </motion.span>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0"
          >
            <div className="max-w-lg">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/30 mb-8">
                Pillar One
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-ivory mb-10 leading-[1.1]">
                Advisory{" "}
                <em className="italic font-light">&amp; Training</em>
              </h3>
              <div className="w-16 h-[1px] bg-ivory/15 mb-10" />
              <p className="font-body text-base font-extralight text-ivory/45 leading-[2] tracking-wide mb-12">
                We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth. Our approach is grounded in business outcomes — not advocacy.
              </p>
              <Link
                to="/approach"
                className="group inline-flex items-center gap-4 px-10 py-4 border border-ivory/15 text-ivory font-body text-[10px] tracking-[0.3em] uppercase font-light hover:bg-ivory hover:text-navy transition-all duration-700"
              >
                Explore Our Approach
                <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-8" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Thin separator */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="h-[1px] bg-ivory/[0.06] origin-left"
        />
      </div>

      {/* Pillar 2: Institute — Reversed layout */}
      <div className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Content side (reversed) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0 order-2 lg:order-1"
          >
            <div className="max-w-lg lg:ml-auto">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/30 mb-8">
                Pillar Two
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-ivory mb-10 leading-[1.1]">
                Women{" "}
                <em className="italic font-light">Institute</em>
              </h3>
              <div className="w-16 h-[1px] bg-ivory/15 mb-10" />
              <p className="font-body text-base font-extralight text-ivory/45 leading-[2] tracking-wide mb-12">
                A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy with rigor and independence.
              </p>
              <Link
                to="/institute"
                className="group inline-flex items-center gap-4 px-10 py-4 border border-ivory/15 text-ivory font-body text-[10px] tracking-[0.3em] uppercase font-light hover:bg-ivory hover:text-navy transition-all duration-700"
              >
                Discover the Institute
                <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-8" />
              </Link>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[60vh] lg:h-[85vh] overflow-hidden order-1 lg:order-2"
          >
            <motion.img
              src={pillarInstitute}
              alt="International conference stage"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/40 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent lg:hidden" />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.06 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute top-8 right-8 font-display text-[12rem] lg:text-[16rem] text-ivory leading-none select-none pointer-events-none"
            >
              02
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="h-24 md:h-32" />
    </section>
  );
};

export default TwoPillars;
