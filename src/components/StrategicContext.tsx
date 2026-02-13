import { motion } from "framer-motion";
import boardroomImage from "@/assets/strategic-boardroom.jpg";

const StrategicContext = () => {
  return (
    <section id="about" className="relative bg-ivory overflow-hidden">
      {/* Full-bleed cinematic image with parallax feel */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={boardroomImage}
            alt="Executive boardroom at golden hour"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Rich layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-transparent" />

        {/* Large typographic overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-ivory leading-none whitespace-nowrap select-none pointer-events-none"
        >
          2030
        </motion.div>

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-16 right-8 md:right-20 hidden sm:block"
        >
          <div className="backdrop-blur-md bg-navy/80 border border-ivory/[0.08] p-10 md:p-14">
            <p className="font-display text-6xl md:text-7xl text-ivory leading-none mb-3">2030</p>
            <div className="w-12 h-[1px] bg-ivory/20 mb-4" />
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-ivory/45 max-w-[200px] leading-relaxed">
              The tipping point for workforce demographics
            </p>
          </div>
        </motion.div>

        {/* Section label floating on image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-16 left-8 md:left-20"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-[1px] bg-ivory/30" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/50">
              The Imperative
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ivory leading-[1.05] tracking-[-0.02em]">
            A Structural Shift
          </h2>
        </motion.div>
      </div>

      {/* Text content with refined editorial grid */}
      <div className="relative py-28 md:py-40 px-8 md:px-16 lg:px-20">
        {/* Decorative vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-0 left-1/2 w-[1px] h-32 bg-navy/[0.08] origin-top hidden lg:block"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left column: bold statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-5"
            >
              <h3 className="text-3xl md:text-4xl lg:text-[2.8rem] font-display text-navy leading-[1.15] tracking-[-0.01em]">
                Demands{" "}
                <em className="italic font-light">Strategic Action</em>
              </h3>
              <div className="w-20 h-[1px] bg-navy/15 mt-10" />
            </motion.div>

            {/* Right column: body text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-6 md:col-start-7"
            >
              <div className="relative pl-8 border-l border-navy/[0.08]">
                <p className="text-lg md:text-xl font-body font-extralight text-foreground/60 leading-[2] mb-10 tracking-wide">
                  By 2030, women over 50 will represent one of the largest and most experienced talent segments in developed economies — yet most organizations remain unprepared to retain, develop, and leverage this critical asset.
                </p>
                <p className="text-lg md:text-xl font-body font-extralight text-foreground/60 leading-[2] tracking-wide">
                  The cost of inaction is measurable: accelerated turnover, institutional knowledge loss, leadership gaps, and weakened governance. For forward-looking organizations, this represents both an urgent risk and a decisive competitive opportunity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicContext;
