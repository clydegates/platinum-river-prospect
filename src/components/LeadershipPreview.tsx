import { motion } from "framer-motion";

const LeadershipPreview = () => {
  return (
    <section id="leadership" className="py-28 md:py-40 px-8 md:px-16 bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5"
          >
            <div className="w-10 h-[1px] bg-navy/30 mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-warm-gray mb-4">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-heading text-navy leading-[1.15] mb-8">
              Leadership
            </h2>
            <p className="font-body text-base font-extralight text-foreground/60 leading-[1.8] mb-10">
              Platinum River Elite is led by senior advisors with decades of experience across executive leadership, organizational strategy, and global workforce transformation.
            </p>
            <a
              href="#"
              className="inline-block font-body text-xs tracking-[0.2em] uppercase text-navy border-b border-navy pb-1 hover:opacity-60 transition-opacity duration-300"
            >
              Meet the Team
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="bg-navy p-12 md:p-16">
              <blockquote className="font-heading text-2xl md:text-3xl text-ivory leading-[1.4] italic mb-8">
                "The most overlooked competitive advantage in any organization is the strategic expertise of its most experienced women."
              </blockquote>
              <div className="w-10 h-[1px] bg-ivory/20 mb-6" />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-ivory/40">
                Founding Team
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
