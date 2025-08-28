import React from "react";
import horizontalFrame from "/assets/img/frame.png";

function FindPerfectStore() {
  return (
    <section className="findperfectstore pt-5">
      <div className="custom_container">
        <div className="row align-items-center justify-content-between">
          {/* Left Content */}
          <div className="col-lg-8">
            <h2 className="section-title">Find the Perfect Store</h2>
            <p className="find-para mt-3">
              We are your one-stop service provider for top-notch designs and
              construction. Find the right store or the right service provider
              to work with. Whether it’s remodeling, improvement, building from
              scratch, or maintenance, we have what it takes to put a smile on
              your face!
            </p>
            <p className="tagline fst-italic">You dream it, we build it!</p>
          </div>

          {/* Right Content */}
          <div className="col-lg-4 text-center mt-4 mt-lg-0">
            <a href="#" className="btn btn-blue">
              All Listings <span className="ms-2">&rarr;</span>
            </a>
          </div>

          {/* Decorative Image */}
          <div className="col-12 text-center mt-4">
            <img
              src={horizontalFrame}
              alt="frame decoration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindPerfectStore;
