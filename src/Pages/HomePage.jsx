import CTAsection from "../Components/CTAsection";
import DesignConcierge from "../Components/Home/DesingConsirge";
import FindPerfectStore from "../Components/Home/FindPerfectStore";
import HeroSection from "../Components/Home/HeroSection";
import HowItWorks from "../Components/Home/HowItWorks";
import WhyRVUnique from "../Components/Home/WhyRVUnique";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <DesignConcierge />
      <WhyRVUnique />
      <FindPerfectStore />
      <CTAsection />
    </>
  );
}
