import CardsSection from "./components/card-section";
import CallToAction from "./components/call-to-action";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar sticky />
      <HeroSection></HeroSection>
      <CardsSection></CardsSection>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
};

export default page;
