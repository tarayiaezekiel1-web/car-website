import React from "react";

import newHouse from "../../assets/newHouse.jpg"
// Props: image, title, subtitle, buttonText, buttonLink
const Heros = ({ image, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${newHouse})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        textAlign: "center",
        padding: "0 1rem"
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>{title}</h1>
      <p style={{ maxWidth: "600px", margin: "1rem auto" }}>{subtitle}</p>
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "1rem"
          }}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Heros;