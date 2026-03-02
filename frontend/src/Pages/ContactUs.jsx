import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Get in Touch with Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you’re interested in our cars, construction projects, or career opportunities,
          we’re here to help. Reach out and we’ll respond as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <FaPhone className="mx-auto text-2xl text-blue-600" />
          <p>+254 794 494 797</p>
        </div>
        <div className="space-y-2">
          <FaEnvelope className="mx-auto text-2xl text-green-600" />
          <p>info@buildright.com</p>
        </div>
        <div className="space-y-2">
          <FaMapMarkerAlt className="mx-auto text-2xl text-red-600" />
          <p>Nakuru, Kenya</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl text-gray-600">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Contact;