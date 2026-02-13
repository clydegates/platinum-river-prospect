import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end bg-navy overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[hsl(215,55%,18%,0.75)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,55%,18%)] via-transparent to-[hsl(215,55%,18%,0.3)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28 pt-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-12 h-[1px] bg-ivory/40 mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory/50 mb-8">
              Strategic Advisory · Executive Training
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display text-ivory leading-[1.1] mb-8"
          >
            Strategic Leadership for the Next Era
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl font-body font-extralight text-ivory/65 max-w-xl mb-12 leading-relaxed"
          >
            Advising global organizations on unlocking the strategic value of women 50+ in today's evolving workforce.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            href="#contact"
            className="inline-block px-10 py-4 bg-ivory text-navy font-body text-xs tracking-[0.2em] uppercase font-medium hover:bg-ivory-dark transition-colors duration-500"
          >
            Request a Strategic Discussion
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
