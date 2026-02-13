import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end bg-navy overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-[hsl(215,55%,18%,0.7)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,55%,18%)] via-[hsl(215,55%,18%,0.2)] to-[hsl(215,55%,18%,0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,55%,18%,0.6)] to-transparent" />
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="absolute top-24 right-12 md:right-24 w-[1px] h-48 bg-ivory hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 3, delay: 2 }}
        className="absolute bottom-48 right-12 md:right-24 w-32 h-[1px] bg-ivory hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pb-24 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-ivory/30" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/40">
                Strategic Advisory · Executive Training
              </p>
              <div className="w-16 h-[1px] bg-ivory/30" />
            </div>
          </motion.div>

          {/* Headline with staggered word reveal */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display text-ivory leading-[1.05] tracking-[-0.01em]"
            >
              {["Strategic", "Leadership", "for the", "Next Era"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word === "Next Era" ? (
                    <em className="italic font-light">{word}</em>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1 }}
            className="mb-14 flex justify-center"
          >
            <p className="text-base md:text-lg font-body font-extralight text-ivory/55 max-w-lg leading-[1.8] tracking-wide">
              Advising global organizations on unlocking the strategic value of women 50+ in today's evolving workforce.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 px-10 py-4 border border-ivory/25 text-ivory font-body text-[11px] tracking-[0.25em] uppercase font-light hover:bg-ivory hover:text-navy transition-all duration-700"
            >
              Request a Strategic Discussion
              <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/10 origin-left"
      />
    </section>
  );
};

export default HeroSection;
