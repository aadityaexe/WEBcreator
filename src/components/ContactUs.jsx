import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section id="contact" className=" py-16 px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-12">
          Have questions? We're here to help. Reach out to us through any of the
          methods below.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <FiPhone size={24} className="text-pink-400" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>+123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <FiMail size={24} className="text-pink-400" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <FiMapPin size={24} className="text-pink-400" />
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>123 Street, City, Country</p>
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <form className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/2 p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
