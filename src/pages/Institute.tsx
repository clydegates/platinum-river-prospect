import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const sections = [
  { num: "01", key: "mission" },
  { num: "02", key: "research" },
  { num: "03", key: "events" },
  { num: "04", key: "partnerships" },
  { num: "05", key: "vision" },
];

const Institute = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="absolute bottom-20 right-16 w-32 h-[1px] bg-ivory hidden lg:block"
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-ivory/30" />
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/40">
                  {t("institute.overline")}
                </p>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-display text-ivory leading-[1.08] tracking-[-0.01em] max-w-3xl"
            >
              {t("institute.title")}{" "}
              <em className="italic font-light">{t("institute.titleItalic")}</em>
            </motion.h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/10 origin-left"
          />
        </section>

        {/* Sections */}
        <section className="relative bg-ivory overflow-hidden">
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={section.key}
                className={`relative py-24 md:py-36 px-8 md:px-16 lg:px-20 ${
                  isEven ? "bg-ivory" : "bg-ivory-dark"
                }`}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  className="absolute top-0 left-8 right-8 md:left-16 md:right-16 h-[1px] bg-navy/[0.06] origin-left"
                />
                <div className="relative max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1 }}
                      className="md:col-span-5"
                    >
                      <span className="font-display text-7xl lg:text-8xl text-navy/[0.05] block mb-6">
                        {section.num}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-navy leading-[1.1] tracking-[-0.01em]">
                        {t(`institute.${section.key}.title`)}
                      </h2>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="md:col-span-6 md:col-start-7 flex items-start gap-6"
                    >
                      <div className="w-[1px] h-full min-h-[80px] bg-navy/10 mt-2 flex-shrink-0 hidden sm:block" />
                      <p className="text-lg font-body font-extralight text-foreground/60 leading-[1.9] tracking-wide">
                        {t(`institute.${section.key}.text`)}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Institute;
