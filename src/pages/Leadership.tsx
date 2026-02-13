import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const team = [
  {
    role: "Chief Executive Officer",
    name: "Catherine Laurent-Meister",
    bio: "Over 30 years of experience in global executive leadership, organizational transformation, and strategic consulting for Fortune 500 companies. Former senior partner at McKinsey & Company, board advisor to multiple FTSE 100 corporations.",
    initials: "CL",
  },
  {
    role: "Chief Operating Officer",
    name: "Dr. Isabelle Fournier",
    bio: "Former Chief People Officer of a leading European multinational. Expert in workforce analytics, talent strategy, and organizational design. PhD in Organizational Psychology from INSEAD.",
    initials: "IF",
  },
  {
    role: "Director of Research",
    name: "Prof. Elena Vasquez-Stern",
    bio: "Distinguished academic and researcher specializing in intergenerational leadership and workforce demographics. Published over 80 papers in leading management journals. Visiting professor at London Business School.",
    initials: "EV",
  },
  {
    role: "Director of Global Partnerships",
    name: "Sarah Chen-Nakamura",
    bio: "Two decades of experience building institutional partnerships across APAC, EMEA, and the Americas. Former UN Women advisory board member and OECD policy contributor.",
    initials: "SC",
  },
  {
    role: "Head of Training Programs",
    name: "Dr. Margaret Okafor",
    bio: "Expert in executive education and leadership development. Former Dean of Executive Programs at a top-tier European business school. Designed proprietary training frameworks adopted by 200+ organizations globally.",
    initials: "MO",
  },
  {
    role: "Head of Advisory",
    name: "Anne-Sophie Bertrand",
    bio: "Senior strategist with 25 years of experience advising boards and C-suites on governance, succession planning, and talent retention. Former Senior VP at a leading global professional services firm.",
    initials: "AB",
  },
];

const Leadership = () => {
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
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-ivory/30" />
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ivory/40">
                  {t("leadership.overline")}
                </p>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-display text-ivory leading-[1.08] tracking-[-0.01em]"
            >
              {t("leadership.title")}
            </motion.h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-ivory/10 origin-left"
          />
        </section>

        {/* Team Grid */}
        <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="group relative p-10 md:p-14 lg:p-16 border border-navy/[0.06] hover:bg-ivory-dark transition-colors duration-700"
                >
                  {/* Initials */}
                  <div className="w-16 h-16 flex items-center justify-center bg-navy mb-8">
                    <span className="font-display text-xl text-ivory tracking-wider">
                      {member.initials}
                    </span>
                  </div>

                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-warm-gray mb-3">
                    {member.role}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display text-navy mb-6 leading-[1.2]">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm font-extralight text-foreground/50 leading-[1.9] tracking-wide">
                    {member.bio}
                  </p>
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

export default Leadership;
