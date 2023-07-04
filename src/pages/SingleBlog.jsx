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
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  // console.log(productState);
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
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title} </h3>
              <img
                src={blogState?.images[0].url ? blogState?.images[0].url : blog}
                alt="blog"
                className="img-fluid w-100 my-4"
              />
              <p>{blogState?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleBlog;
