import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "en" | "fr" | "es" | "de";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  de: "DE",
};

type Translations = Record<string, Record<Locale, string>>;

const translations: Translations = {
  // Nav
  "nav.home": { en: "Home", fr: "Accueil", es: "Inicio", de: "Startseite" },
  "nav.approach": { en: "Our Approach", fr: "Notre Approche", es: "Nuestro Enfoque", de: "Unser Ansatz" },
  "nav.institute": { en: "Women Institute", fr: "Women Institute", es: "Women Institute", de: "Women Institute" },
  "nav.leadership": { en: "Leadership", fr: "Leadership", es: "Liderazgo", de: "Führung" },
  "nav.contact": { en: "Contact", fr: "Contact", es: "Contacto", de: "Kontakt" },
  // Approach page
  "approach.overline": { en: "Our Methodology", fr: "Notre Méthodologie", es: "Nuestra Metodología", de: "Unsere Methodik" },
  "approach.title": { en: "A Rigorous Approach to", fr: "Une Approche Rigoureuse du", es: "Un Enfoque Riguroso del", de: "Ein Rigoroser Ansatz für" },
  "approach.titleItalic": { en: "Strategic Impact", fr: "Impact Stratégique", es: "Impacto Estratégico", de: "Strategische Wirkung" },
  "approach.businessCase": { en: "The Business Case for Action", fr: "Le cas économique pour l'action", es: "El caso de negocio para la acción", de: "Der Business Case für Handeln" },
  "approach.businessCaseText": {
    en: "Organizations that fail to retain and develop senior women face measurable losses: accelerated turnover, depleted institutional knowledge, weakened governance, and diminished competitive positioning. Our methodology transforms this liability into strategic advantage.",
    fr: "Les organisations qui ne parviennent pas à retenir et développer les femmes seniors font face à des pertes mesurables : turnover accéléré, perte de connaissances institutionnelles, gouvernance affaiblie et positionnement concurrentiel diminué. Notre méthodologie transforme cette vulnérabilité en avantage stratégique.",
    es: "Las organizaciones que no retienen ni desarrollan a mujeres senior enfrentan pérdidas medibles: rotación acelerada, conocimiento institucional agotado, gobernanza debilitada y posicionamiento competitivo disminuido. Nuestra metodología transforma esta vulnerabilidad en ventaja estratégica.",
    de: "Organisationen, die es versäumen, erfahrene Frauen zu halten und zu entwickeln, erleiden messbare Verluste: beschleunigte Fluktuation, verlorenes institutionelles Wissen, geschwächte Governance und vermindertes Wettbewerbsposition. Unsere Methodik verwandelt diese Schwäche in strategischen Vorteil.",
  },
  "approach.step1.title": { en: "Advisory", fr: "Conseil", es: "Consultoría", de: "Beratung" },
  "approach.step1.text": {
    en: "Executive-level strategic consulting to diagnose organizational readiness, identify retention risks, and design bespoke frameworks aligned with business objectives. We work directly with C-suite leadership and boards.",
    fr: "Conseil stratégique au niveau exécutif pour diagnostiquer la préparation organisationnelle, identifier les risques de rétention et concevoir des cadres sur mesure alignés sur les objectifs business. Nous travaillons directement avec les directions générales et les conseils d'administration.",
    es: "Consultoría estratégica a nivel ejecutivo para diagnosticar la preparación organizacional, identificar riesgos de retención y diseñar marcos a medida alineados con los objetivos empresariales.",
    de: "Strategische Beratung auf Führungsebene zur Diagnose der organisatorischen Bereitschaft, Identifizierung von Retentionsrisiken und Gestaltung maßgeschneiderter Rahmenwerke.",
  },
  "approach.step2.title": { en: "Training", fr: "Formation", es: "Formación", de: "Schulung" },
  "approach.step2.text": {
    en: "Proprietary training programs for HR leaders, managers, and executive teams. Our modules cover intergenerational leadership, bias mitigation, performance optimization for senior talent, and inclusive succession planning.",
    fr: "Programmes de formation propriétaires pour les directeurs RH, managers et équipes exécutives. Nos modules couvrent le leadership intergénérationnel, la réduction des biais, l'optimisation de la performance des talents seniors et la planification inclusive de la succession.",
    es: "Programas de formación propietarios para líderes de RRHH, gerentes y equipos ejecutivos. Nuestros módulos cubren liderazgo intergeneracional, mitigación de sesgos y planificación de sucesión inclusiva.",
    de: "Proprietäre Schulungsprogramme für HR-Führungskräfte, Manager und Führungsteams. Unsere Module umfassen intergenerationale Führung, Bias-Minderung und inklusive Nachfolgeplanung.",
  },
  "approach.step3.title": { en: "Follow-up & Certification", fr: "Suivi & Certification", es: "Seguimiento & Certificación", de: "Nachverfolgung & Zertifizierung" },
  "approach.step3.text": {
    en: "Ongoing measurement, reporting, and certification to ensure sustained impact. We provide quarterly reviews, KPI dashboards, and formal certification for organizations meeting excellence benchmarks in senior talent strategy.",
    fr: "Mesure, reporting et certification continus pour garantir un impact durable. Nous fournissons des revues trimestrielles, des tableaux de bord KPI et une certification formelle pour les organisations atteignant les standards d'excellence en stratégie des talents seniors.",
    es: "Medición continua, informes y certificación para asegurar un impacto sostenido. Proporcionamos revisiones trimestrales, dashboards de KPIs y certificación formal.",
    de: "Kontinuierliche Messung, Berichterstattung und Zertifizierung für nachhaltigen Impact. Wir bieten vierteljährliche Reviews, KPI-Dashboards und formale Zertifizierung.",
  },
  // Institute page
  "institute.overline": { en: "Global Platform", fr: "Plateforme Mondiale", es: "Plataforma Global", de: "Globale Plattform" },
  "institute.title": { en: "The Women", fr: "Le Women", es: "El Women", de: "Das Women" },
  "institute.titleItalic": { en: "Institute", fr: "Institute", es: "Institute", de: "Institute" },
  "institute.mission.title": { en: "Global Mission", fr: "Mission Mondiale", es: "Misión Global", de: "Globale Mission" },
  "institute.mission.text": {
    en: "The Women Institute is a global center of excellence dedicated to advancing the strategic integration of senior women across industries, geographies, and governance structures. We produce the research, convene the leaders, and shape the policy frameworks that will define workforce strategy for the next generation.",
    fr: "Le Women Institute est un centre d'excellence mondial dédié à l'avancement de l'intégration stratégique des femmes seniors dans tous les secteurs, géographies et structures de gouvernance.",
    es: "El Women Institute es un centro de excelencia global dedicado a avanzar la integración estratégica de mujeres senior en todas las industrias y geografías.",
    de: "Das Women Institute ist ein globales Exzellenzzentrum, das sich der strategischen Integration erfahrener Frauen in allen Branchen und Regionen widmet.",
  },
  "institute.research.title": { en: "Research & Think Tank", fr: "Recherche & Think Tank", es: "Investigación & Think Tank", de: "Forschung & Think Tank" },
  "institute.research.text": {
    en: "Original, peer-reviewed research on workforce demographics, intergenerational leadership dynamics, and the economic impact of senior talent retention. Our publications inform policy and corporate strategy at the highest levels.",
    fr: "Recherche originale et évaluée par les pairs sur les dynamiques intergénérationnelles et l'impact économique de la rétention des talents seniors.",
    es: "Investigación original revisada por pares sobre dinámica intergeneracional y el impacto económico de la retención de talento senior.",
    de: "Originale, peer-reviewed Forschung zu intergenerationaler Führungsdynamik und wirtschaftlichen Auswirkungen der Bindung erfahrener Talente.",
  },
  "institute.events.title": { en: "Conferences & International Events", fr: "Conférences & Événements Internationaux", es: "Conferencias & Eventos Internacionales", de: "Konferenzen & Internationale Events" },
  "institute.events.text": {
    en: "Curated forums bringing together CEOs, CHROs, board directors, policymakers, and academics for strategic dialogue on the future of work. Our annual summit is the premier gathering for senior workforce strategy.",
    fr: "Forums sélectionnés réunissant PDG, DRH, administrateurs, décideurs et universitaires pour un dialogue stratégique sur l'avenir du travail.",
    es: "Foros curados que reúnen a CEOs, CHROs, directores de juntas, legisladores y académicos para un diálogo estratégico sobre el futuro del trabajo.",
    de: "Kuratierte Foren, die CEOs, CHROs, Aufsichtsräte, Entscheidungsträger und Akademiker für strategischen Dialog über die Zukunft der Arbeit zusammenbringen.",
  },
  "institute.partnerships.title": { en: "Institutional Partnerships", fr: "Partenariats Institutionnels", es: "Alianzas Institucionales", de: "Institutionelle Partnerschaften" },
  "institute.partnerships.text": {
    en: "Strategic alliances with international organizations, universities, and governance bodies to amplify impact and drive systemic change across sectors and borders.",
    fr: "Alliances stratégiques avec des organisations internationales, universités et organismes de gouvernance pour amplifier l'impact et conduire le changement systémique.",
    es: "Alianzas estratégicas con organizaciones internacionales, universidades y organismos de gobernanza para amplificar el impacto.",
    de: "Strategische Allianzen mit internationalen Organisationen, Universitäten und Governance-Gremien zur Verstärkung der Wirkung.",
  },
  "institute.vision.title": { en: "10-Year Strategic Vision", fr: "Vision Stratégique à 10 Ans", es: "Visión Estratégica a 10 Años", de: "10-Jahres Strategische Vision" },
  "institute.vision.text": {
    en: "By 2035, the Women Institute aims to establish the global standard for intergenerational workforce strategy, with certified programs operating in 50+ countries and a body of research shaping policy across G20 nations.",
    fr: "D'ici 2035, le Women Institute vise à établir la norme mondiale pour la stratégie intergénérationnelle de la main-d'œuvre, avec des programmes certifiés opérant dans plus de 50 pays.",
    es: "Para 2035, el Women Institute aspira a establecer el estándar global para la estrategia intergeneracional de la fuerza laboral.",
    de: "Bis 2035 will das Women Institute den globalen Standard für intergenerationale Personalstrategie etablieren.",
  },
  // Leadership page
  "leadership.overline": { en: "Executive Team", fr: "Équipe Dirigeante", es: "Equipo Directivo", de: "Führungsteam" },
  "leadership.title": { en: "Leadership", fr: "Leadership", es: "Liderazgo", de: "Führung" },
  // Contact page
  "contact.overline": { en: "Get In Touch", fr: "Nous Contacter", es: "Contáctenos", de: "Kontaktieren Sie Uns" },
  "contact.title": { en: "Start the", fr: "Démarrer la", es: "Iniciar la", de: "Beginnen Sie das" },
  "contact.titleItalic": { en: "Conversation", fr: "Conversation", es: "Conversación", de: "Gespräch" },
  "contact.subtitle": {
    en: "We welcome inquiries from organizations committed to strategic workforce performance.",
    fr: "Nous accueillons les demandes d'organisations engagées dans la performance stratégique de leur capital humain.",
    es: "Damos la bienvenida a consultas de organizaciones comprometidas con el rendimiento estratégico de su fuerza laboral.",
    de: "Wir begrüßen Anfragen von Organisationen, die sich für strategische Personalleistung einsetzen.",
  },
  "contact.org": { en: "Organization", fr: "Organisation", es: "Organización", de: "Organisation" },
  "contact.role": { en: "Your Role / Title", fr: "Votre Fonction / Titre", es: "Su Cargo / Título", de: "Ihre Position / Titel" },
  "contact.requestType": { en: "Type of Request", fr: "Type de Demande", es: "Tipo de Solicitud", de: "Art der Anfrage" },
  "contact.message": { en: "Message", fr: "Message", es: "Mensaje", de: "Nachricht" },
  "contact.send": { en: "Send Inquiry", fr: "Envoyer la Demande", es: "Enviar Consulta", de: "Anfrage Senden" },
  "contact.requestTypes.advisory": { en: "Strategic Advisory", fr: "Conseil Stratégique", es: "Consultoría Estratégica", de: "Strategische Beratung" },
  "contact.requestTypes.training": { en: "Training Program", fr: "Programme de Formation", es: "Programa de Formación", de: "Schulungsprogramm" },
  "contact.requestTypes.institute": { en: "Women Institute", fr: "Women Institute", es: "Women Institute", de: "Women Institute" },
  "contact.requestTypes.partnership": { en: "Partnership", fr: "Partenariat", es: "Alianza", de: "Partnerschaft" },
  "contact.requestTypes.other": { en: "Other", fr: "Autre", es: "Otro", de: "Sonstiges" },
  "contact.name": { en: "Full Name", fr: "Nom Complet", es: "Nombre Completo", de: "Vollständiger Name" },
  "contact.email": { en: "Professional Email", fr: "Email Professionnel", es: "Email Profesional", de: "Berufliche E-Mail" },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: string): string => {
    return translations[key]?.[locale] || translations[key]?.en || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
