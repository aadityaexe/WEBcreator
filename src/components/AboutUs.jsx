const AboutUs = () => {
  return (
    <section id="about" className=" text-white py-16 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 leading-relaxed">
          Welcome to our platform! We specialize in providing funky, innovative
          solutions to elevate your online presence. Whether you're looking for
          sleek single-page websites, robust components, or tailor-made designs,
          we’ve got you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-72">
            <h3 className="text-2xl font-bold mb-4">Custom Components</h3>
            <p>
              Our library of components is crafted to suit every need. Build
              faster and smarter with reusable designs.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-72">
            <h3 className="text-2xl font-bold mb-4">Funky Designs</h3>
            <p>
              Stand out with unique and vibrant designs that make your website
              unforgettable.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-72">
            <h3 className="text-2xl font-bold mb-4">One-Page Websites</h3>
            <p>
              Get everything you need in a single page. Perfect for modern,
              fast-loading, and user-friendly experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
