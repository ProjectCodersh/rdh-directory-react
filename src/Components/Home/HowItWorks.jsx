import React from "react";
import parse from "html-react-parser"; // npm install html-react-parser
import "../../assets/dhruvin-css.css";

const data = [
  {
    id: "1",
    iconClassname: "bi bi-share",
    title: "Find the perfect <br /> store or pro",
    para: "Get access to thousands of stores in each area. Whether you’re looking for the perfect materials to remodel your kitchen, bathroom, or want to refresh your living room with a new set of furniture, we’ll connect you with a reliable vendor or service provider in your area.",
  },
  {
    id: "2",
    iconClassname: "bi bi-people",
    title: "Search, Compare, <br /> and Trust",
    para: "From world-class vendors to top-notch showrooms, our platform helps you to get the perfect match for every bit of your project. Quickly compare different vendors and showrooms and choose what works perfectly for you.",
  },
  {
    id: "3",
    iconClassname: "bi bi-file-earmark-text",
    title: "Get help from a <br /> concierge",
    para: "Reach out to one of our concierges and let us know more about your building specifications. We’ll guide you to make the right construction choices for your project and bring your design ideas to life.",
  },
];

// Child Card Component
function HowItWorksCard({ iconClassname, title, para }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="how-card text-center p-4 h-100">
        <i
          className={`${iconClassname} mb-3`}
          style={{ fontSize: "2rem", color: "#2a65b2" }}
        ></i>
        <h5 className="mb-3">{parse(title)}</h5>
        <p>{para}</p>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works-section py-5">
      <div className="custom_container">
        <div className="text-center mb-5">
          <h2 className="section-title">How it Works</h2>
        </div>
        <div className="row g-4">
          {data.map((item) => (
            <HowItWorksCard
              key={item.id}
              iconClassname={item.iconClassname}
              title={item.title}
              para={item.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
