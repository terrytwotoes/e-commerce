import BannerSection from "./components/BannerSection";
import BigAccordion from "./components/BigAccordion";
import CategoryCard from "./components/CategoryCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import NavMenu from "./components/NavMenu";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

function App() {
  return (
    <>
      <Toast />
      <Navbar />
      <NavMenu />
      <HeroCarousel />
      <CategoryCard />
      <BannerSection />
      <Features />
      <BigAccordion />
      <Footer />
    </>
  );
}

export default App;
