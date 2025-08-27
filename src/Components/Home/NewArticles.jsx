import React from "react";
import "../../assets/dhruvin-css.css"; // Custom styles

const articles = [
  {
    tags: ["Commercial", "Furniture", "Popular Content", "project"],
    title: "Pizzette – Commercial – Miami Beach",
    date: "December 24, 2020",
    tagColor: "yellow",
  },
  {
    tags: ["Popular Content", "project"],
    title: "135 Palm – Miami",
    date: "November 17, 2020",
    tagColor: "green",
  },
  {
    tags: ["Interior Design", "Popular Content", "project"],
    title: "Plymouth project – Los Angeles",
    date: "December 24, 2020",
    tagColor: "red",
  },
];

const NewArticles = () => {
  return (
    <section
      className="new-articles py-5"
      style={{ backgroundColor: "#5c82b9" }}
    >
      <div className="custom_container">
        <h2
          className="text-white mb-5 section-title"
          style={{ fontWeight: "600" }}
        >
          New Articles
        </h2>

        <div className="row">
          {articles.map((article, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <article className="card p-3 shadow-sm">
                <div className="imgbox">
                  <img
                    src="https://placehold.co/700x500"
                    alt={`Thumbnail for ${article.title}`}
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 mb-2 d-flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <a href="" style={{ textDecoration: "none" }}>
                      <span key={idx} className={`tag tag-${article.tagColor}`}>
                        {tag}
                      </span>
                    </a>
                  ))}
                </div>
                <a href="" style={{ textDecoration: "none" }}>
                  <h5 className="mt-2 fw-normal text-dark">{article.title}</h5>
                </a>
                <time className="text-muted small">{article.date}</time>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArticles;
