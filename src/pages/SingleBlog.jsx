import React, { useEffect } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import BlogCard from "../Components/BlogCard";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../Components/Container";
import blog from "../../public/blog-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";
function SingleBlog() {
  const blogState = useSelector((state) => state?.blog.blog);
  console.log(blogState);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getblog();
  }, []);
  const getblog = () => {
    dispatch(getABlog(getBlogId));
  };
  return (
    <>
      {/* Tab heading */}
      <Meta title={blogState?.title} />
      {/* Home / Sign Up*/}
      <BreadCrumb title={blogState?.title} />
      <Container className="blog-wrapper home-wrapper-2 py-5">
        <div className=" row">
          <div className="col-12">
            {blogState &&
              blogState?.map((item, index) => {
                return (
                  <div key={index} className="single-blog-card ">
                    <Link
                      to="/blogs"
                      className="d-flex align-items-center gap-10"
                    >
                      <HiOutlineArrowLeft /> Go back to Blogs
                    </Link>
                    <h3 className="title d-flex align-items-center text-align-center justify-content-center ">
                      {item?.title}{" "}
                    </h3>

                    <p className="m-5">
                      <img
                        // src={blogState?.images[0].url ? blogState?.images[0].url : blog}
                        src={item?.images}
                        alt="blog"
                        className="img-fluid rounded-3 "
                        style={{ float: "left", marginRight: "20px" }}
                      />
                      {item?.description}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleBlog;
