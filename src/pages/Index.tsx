import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacultySection from "@/components/FacultySection";
import QuickSections from "@/components/QuickSections";
import Footer from "@/components/Footer";
import GradientSelector from "@/components/GradientSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FacultySection />
      <QuickSections />
      <Footer />
      <GradientSelector />
    </div>
  );
};

export default Index;
