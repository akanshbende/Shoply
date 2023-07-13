import React from "react";
import { Helmet } from "react-helmet";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import BlogCard from "../Components/BlogCard";
import Container from "../Components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment/moment";

{
  /* d-flex align-items-center justify-content-center */
}
function Blogs() {
  const blogState = useSelector((state) => state?.blog?.blog);
  console.log(blogState);
  const dispatch = useDispatch();
  useEffect(() => {
    getblogs();
  }, []);
  const getblogs = () => {
    dispatch(getAllBlogs());
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className=" row">
          <div className="col-xxl-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                  <li>General</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-9">
            <div className="row d-flex align-items-center  ">
              {blogState &&
                blogState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-xxl-4 col-xl-4 col-md-6 col-sm-6   col-12 mb-3"
                    >
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images}
                        date={moment(item?.created_At).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      />
                      {console.log(item?.images)}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Blogs;
