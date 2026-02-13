import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import StrategicContext from "@/components/StrategicContext";
import TwoPillars from "@/components/TwoPillars";
import BusinessImpact from "@/components/BusinessImpact";
import LeadershipPreview from "@/components/LeadershipPreview";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <StrategicContext />
        <TwoPillars />
        <BusinessImpact />
        <LeadershipPreview />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
