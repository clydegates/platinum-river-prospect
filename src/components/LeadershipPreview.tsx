import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeadershipPreview = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-ice">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-navy leading-tight mb-6">
            Leadership
          </h2>
          <p className="font-body text-base font-light text-muted-foreground leading-relaxed mb-8">
            Platinum River Elite is led by senior advisors with decades of experience across executive leadership, organizational strategy, and global workforce transformation.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy hover:gap-3 transition-all"
          >
            Meet the Team <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-navy rounded-sm p-10 md:p-14"
        >
          <blockquote className="font-display text-xl md:text-2xl text-primary-foreground leading-relaxed italic mb-6">
            "The most overlooked competitive advantage in any organization is the strategic expertise of its most experienced women."
          </blockquote>
          <p className="font-body text-sm text-primary-foreground/60">
            — Founding Team, Platinum River Elite
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
