import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    requestType: "",
    message: "",
  });

  const requestTypes = [
    t("contact.requestTypes.advisory"),
    t("contact.requestTypes.training"),
    t("contact.requestTypes.institute"),
    t("contact.requestTypes.partnership"),
    t("contact.requestTypes.other"),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Thank you. We will respond within 48 hours.",
    });
    setForm({ name: "", email: "", organization: "", role: "", requestType: "", message: "" });
  };

  const inputClasses =
    "w-full bg-transparent border-b border-navy/15 py-4 font-body text-sm font-light text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-navy/40 transition-colors duration-500";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-8 md:px-16 lg:px-20 bg-navy overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-ivory/30" />
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/40">
                  {t("contact.overline")}
                </p>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-display text-ivory leading-[1.08] tracking-[-0.01em] max-w-3xl"
            >
              {t("contact.title")}{" "}
              <em className="italic font-light">{t("contact.titleItalic")}</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 text-base md:text-lg font-body font-extralight text-ivory/45 max-w-xl leading-[1.8] tracking-wide"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/10 origin-left"
          />
        </section>

        {/* Form */}
        <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.04 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute bottom-20 right-16 w-[1px] h-48 bg-navy hidden lg:block"
          />
          <div className="relative max-w-3xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-2">
                    {t("contact.org")}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-2">
                    {t("contact.role")}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-4">
                  {t("contact.requestType")}
                </label>
                <div className="flex flex-wrap gap-3">
                  {requestTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, requestType: type })}
                      className={`px-6 py-3 font-body text-[11px] tracking-[0.15em] uppercase border transition-all duration-500 ${
                        form.requestType === type
                          ? "bg-navy text-ivory border-navy"
                          : "bg-transparent text-navy/60 border-navy/15 hover:border-navy/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray block mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 px-12 py-5 bg-navy text-ivory font-body text-[11px] tracking-[0.25em] uppercase font-light hover:bg-navy-soft transition-all duration-700"
                >
                  {t("contact.send")}
                  <span className="inline-block w-4 h-[1px] bg-current transition-all duration-500 group-hover:w-6" />
                </button>
              </motion.div>
            </motion.form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Contact;
