import React from 'react';

const Footer4 = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500">Press</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul>
            <li><a href="mailto:contact@yourcompany.com" className="hover:text-blue-500">Email Us</a></li>
            <li><a href="tel:+1234567890" className="hover:text-blue-500">Call Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer4;
