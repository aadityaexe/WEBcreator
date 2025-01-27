import AboutUs from "../components/AboutUs";
import AllHero from "../components/AllHero";
import AllRoadmap from "../components/AllRoadmap";
import AllToknomics from "../components/AllToknomics";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <AllHero />
      <AllRoadmap />
      <AllToknomics />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;
