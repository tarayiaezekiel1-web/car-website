import React from "react";
import { FaLeaf, FaUsers, FaHandshake, FaBuilding } from "react-icons/fa";

const Impact = () => {
  const impactAreas = [
    {
      icon: <FaLeaf className="text-green-500 text-4xl" />,
      title: "Environment",
      description:
        "We use sustainable building practices and eco-friendly materials to minimize environmental impact.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-4xl" />,
      title: "Community",
      description:
        "Supporting local communities through infrastructure projects and social initiatives.",
    },
    {
      icon: <FaHandshake className="text-yellow-500 text-4xl" />,
      title: "Employment",
      description:
        "Creating jobs and training opportunities in construction and automotive industries.",
    },
    {
      icon: <FaBuilding className="text-purple-500 text-4xl" />,
      title: "Innovation",
      description:
        "Bringing creative solutions to projects and ensuring quality in every task.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Impact to Society
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          BuildRight isn’t just about cars and construction. We are committed to
          making a positive difference in communities, the environment, and the
          industry at large.
        </p>
      </div>

      {/* Impact Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {impactAreas.map((area, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded flex flex-col items-center text-center space-y-4"
          >
            {area.icon}
            <h3 className="text-xl font-semibold text-gray-800">{area.title}</h3>
            <p className="text-gray-600 text-sm">{area.description}</p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-12 mt-4">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600">Cars Sold Monthly</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">50+</h3>
            <p className="text-gray-600">Construction Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600">10,000+</h3>
            <p className="text-gray-600">People Impacted</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Want to Learn More?
        </h2>
        <p className="text-gray-600 mb-6">
          Discover our projects and see how BuildRight is shaping the future.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/construction/projects"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Impact;