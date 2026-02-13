import { motion } from "framer-motion";

const TwoPillars = () => {
  return (
    <section id="services" className="py-28 md:py-40 px-8 md:px-16 bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="w-10 h-[1px] bg-ivory/30 mb-8" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory/40 mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-ivory leading-[1.15] max-w-lg">
            Two Pillars of Impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-ivory/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="bg-navy p-10 md:p-16"
          >
            <span className="font-heading text-6xl text-ivory/10 block mb-6">01</span>
            <h3 className="text-3xl md:text-4xl font-heading text-ivory mb-6">
              Advisory & Training
            </h3>
            <p className="font-body text-base font-extralight text-ivory/55 leading-[1.8]">
              We partner with executive teams to design retention strategies, leadership development frameworks, and performance models that integrate the expertise of senior women into organizational growth. Our approach is grounded in business outcomes — not advocacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-navy p-10 md:p-16"
          >
            <span className="font-heading text-6xl text-ivory/10 block mb-6">02</span>
            <h3 className="text-3xl md:text-4xl font-heading text-ivory mb-6">
              Women Institute
            </h3>
            <p className="font-body text-base font-extralight text-ivory/55 leading-[1.8]">
              A global platform for research, thought leadership, and strategic dialogue. The Institute convenes senior leaders, policymakers, and academics to shape the future of intergenerational workforce strategy with rigor and independence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoPillars;
