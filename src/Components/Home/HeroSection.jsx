import React from "react";
import "../../assets/dhruvin-css.css";
import "../../assets/aditya-css.css";

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="custom_container text-center">
        <h1 className="hero-title mb-4">
          Find pros or showrooms near you for <br />
          any design &amp; construction project.
        </h1>

        {/* Search Box Placeholder */}
        <div className="search-box mx-auto" aria-label="Search bar">
          {/* You can insert your input + button here */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
