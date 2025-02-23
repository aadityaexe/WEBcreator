const About6 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-10">
      <div className="md:w-1/2">
        <img
          src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg"
          alt="Team"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-6">
        <h1 className="about-text opacity-100 text-5xl font-bold">
          Who We Are
        </h1>
        <p className="about-text opacity-100 text-lg mt-4">
          We are a passionate team dedicated to creating seamless digital
          experiences.
        </p>
      </div>
    </section>
  );
};

export default About6;
