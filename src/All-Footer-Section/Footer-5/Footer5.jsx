import React from 'react';

const Footer5 = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Location</h4>
          <iframe
            className="w-full h-48 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.264169057197!2d-122.4012268!3d37.7856172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f891ff797%3A0x41b84630b8c46225!2s160%20Spear%20St%2C%20San%20Francisco%2C%20CA%2094143!5e0!3m2!1sen!2sus!4v1602744720221!5m2!1sen!2sus"
            title="Company Location"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer5;
