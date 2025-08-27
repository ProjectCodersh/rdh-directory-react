import React from "react";
import parse from "html-react-parser"; // npm install html-react-parser
import "../../assets/dhruvin-css.css";
import "../../assets/aditya-css.css";

const data = [
  {
    id: "1",
    iconClassname: "bi bi-share",
    title: "Why You Should Choose ReDesignHub",
    para: "From world-class vendors to top-notch showrooms, our platform helps you to get the perfect match for every bit of your project. You can quickly compare different vendors and showrooms and choose what works perfectly for you.",
  },
  {
    id: "2",
    iconClassname: "bi bi-people",
    title: "Why You Can Trust Us",
    para: "All vendors have been investigated and verified by our concierge for quality and reliability. They only get the verified badge after they meet set standards for pricing, customer service, and product quality. And they must be consistent in their service delivery and maintain a ReScore over 50 points.",
  },
  {
    id: "3",
    iconClassname: "bi bi-file-earmark-text",
    title: "Choosing The Right Store Is As Simple As 1,2,3",
    para: "If you’re not sure about the vendor you should choose or the next step to take, feel free to get in touch with our concierge team. They’re always available to guide you every step of the way!",
  },
];

// Child Card Component
function HowItWorksCard({ iconClassname, title, para }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="how-card text-center h-100">
        <i
          className={`${iconClassname} how-icon mb-4`}
          style={{ color: "#3873cd" }}
          aria-hidden="true"
        ></i>
        <h4 className="mb-4">{parse(title)}</h4>
        <p style={{ fontSize: "14px" }}>{para}</p>
      </div>
    </div>
  );
}

function HowItWorks_2() {
  return (
    <section className="how-it-works pb-5">
      <div className="custom_container">
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

export default HowItWorks_2;
