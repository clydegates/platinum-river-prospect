import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import boardroomImage from "@/assets/strategic-boardroom.jpg";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-36 md:py-52 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img
          src={boardroomImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(215 40% 28%) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative corner lines */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-16 right-16 w-24 h-[1px] bg-ivory hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute bottom-16 right-16 w-[1px] h-24 bg-ivory hidden lg:block"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-10 h-[1px] bg-ivory/15" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/35">
              Get In Touch
            </p>
            <div className="w-10 h-[1px] bg-ivory/15" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-ivory leading-[1.08] mb-8 tracking-[-0.01em]">
            Start the{" "}
            <em className="italic font-light">Conversation</em>
          </h2>

          <p className="text-base md:text-lg font-body font-extralight text-ivory/40 leading-[1.9] mb-14 max-w-xl mx-auto tracking-wide">
            We welcome inquiries from organizations committed to strategic workforce performance.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 px-12 py-5 border border-ivory/20 text-ivory font-body text-[11px] tracking-[0.25em] uppercase font-light hover:bg-ivory hover:text-navy transition-all duration-700"
            >
              Contact Platinum River Elite
              <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/[0.06] origin-center"
      />
    </section>
  );
};

export default FinalCTA;
