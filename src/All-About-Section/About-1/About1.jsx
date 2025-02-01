import image1 from "../../assets/try.png";
const About1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 px-6 md:px-16 py-12 bg-gradient-to-r from-pink-500 to-gray-900 text-white">
      {/* Image Section */}
      <div className="w-full pl-24 md:w-1/2 transform hover:scale-105 transition duration-300">
        <img
          src={image1}
          alt="About Image"
          className="w-60 h-auto rounded-lg shadow-2xl border-4 border-pink-300"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600 mb-4 drop-shadow-lg">
          About Us
        </h2>
        <p className="text-lg leading-relaxed animate-pulse">
          We thrive on creativity and innovation, bringing the most exciting and
          unique experiences to our audience. Our passion fuels everything we
          do, making sure every step is as vibrant as our ideas.
        </p>
      </div>
    </div>
  );
};

export default About1;
