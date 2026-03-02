import React from "react";
import { FaCar, FaBuilding, FaCheckCircle, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Team from "../assets/Team.jpg"
import Company from "../assets/Company.jpg"

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About BuildRight
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          BuildRight is a company dedicated to building the future—both on the
          roads with quality cars and on the ground with innovative construction
          projects. Our mission is to deliver excellence in every project we touch.
        </p>
      </div>

      {/* Our Story / History */}
      <div className="md:flex md:gap-12 items-center">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2020, BuildRight has grown into a trusted leader in both
            automotive and construction industries. We’ve completed over 50
            construction projects and sold thousands of cars, making an impact in
            communities across Kenya.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={Company}
            alt="Our Company"
            className="w-full rounded shadow-lg"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="md:flex md:gap-12 items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <img
            src={Team} // replace with your image
            alt="Team Work"
            className="w-full rounded shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4 order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-gray-800">Mission & Vision</h2>
          <p className="text-gray-600">
            <strong>Mission:</strong> To provide high-quality vehicles and
            world-class construction services while improving communities and
            building lasting value.
          </p>
          <p className="text-gray-600">
            <strong>Vision:</strong> To be a trusted leader in both automotive
            and construction industries across the region.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 p-6 bg-white shadow-md rounded">
            <FaCar className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Cars</h3>
              <p className="text-gray-600">
                Sales of new and second-hand cars, vehicle maintenance, and
                connecting clients to financing options. Ensuring quality
                vehicles for every client.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white shadow-md rounded">
            <FaBuilding className="text-green-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Construction</h3>
              <p className="text-gray-600">
                Residential, commercial, and industrial projects. Project
                management, sustainable building solutions, and high-quality
                work delivered on time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white shadow-md rounded">
            <FaCheckCircle className="text-blue-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold text-gray-800 mb-2">Integrity</h4>
            <p className="text-gray-600 text-sm">
              We deliver honestly and transparently in every project.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <FaUsers className="text-green-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold text-gray-800 mb-2">Community</h4>
            <p className="text-gray-600 text-sm">
              Making a positive impact in every area we operate.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <FaCheckCircle className="text-yellow-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
            <p className="text-gray-600 text-sm">
              Pushing boundaries in construction and automotive solutions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <FaCheckCircle className="text-red-500 text-3xl mx-auto mb-4" />
            <h4 className="font-semibold text-gray-800 mb-2">Quality</h4>
            <p className="text-gray-600 text-sm">
              Excellence in every car we sell and project we build.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements / Impact */}
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600">Cars Sold Monthly</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600">50+</h3>
            <p className="text-gray-600">Construction Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-600">10,000+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to work with us?
        </h2>
        <div className="flex justify-center gap-6">
          <Link
            to="/collections/all"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            View Cars
          </Link>
          <Link
            to="/construction/projects"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;