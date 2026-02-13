import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import boardroomImage from "@/assets/strategic-boardroom.jpg";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={boardroomImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/60 to-navy" />
      </div>

      {/* Decorative lines */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-20 right-20 w-32 h-[1px] bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-20 right-20 w-[1px] h-32 bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-20 left-20 w-20 h-[1px] bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-20 left-20 w-[1px] h-20 bg-ivory hidden lg:block"
      />

      <div className="relative z-10 w-full py-32 md:py-48 px-8 md:px-16 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="w-12 h-[1px] bg-ivory/15" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/35">
                Get In Touch
              </p>
              <div className="w-12 h-[1px] bg-ivory/15" />
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-ivory leading-[1.05] mb-10 tracking-[-0.02em]">
              Start the{" "}
              <em className="italic font-light">Conversation</em>
            </h2>

            <p className="text-base md:text-lg font-body font-extralight text-ivory/35 leading-[1.9] mb-16 max-w-xl mx-auto tracking-wide">
              We welcome inquiries from organizations committed to strategic workforce performance.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 px-14 py-5 border border-ivory/15 text-ivory font-body text-[11px] tracking-[0.25em] uppercase font-light hover:bg-ivory hover:text-navy transition-all duration-700"
              >
                Contact Platinum River Elite
                <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-8" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
