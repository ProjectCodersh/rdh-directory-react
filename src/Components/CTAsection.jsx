import React from "react";

function CTAsection() {
  return (
    <section className="cta-section">
      <div className="custom_container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        <h2 className="cta-title mb-3 mb-md-0">Do you have any Questions ?</h2>
        <a href="/contact" className="cta-btn">
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
}

export default CTAsection;
