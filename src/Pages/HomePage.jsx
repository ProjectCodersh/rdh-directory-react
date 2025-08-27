import CTAsection from "../Components/CTAsection";
import DesignConcierge from "../Components/Home/DesingConsirge";
import FindPerfectStore from "../Components/Home/FindPerfectStore";
import HeroSection from "../Components/Home/HeroSection";
import HowItWorks from "../Components/Home/HowItWorks";
import HowItWorks_2 from "../Components/Home/HowItWorks_2";
import NewArticles from "../Components/Home/NewArticles";
import Testimonials from "../Components/Home/TestimonialCorousel";
import WhyRVUnique from "../Components/Home/WhyRVUnique";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <DesignConcierge />
      <WhyRVUnique />
      <FindPerfectStore />
      <HowItWorks_2 />
      <NewArticles />
      <Testimonials />
      <CTAsection />
    </>
  );
}
