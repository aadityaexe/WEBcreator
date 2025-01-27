const MeemTokenWebsites = ({ websites }) => {
  return (
    <div className="min-h-screen  text-white p-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Fully Animated MeemToken Websites
      </h1>

      {/* Websites Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((website, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={website.image}
              alt={website.theme}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{website.theme}</h2>
              <p className="text-gray-300 mb-4">{website.domain}</p>
              <a
                href={`https://${website.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-medium bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-2 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeemTokenWebsites;
