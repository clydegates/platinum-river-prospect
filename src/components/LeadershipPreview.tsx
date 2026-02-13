import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import catherineImage from "@/assets/catherine-laurent.jpg";

const LeadershipPreview = () => {
  return (
    <section id="leadership" className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory-dark overflow-hidden">
      {/* Decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
        className="absolute bottom-16 left-16 w-32 h-[1px] bg-navy hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left: Text + CEO portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-navy/20" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gray">
                Our Team
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-navy leading-[1.1] mb-8 tracking-[-0.01em]">
              Leadership
            </h2>
            <p className="font-body text-base font-extralight text-foreground/55 leading-[1.9] mb-12 tracking-wide">
              Platinum River Elite is led by senior advisors with decades of experience across executive leadership, organizational strategy, and global workforce transformation.
            </p>

            {/* CEO card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                <img
                  src={catherineImage}
                  alt="Catherine Laurent-Meister"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg text-navy leading-tight">Catherine Laurent-Meister</p>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray mt-1">
                  Chief Executive Officer
                </p>
              </div>
            </motion.div>

            <Link
              to="/leadership"
              className="group inline-flex items-center gap-4 font-body text-[11px] tracking-[0.25em] uppercase text-navy border-b border-navy/30 pb-2 hover:border-navy transition-colors duration-500"
            >
              Meet the Team
              <span className="inline-block w-4 h-[1px] bg-navy transition-all duration-500 group-hover:w-6" />
            </Link>
          </motion.div>

          {/* Right: Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="relative">
              {/* Quote card */}
              <div className="bg-navy p-12 md:p-16 lg:p-20 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.06 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="absolute top-8 right-10 font-display text-[120px] text-ivory leading-none"
                >
                  "
                </motion.div>
                <blockquote className="relative z-10 font-display text-2xl md:text-3xl lg:text-[2rem] text-ivory leading-[1.5] italic mb-10">
                  "The most overlooked competitive advantage in any organization is the strategic expertise of its most experienced women."
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                    <img
                      src={catherineImage}
                      alt="Catherine Laurent-Meister"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-ivory/60">
                      Catherine Laurent-Meister
                    </p>
                    <p className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory/30 mt-0.5">
                      CEO & Founder
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-navy/10 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
