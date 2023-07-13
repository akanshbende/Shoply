import React from "react";
import { Link } from "react-router-dom";
function BlogCard(props) {
  const { id, title, description, date, image } = props;
  return (
    <>
      <div
        className="blog-card d-flex flex-wrap justify-condent-between "
        id={id}
      >
        <div className="card-image">
          <img className="img-fluid " src={image} alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">{date}</p>
          <h5
            className="title"
            style={{
              lineHeight: "1.5em",
              height: "3em",
              overflow: "hidden",
            }}
          >
            {title}
          </h5>
          <p
            className="desc "
            style={{
              lineHeight: "1.5em",
              height: "3em",
              overflow: "hidden",
            }}
          >
            {/* text-overflow: ellipsis */}
            {description}
          </p>
          <Link className="button" to="/blog/:id">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
