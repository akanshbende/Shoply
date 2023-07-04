import React from "react";
import { Link } from "react-router-dom";
function BlogCard(props) {
  const { id, title, description, date, image } = props;
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img
            className="img-fluid w-100"
            src="/blog-1.jpg
                "
            alt="blog"
          />
        </div>
        <div className="blog-content">
          <p className="date">4 May 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc ">
            {/* text-overflow: ellipsis */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            ratione ducimus omnis cum cumque explicabo ullam eius obcaecati
            repellat a laboriosam est, non nemo minus facere illo voluptatibus
            pariatur quam.
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
