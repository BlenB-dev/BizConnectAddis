import React from "react";

const AboutUs = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a forward-thinking company, dedicated to driving innovation
            and offering high-quality solutions to meet our customers' needs.
            Our team strives to deliver the best products and services in the
            industry, ensuring satisfaction and trust.
          </p>
        </div>

        {/* Core Values Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
          <ul className="text-gray-400 space-y-2">
            <li>🚀 Innovation and Excellence</li>
            <li>🤝 Customer-Centric Approach</li>
            <li>🌍 Sustainability and Responsibility</li>
            <li>💼 Integrity and Transparency</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="text-gray-400 space-y-2">
            <li>📍 1234 Innovation Drive, Tech City</li>
            <li>📧 contact@yourcompany.com</li>
            <li>📞 +1 (800) 123-4567</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AboutUs;
