/*
const ConstructionProjects=()=>{
    return(
        <div>
            <h1>we build the places that move the world</h1>
            <p>Buildings,bridges,airport, railways- weve built just aboutanything win every kind of place ,often in ways never
                attempted before. No matter the project, we apply every bit of our collective expirience and ingenuity to everything that
                we do.
            </p>
            <div>
                {/*we include maybe one image here
                or maybe we include the cards of all our projects here the image and the description of the project including the country the city and other details you can think of
                
            </div>
        </div>
    )
}
export default ConstructionProjects;
*/

import React from "react";
import { Link } from "react-router-dom";
import newHouse from "../assets/newHouse.jpg"
import House1 from "../assets/House1.jpg"
import House2 from "../assets/House2.jpg"
import House3 from "../assets/House3.jpg"
import House4 from "../assets/House4.jpg"
import House5 from "../assets/House5.jpg"

// Sample projects data
const projects = [
  {
    id: 1,
    name: "Nairobi Office Complex",
    location: "Nairobi, Kenya",
    type: "Commercial",
    year: "2025",
    img: newHouse,
    description:
      "A modern office building combining sustainability and smart design for future-ready businesses.",
  },
  {
    id: 2,
    name: "Luxury Apartments",
    location: "Naivasha, Kenya",
    type: "Residential",
    year: "2024",
    img: House1,
    description:
      "Elegant residential apartments with modern facilities and scenic views.",
  },
  {
    id: 3,
    name: "Mombasa Bridge Expansion",
    location: "Mombasa, Kenya",
    type: "Infrastructure",
    year: "2023",
    img: House2,
    description:
      "A vital bridge expansion project improving connectivity and reducing traffic congestion.",
  },
   {
    id: 4,
    name: "Nakuru Appartment",
    location: "Nakuru, Kenya",
    type: "Residential",
    year: "2025",
    img: House3,
    description:
      "A modern office building combining sustainability and smart design for future-ready businesses.",
  },
   {
    id: 5,
    name: "kitengela mall",
    location: "Kitengela, Kenya",
    type: "Business",
    year: "2025",
    img: House4,
    description:
      "A modern office building combining sustainability and smart design for future-ready businesses.",
  },
   {
    id: 6,
    name: "Kitui School",
    location: "Kitui, Kenya",
    type: "Educational",
    year: "2025",
    img: House5,
    description:
      "A modern office building combining sustainability and smart design for future-ready businesses.",
  },
];

const ConstructionProjects = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          We Build the Places That Move the World
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Buildings, bridges, airports, railways – we’ve built just about anything in every kind of place, often in ways never attempted before. No matter the project, we apply every bit of our collective experience and ingenuity to everything we do.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.location}</p>
              <p className="text-sm text-gray-500">{project.type} | {project.year}</p>
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              <Link
                to={`/construction/project/${project.id}`}
                className="mt-3 inline-block text-blue-600 hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Want to start your project with us?
        </h2>
        <Link
          to="/construction/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ConstructionProjects;


