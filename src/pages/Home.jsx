import AboutUs from "../components/AboutUs";
import AllHero from "../components/AllHero";
import AllRoadmap from "../components/AllRoadmap";
import AllToknomics from "../components/AllToknomics";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import MeemTokenWebsites from "../components/MeemTokenWebsites";
import Services from "../components/Services";
import wifu from "../assets/image.png";
const Home = () => {
  const websites = [
    {
      domain: "wifuwiki.netlify.app",
      theme: "Funky Pink",
      image: wifu,
    },
    {
      domain: "wifuwiki.netlify.app",
      theme: "Gray Gradient",
      image: wifu,
    },
    {
      domain: "wifuwiki.netlify.app",
      theme: "Minimalist Dark",
      image: wifu,
    },
  ];

  return (
    <div>
      <Hero />
      <AboutUs />
      <MeemTokenWebsites websites={websites} />
      <AllHero />
      <AllRoadmap />
      <AllToknomics />
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;
