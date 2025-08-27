import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/dhruvin-css.css";

const testimonials = [
  {
    text: "I love my new kitchen, it’s gorgeous! ReDesign Hub just made everything so simple. I was able to find the most responsive construction team I have dealt with.",
    name: "Maria. P",
    location: "Florida",
  },
  {
    text: "5 stars all the way. Specially on the sourcing, service and the people you recommended. But most importantly the follow up at every step of the project.",
    name: "Marc and Claire",
    location: "Florida",
  },
  {
    text: "It was incredible, so easy to use and such great people! Thank you guys for everything.",
    name: "Michelle. L",
    location: "California",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 20, // optional: small spacing
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 15,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const TestimonialCarousel = () => {
  return (
    <section className="py-5 TestimonialCorousel">
      <div className="custom_container">
        <div className="text-center mb-2">
          <h2 className="section-title mb-5">Loved By Our Customers</h2>
        </div>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows={false}
          showDots
          itemClass="py-5 px-3" // small horizontal padding instead of 12px
          className="testimonial-carousel"
        >
          {testimonials.map((t, i) => (
            <div className="testimonial-card shadow-lg" key={i}>
              <div className="quote-icon text-center">❞</div>
              <p className="testimonial-text">{t.text}</p>
              <hr className="divider" />
              <h4 className="testimonial-name mb-2">{t.name}</h4>
              <p className="testimonial-location">{t.location}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
