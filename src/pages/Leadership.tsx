import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import beatriceImage from "@/assets/beatrice-ceo.jpg";
import mariaElenaImage from "@/assets/maria-elena-coo.jpg";
import frederiqueImage from "@/assets/frederique-cao.jpg";
import chiefWiImage from "@/assets/chief-wi-officer.jpg";

const teamSections = [
  {
    category: "Leading & Co-Founding Team",
    members: [
      {
        role: "CEO & Co-Founder",
        name: "Beatrice",
        bio: "Extensive experience promoting the image of seniors in Asia. Co-founder and owner of Platinum Angels Management (senior models agency) in Singapore in 2019, a leader in this niche market in the region. Career in the Ethics and Compliance departments of several financial institutions, Global Team Leader.",
        quote: "My vision for Platinum River Elite is for this formidable company to be the driving force supporting women 50+ influence in the world. Its strategy and leading its growth and development are my primary objectives and mission as CEO.",
        initials: "B",
        image: beatriceImage,
      },
      {
        role: "COO & Co-Founder",
        name: "Maria Elena (M.E.)",
        bio: "Lawyer by trade, has worked most of her professional career in financial institutions, focusing on the Compliance space. A diplomat's daughter who has traveled extensively across the globe and has lived in 9 countries.",
        quote: "Platinum River Elite represents a viable solution in a world that chooses to exclude women, especially women of a certain age, from having a seat at the table in discussions related to our health, wealth and overall well-being.",
        initials: "ME",
        image: mariaElenaImage,
      },
    ],
  },
  {
    category: "Executive C-Team",
    members: [
      {
        role: "Chief Advisory Officer",
        name: "Frédérique",
        bio: "Sales Manager with 25 years of people management experience in international logistics companies, combining operational leadership with a strong dual role as a Learning & Development Facilitator. She leads and develops sales teams while designing and facilitating leadership, sales, and supervisory training programs in multicultural environments.",
        quote: "Through Platinum River Elite, I leverage my experience as a Sales Manager, facilitator, and female leader in a constantly evolving professional world. I aim to change the perception of 'senior women,' who too often become invisible to decision-making and talent pipelines.",
        initials: "F",
        image: frederiqueImage,
      },
      {
        role: "Chief WI Officer",
        name: "Sophie",
        bio: "Senior executive with deep expertise in research, policy, and institutional strategy. Specialized in women's leadership initiatives and intergenerational workforce development across global organizations.",
        quote: "The Women Institute is where rigorous research meets real-world impact — creating frameworks that empower organizations to unlock the full potential of their most experienced female leaders.",
        initials: "S",
        image: chiefWiImage,
      },
    ],
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

        {/* Team Sections */}
        <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-20 bg-ivory overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            {teamSections.map((section, sectionIndex) => (
              <div key={section.category} className={sectionIndex > 0 ? "mt-24 md:mt-32" : ""}>
                {/* Section header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex items-center gap-6 mb-16"
                >
                  <div className="w-12 h-[1px] bg-navy/15" />
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gray">
                    {section.category}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-0">
                  {section.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                      className="group relative p-10 md:p-14 lg:p-16 border border-navy/[0.06] hover:bg-ivory-dark transition-colors duration-700"
                    >
                      {/* Photo */}
                      {member.image ? (
                        <Avatar className="w-32 h-32 mb-8">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                          <AvatarFallback className="bg-navy text-ivory text-lg font-display">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-32 h-32 mb-8 bg-navy/5 border border-navy/[0.08] flex items-center justify-center">
                          <span className="font-display text-2xl text-navy/20">{member.initials}</span>
                        </div>
                      )}

                      <p className="font-body text-[10px] tracking-[0.35em] uppercase text-warm-gray mb-3">
                        {member.role}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-display text-navy mb-6 leading-[1.2]">
                        {member.name}
                      </h3>
                      <p className="font-body text-sm font-extralight text-foreground/50 leading-[1.9] tracking-wide mb-6">
                        {member.bio}
                      </p>

                      {/* Quote */}
                      {member.quote && (
                        <blockquote className="font-display text-base italic text-navy/40 leading-[1.7] border-l-2 border-navy/10 pl-6 mt-8">
                          "{member.quote}"
                        </blockquote>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Leadership;
