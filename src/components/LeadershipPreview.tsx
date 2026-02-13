import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import beatriceImage from "@/assets/beatrice-ceo.jpg";
import mariaElenaImage from "@/assets/maria-elena-coo.jpg";
import frederiqueImage from "@/assets/frederique-cao.jpg";

const leaders = [
  { name: "Beatrice", role: "CEO & Co-Founder", image: beatriceImage },
  { name: "Maria Elena", role: "COO & Co-Founder", image: mariaElenaImage },
  { name: "Frédérique", role: "Chief Advisory Officer", image: frederiqueImage },
];

const LeadershipPreview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 300;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section id="leadership" className="relative py-32 md:py-48 bg-ivory-dark overflow-hidden">
      {/* Decorative corners */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 right-16 w-28 h-[1px] bg-navy hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-16 right-16 w-[1px] h-28 bg-navy hidden lg:block"
      />

      {/* Header + Quote */}
      <div className="px-8 md:px-16 lg:px-20 max-w-7xl mx-auto mb-20 md:mb-28">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-[1px] bg-navy/15"
              />
              <p className="font-body text-[9px] tracking-[0.45em] uppercase text-warm-gray">
                Our Team
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-display text-navy leading-[1.08] tracking-[-0.01em]">
              Leadership
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <blockquote className="font-display text-xl md:text-2xl text-navy/60 leading-[1.6] italic">
              "My vision for Platinum River Elite is for this formidable company to be the driving force supporting women 50+ influence in the world."
            </blockquote>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-warm-gray mt-4">
              — Beatrice, CEO & Co-Founder
            </p>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-[1px] overflow-x-auto scrollbar-hide pl-8 md:pl-16 lg:pl-20 pr-8 md:pr-16 lg:pr-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex-shrink-0 w-[260px] md:w-[300px] lg:w-[320px] relative overflow-hidden cursor-pointer"
            >
              <div className="relative h-[340px] md:h-[400px] lg:h-[430px] overflow-hidden bg-navy/5">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/0 group-hover:bg-ivory/20 transition-colors duration-700" />
              </div>

              <div className="p-6 md:p-8 bg-navy">
                <p className="font-display text-lg md:text-xl text-ivory leading-tight mb-2">
                  {leader.name}
                </p>
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-ivory/35">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-8 md:px-16 lg:px-20 max-w-7xl mx-auto mt-12 flex items-center justify-between">
          <Link
            to="/leadership"
            className="group inline-flex items-center gap-4 cursor-pointer"
          >
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-navy group-hover:text-navy/70 transition-colors duration-700">
              Meet the Team
            </span>
            <div className="relative w-10 h-[1px] bg-navy/20 group-hover:w-14 group-hover:bg-navy/40 transition-all duration-700">
              <ArrowRight className="absolute -right-1 -top-[5px] w-3 h-3 text-navy/30 group-hover:text-navy/60 transition-all duration-700" />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 border border-navy/10 flex items-center justify-center hover:border-navy/25 disabled:opacity-20 transition-all duration-500"
            >
              <ChevronLeft className="w-4 h-4 text-navy/50" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 border border-navy/10 flex items-center justify-center hover:border-navy/25 disabled:opacity-20 transition-all duration-500"
            >
              <ChevronRight className="w-4 h-4 text-navy/50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
