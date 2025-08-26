import React from "react";
import "../../assets/aditya-css.css";

function DesignConcierge() {
  return (
    <section className="design-concierge">
      <div className="custom_container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="kicker mb-3">
              <span>Design Concierge</span> made
            </h2>
            <h2 className="kicker mb-4">to simplify your life</h2>
            <p className="subtitle mb-4">
              Save valuable time and money by hiring a Design Concierge today.
            </p>
            <p className="subtitle">Starting at $49/month</p>

            <a href="#learn-more" className="cta-btn mt-3">
              Learn More
            </a>
          </div>

          {/* Right Illustration */}
          <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-end">
            <div
              className="illustration d-none d-lg-block"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignConcierge;
