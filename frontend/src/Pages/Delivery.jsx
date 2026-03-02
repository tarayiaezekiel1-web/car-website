import React from "react";
import { FaLightbulb, FaTools, FaUsers, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const Delivery = () => {
  const steps = [
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: "Planning & Design",
      description: "Every project starts with thorough planning and innovative design solutions."
    },
    {
      icon: <FaTools className="text-blue-500 text-4xl" />,
      title: "Quality Materials",
      description: "We use only the best materials to ensure durability and excellence."
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: "Expert Team",
      description: "Our skilled engineers and technicians execute every project flawlessly."
    },
    {
      icon: <FaCheckCircle className="text-purple-500 text-4xl" />,
      title: "Execution",
      description: "Projects are delivered on time with precision and attention to detail."
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-4xl" />,
      title: "Safety & Inspection",
      description: "We conduct rigorous safety and quality checks for every task."
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          How We Deliver Quality Work
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From planning to execution, BuildRight ensures every project is delivered efficiently,
          safely, and to the highest standards.
        </p>
      </div>

      {/* Steps / Process */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded flex flex-col items-center text-center space-y-4">
            {step.icon}
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to See Our Work?</h2>
        <p className="text-gray-600 mb-6">
          Explore our projects and discover the BuildRight difference.
        </p>
        <a
          href="/construction/projects"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Delivery;