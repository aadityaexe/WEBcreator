const About8 = () => {
  return (
    <section className="flex items-center justify-center py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/300"
            alt="About Image"
            className="rounded-full shadow-lg w-64 h-64"
          />
        </div>
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are a team of passionate individuals focused on delivering
            high-quality solutions to our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About8;
