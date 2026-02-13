import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const steps = [
  { num: "01", key: "step1" },
  { num: "02", key: "step2" },
  { num: "03", key: "step3" },
];

const Approach = () => {
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
            className="absolute top-24 right-16 w-[1px] h-48 bg-ivory hidden lg:block"
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-ivory/30" />
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/40">
                  {t("approach.overline")}
                </p>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-display text-ivory leading-[1.08] tracking-[-0.01em] max-w-3xl"
            >
              {t("approach.title")}{" "}
              <em className="italic font-light">{t("approach.titleItalic")}</em>
            </motion.h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/10 origin-left"
          />
        </section>

        {/* Business Case */}
        <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.04 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-20 right-16 w-[1px] h-64 bg-navy hidden lg:block"
          />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="md:col-span-4"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-[1px] bg-navy/20" />
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gray">
                    The Imperative
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-display text-navy leading-[1.1] tracking-[-0.01em]">
                  {t("approach.businessCase")}
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.25 }}
                className="md:col-span-7 md:col-start-6 flex flex-col justify-center"
              >
                <div className="flex items-start gap-6">
                  <div className="w-[1px] h-full min-h-[120px] bg-navy/10 mt-2 flex-shrink-0 hidden sm:block" />
                  <p className="text-lg md:text-xl font-body font-extralight text-foreground/65 leading-[1.9] tracking-wide">
                    {t("approach.businessCaseText")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3-Step Model */}
        <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-16 left-16 w-24 h-[1px] bg-ivory hidden lg:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-16 left-16 w-[1px] h-24 bg-ivory hidden lg:block"
          />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="mb-24 md:mb-32"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-ivory/20" />
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/35">
                  Our 3-Step Model
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-ivory leading-[1.1] max-w-lg tracking-[-0.01em]">
                From Diagnosis to{" "}
                <em className="italic font-light">Certification</em>
              </h2>
            </motion.div>

            <div className="space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  className="group relative p-10 md:p-16 lg:p-20 border-t border-ivory/[0.06] hover:bg-ivory/[0.03] transition-colors duration-700"
                >
                  <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                    <div className="md:col-span-4">
                      <h3 className="text-3xl md:text-4xl font-display text-ivory leading-[1.15]">
                        {t(`approach.${step.key}.title`)}
                      </h3>
                    </div>
                    <div className="md:col-span-7 md:col-start-6">
                      <p className="font-body text-base font-extralight text-ivory/45 leading-[1.9] tracking-wide">
                        {t(`approach.${step.key}.text`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Approach;
