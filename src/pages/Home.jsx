import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import PromoBanner from "../components/landing/PromoBanner";
import ProjectStats from "../components/landing/ProjectStats";
import InfrastructureSection from "../components/landing/InfrastructureSection";
import HouseCollections from "../components/landing/HouseCollections";
import InteriorsSection from "../components/landing/InteriorsSection";
import MortgageSection from "../components/landing/MortgageSection";
import MortgageCalculator from "../components/landing/MortgageCalculator";
import HorizonSection from "../components/landing/HorizonSection";
import LocationMap from "../components/landing/LocationMap";
import PurchaseSection from "../components/landing/PurchaseSection";
import BuildOnYourLandSection from "../components/landing/BuildOnYourLandSection";
import ReferralSection from "../components/landing/ReferralSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-empire-graphite min-h-screen">
      <Navbar />
      <HeroSection />
      <PromoBanner />
      <ReferralSection />
      <ProjectStats />
      <InfrastructureSection />
      <HouseCollections />
      <InteriorsSection />
      <MortgageSection />
      <MortgageCalculator />
      <HorizonSection />
      <BuildOnYourLandSection />
      <PurchaseSection />
      <LocationMap />
      <Footer />
    </div>
  );
}