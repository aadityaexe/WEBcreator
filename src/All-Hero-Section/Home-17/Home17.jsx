import BackImg from '../assets/homebg.jpg'; // Ensure the path is correct
import Image1 from '../assets/Ben1-removebg-preview.png'; // Replace with your actual images
import Image2 from '../assets/ben2-removebg-preview.png';
import Image3 from '../assets/ben4-removebg-preview.png';
import { useState, useEffect } from 'react';

const images = [Image1, Image2, Image3]; // Array of images to cycle through

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateImage(true); // Trigger animation
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimateImage(false); // Reset animation after image change
      }, 900); // This timing should match the animation duration
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div
      className="home w-full h-[90vh] bg-cover bg-center flex items-center justify-between px-8 text-center"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      {/* Left Section - Heading, Subheading, Paragraph, and Button */}
      <div className="flex flex-col w-[50%] h-full space-y-4 text-white gap-10 justify-center">
        <h1
          className="text-4xl lg:text-8xl font-bold"
          style={{
            fontFamily: 'Londrina Shadow',
          }}
        >
          Welcome <br /> To Our Platform
        </h1>
        <h2
          className="text-2xl lg:text-4xl"
          style={{
            fontFamily: 'Shojumaru',
          }}
        >
          Explore the Future of Innovation
        </h2>
        <p
          className="text-lg lg:text-xl"
          style={{
            fontFamily: 'Atma',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda facilis dignissimos fuga eveniet repellendus
          numquam vitae, corporis libero vel, deserunt, nulla reiciendis eligendi voluptate est provident? Ipsam odio libero
          quae modi, eveniet earum repudiandae excepturi exercitationem sint molestiae eaque corrupti unde a similique
          natus quas maiores porro reprehenderit dolorum corporis!
        </p>
        <button
          className="relative px-6 py-3 text-white font-semibold  w-[250px] ml-[300px] uppercase tracking-wide text-xl transition duration-300"
          style={{ '--color': '#6eff3e' }}
        >
          <span className="funky-span"></span>
          <span className="funky-span"></span>
          <span className="funky-span"></span>
          <span className="funky-span"></span>
          Get Started
        </button>
      </div>

      {/* Right Section - Image Slideshow */}
      <div className="w-[45%] relative overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={`w-auto h-[890px] transition-opacity duration-1000  ${
            animateImage ? 'opacity-0' : 'opacity-100 animate-slide-in'
          }`}
        />
      </div>
    </div>
  );
};

export default Home;
