/*

import React from "react";
import Heros from "../components/layout/Heros";
 // your image path

const Construction = () => {
return(
    <div>
        <Heros/>
        <h1>
            BuildRight is bulding the future
        </h1>
        <h4>
            careers at BuildRight
        </h4>
        <p>
            Our employees are what makes BuildRight strong . we are one of the largest construction and development companies in the world , and we want to improve society and the future through
            our efforts and experties. Do you want to join our team and be part of the journey?
        </p>
        <p>learn more about careers opportunities at BuildRight</p>

         <h2>some of our latest job vacancies</h2>
<div>
   
    <h6>Assistant Project Manager</h6>
    <p>location:Nakuru</p>
    <p>Application deadline: 3/28/2026</p>
</div>
<div>
    
    <h6>Project Manager</h6>
    <p>location:Naivasha</p>
    <p>Application deadline: 3/28/2026</p>
</div>
<div>

    <h6>Project Control Analyst</h6>
    <p>location:Nairobi</p>
    <p>Application deadline: 3/28/2026</p>
</div>
<div>
    
    <h6>EHS Manager</h6>
    <p>location:Kajiado</p>
    <p>Application deadline: 3/28/2026</p>
</div>

<div>search all jobs</div>

<div>
    <h2>we bilieve that durability is vitally important</h2>
    

    <h5>our approach to achieve durability</h5>
    <p>we focus on five areas that can make the most significant positive
        contribution: health and safety,ethics,green,community,investment,
        and diversity and inclusion.
        
    </p>
</div>
<div>
    
</div>

    </div>
)
};

export default Construction;
*/
import React from "react";
import Heros from "../components/layout/Heros";
import House10 from "../assets/House10.jpg"
import House11 from "../assets/House11.jpg"
// replace with your image path
import { FaMapMarkerAlt, FaCalendarAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Construction = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Heros />

      {/* Intro Section */}
      <section className="text-center px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          BuildRight is building the future
        </h1>
        <h4 className="text-xl md:text-2xl mb-6 text-gray-600">
          Careers at BuildRight
        </h4>
        <p className="mb-4">
          Our employees are what make BuildRight strong. We are one of the
          largest construction and development companies in the world, and we
          want to improve society and the future through our efforts and
          expertise. Do you want to join our team and be part of the journey?
        </p>
        <p className="text-blue-600 font-medium">
          Learn more about career opportunities at BuildRight
        </p>
      </section>

      {/* Job Vacancies */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Some of our latest job vacancies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Job Card */}
          {[
            { title: "Assistant Project Manager", location: "Nakuru", deadline: "3/28/2026" },
            { title: "Project Manager", location: "Naivasha", deadline: "3/28/2026" },
            { title: "Project Control Analyst", location: "Nairobi", deadline: "3/28/2026" },
            { title: "EHS Manager", location: "Kajiado", deadline: "3/28/2026" },
          ].map((job, i) => (
            <div key={i} className="bg-white p-6 shadow rounded hover:shadow-lg transition">
              <h6 className="font-bold text-lg mb-2">{job.title}</h6>
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-600" /> {job.location}</p>
              <p className="flex items-center gap-2"><FaCalendarAlt className="text-blue-600" /> {job.deadline}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
            Search All Jobs
          </button>
        </div>
      </section>

      {/* Durability Section */}
      <section className="px-6 py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          We believe that durability is vitally important
        </h2>
        <img src={House11}
        
          alt="Durability"
          className="w-4/5 mx-auto rounded mb-6 shadow-lg"
        />
        <h5 className="text-xl font-medium mb-4">Our approach to achieve durability</h5>
        <p className="max-w-2xl mx-auto mb-6">
          We focus on five areas that can make the most significant positive
          contribution: health and safety, ethics, green initiatives, community,
          investment, and diversity and inclusion.
        </p>
        <img src={House10}
          
          alt="Our approach"
          className="w-4/5 mx-auto rounded shadow-lg"
        />
      </section>

      {/* Footer / Social Links */}
      <footer className="px-6 py-12 bg-gray-100 text-center">
        <h4 className="text-xl font-semibold mb-4">Follow us on social media</h4>
        <div className="flex justify-center gap-8 text-blue-600">
  {/* WhatsApp */}
  <a
    href="https://wa.me/0794494797"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-1 hover:text-blue-700"
  >
    <FaWhatsapp className="text-3xl" />
    <span className="text-xs">0794494797</span>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/buildright"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-1 hover:text-blue-700"
  >
    <FaFacebookF className="text-3xl" />
    <span className="text-xs">@buildright</span>
  </a>

  {/* Twitter */}
  <a
    href="https://twitter.com/buildingsolutions"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-1 hover:text-blue-700"
  >
    <FaTwitter className="text-3xl" />
    <span className="text-xs">@buildingsolutions</span>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/buildright"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-1 hover:text-blue-700"
  >
    <FaInstagram className="text-3xl" />
    <span className="text-xs">@buildright</span>
  </a>
</div>
      </footer>
    </div>
  );
};

export default Construction;