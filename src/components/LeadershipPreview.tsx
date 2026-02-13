import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";

const LeadershipPreview = () => {
  return (
    <section id="leadership" className="relative bg-ivory overflow-hidden">
      {/* Top separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-navy/[0.06] origin-left"
      />

      <div className="grid lg:grid-cols-2">
        {/* Left: Large editorial portrait */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative h-[70vh] lg:h-auto lg:min-h-[800px] overflow-hidden"
        >
          <motion.img
            src={heroPortrait}
            alt="Catherine Laurent-Meister, CEO"
            className="w-full h-full object-cover object-top"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ivory/30 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent lg:hidden" />

          {/* Name overlay on image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 left-8 md:left-16 lg:bottom-16 lg:left-16"
          >
            <p className="font-display text-2xl md:text-3xl text-ivory lg:text-navy leading-tight">
              Catherine Laurent-Meister
            </p>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory/60 lg:text-warm-gray mt-2">
              Chief Executive Officer & Founder
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Quote + CTA */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-[1px] bg-navy/15" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gray">
                Our Team
              </p>
            </div>

            {/* Large quote mark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="font-display text-[10rem] text-navy leading-none -mb-28 -ml-4 select-none pointer-events-none"
            >
              "
            </motion.div>

            <blockquote className="relative z-10 font-display text-2xl md:text-3xl lg:text-[2.2rem] text-navy leading-[1.4] italic mb-12 tracking-[-0.01em]">
              The most overlooked competitive advantage in any organization is the strategic expertise of its most experienced women.
            </blockquote>

            <div className="w-16 h-[1px] bg-navy/10 mb-12" />

            <p className="font-body text-base font-extralight text-foreground/50 leading-[1.9] mb-14 tracking-wide">
              Platinum River Elite is led by senior advisors with decades of experience across executive leadership, organizational strategy, and global workforce transformation.
            </p>

            <Link
              to="/leadership"
              className="group inline-flex items-center gap-4 px-10 py-4 border border-navy/20 text-navy font-body text-[10px] tracking-[0.3em] uppercase font-light hover:bg-navy hover:text-ivory transition-all duration-700"
            >
              Meet the Full Team
              <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-8" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
