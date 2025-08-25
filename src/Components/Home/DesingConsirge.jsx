import React from "react";
import "../../assets/dhruvin-css.css";
function DesignConcierge() {
  return (
    <section className="hero-design-concierge py-5">
      <div className="custom_container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-8 order-2 order-lg-1">
            <h1 className="hero-kicker">
              <span>Design Concierge</span> made
            </h1>
            <h1 className="hero-title mb-3">to simplify your life</h1>

            <p className="hero-subtitle mt-4">
              Save valuable time and money by hiring a Design Concierge today.
            </p>

            <p className="hero-price mt-3">Starting at $49/month</p>

            <a href="#learn-more" className="btn btn-cta mt-4">
              Learn More
            </a>
          </div>

          {/* Right Image / Illustration */}
          <div className="col-lg-4 order-1 order-lg-2 text-center text-lg-end">
            <div className="hero-illustration" aria-hidden="true">
              {/* Example: Place your image here */}
              {/* <img src="/images/design-concierge.png" alt="Design Concierge" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignConcierge;
