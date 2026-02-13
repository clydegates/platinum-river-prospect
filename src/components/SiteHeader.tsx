import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n, localeLabels, type Locale } from "@/lib/i18n";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.approach", path: "/approach" },
  { key: "nav.institute", path: "/institute" },
  { key: "nav.leadership", path: "/leadership" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        <Link
          to="/"
          className={`font-display text-2xl tracking-wide transition-colors duration-500 ${scrolled ? "text-navy" : "text-ivory"}`}
        >
          Platinum River Elite
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body text-xs tracking-[0.15em] uppercase">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors duration-500 ${
                location.pathname === item.path
                  ? scrolled ? "text-navy" : "text-ivory"
                  : scrolled ? "text-navy/60 hover:text-navy" : "text-ivory/60 hover:text-ivory"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative ml-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border transition-all duration-500 text-[10px] tracking-[0.2em] ${
                scrolled
                  ? "border-navy/20 text-navy hover:border-navy/40"
                  : "border-ivory/20 text-ivory/70 hover:border-ivory/40"
              }`}
            >
              {localeLabels[locale]}
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="ml-1">
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-ivory shadow-lg border border-navy/10 min-w-[80px]">
                {(Object.keys(localeLabels) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 font-body text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                      locale === l
                        ? "text-navy bg-ivory-dark"
                        : "text-navy/50 hover:text-navy hover:bg-ivory-dark"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`ml-2 px-6 py-2.5 font-body text-xs tracking-[0.15em] uppercase transition-all duration-500 ${
              scrolled
                ? "bg-navy text-ivory hover:bg-navy-soft"
                : "bg-ivory/20 text-ivory border border-ivory/40 hover:bg-ivory/30"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`px-2.5 py-1.5 border text-[10px] tracking-[0.2em] transition-all duration-500 ${
                scrolled
                  ? "border-navy/20 text-navy"
                  : "border-ivory/20 text-ivory/70"
              }`}
            >
              {localeLabels[locale]}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-ivory shadow-lg border border-navy/10 min-w-[70px] z-50">
                {(Object.keys(localeLabels) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocale(l); setLangOpen(false); }}
                    className={`block w-full text-left px-3 py-2 font-body text-[10px] tracking-[0.2em] ${
                      locale === l ? "text-navy bg-ivory-dark" : "text-navy/50 hover:text-navy"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className={`px-5 py-2 font-body text-xs tracking-[0.15em] uppercase transition-all duration-500 ${
              scrolled ? "bg-navy text-ivory" : "bg-ivory/20 text-ivory border border-ivory/40"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
