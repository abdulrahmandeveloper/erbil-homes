import CardsSection from "./components/CardsSection";
import CallToAction from "./components/CallToAction";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
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
