import React from "react";
import "../../assets/aditya-css.css"; // custom css

function WhyRVUnique() {
  return (
    <section className="why-unique py-5">
      <div className="custom_container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Why are we unique</h2>
        </div>

        {/* Row 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0  order-2 order-md-1">
            <h4>We’ll help you find a perfect store</h4>
            <p>
              With ReDesignHub, you get access to thousands of stores in each
              area. Whether you’re looking for the perfect materials to remodel
              your kitchen, bathroom, or want to refresh your living room with a
              new set of furniture, we’ll connect you with a reliable vendor in
              your area.
            </p>
          </div>
          <div className="col-md-6 text-center  order-1 order-md-2">
            <img
              // src="https://picsum.photos/560/340"
              src="https://placehold.co/560x340"
              alt="Perfect store"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
            <h4>Search, Compare, and Trust</h4>
            <p>
              At ReDesignHub, we endeavor to make every project stand out.
              That’s why we bring on board VERIFIED vendors investigated by our
              team of concierge for quality services and reliability. We are
              here to ensure you get what you need to make your dream project a
              reality! Look For VERIFIED BADGES.
            </p>
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <img
              // src="https://picsum.photos/560/340"
              src="https://placehold.co/560x340"
              alt="Trust vendors"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyRVUnique;
