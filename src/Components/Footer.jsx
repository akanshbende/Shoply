import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFillSendFill,
} from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <BsFillSendFill className="text-white fs-3 " />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Email Address"
                  aria-label="Enter Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white lh-2 fs-6">
                  Hno : 247 IT Park,
                  <br /> Bajaj Nagar, Nagpur
                  <br />
                  Pincode: 440032
                </address>
                <a
                  href="tel:+91 3543848844"
                  className="mt-3 d-block mb-1 text-white text-decoration-none "
                >
                  +91 3543848844
                </a>
                <a
                  href="mailto:akanshbende29@gmail.com"
                  className="mt-2 d-block mb-0 text-white text-decoration-none "
                >
                  akanshbende29@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <Link className="text-white" href="#">
                    <BsInstagram className=" fs-5" />
                  </Link>
                  <Link className="text-white" href="#">
                    <BsGithub className=" fs-5" />
                  </Link>
                  <Link className="text-white" href="#">
                    <BsLinkedin className=" fs-5" />
                  </Link>
                  <Link className="text-white" href="#">
                    <BsYoutube className=" fs-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Refund Policy
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Tablets
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Shipping Policy
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Terms & Conditions
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  About Us
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Faq
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Laptops
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Headphones
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Tablets
                </Link>
                <Link
                  className="text-white py-2 mb-1 text-decoration-none"
                  href="#"
                >
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}; Powered by Akansh Bende
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
