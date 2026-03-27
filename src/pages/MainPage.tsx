import { AboutUsSection } from "../components/AboutUsSection";
import { ContactSection } from "../components/ContactSection";
import { EquipmentSection } from "../components/EquipmentSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ServicesSection } from "../components/ServicesSection";


export const MainPage = () => {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <ServicesSection />
    <EquipmentSection />
    <ProjectsSection />
    <ContactSection />
    </>
  );
};
