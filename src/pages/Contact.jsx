import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.7727428476971!2d72.82599008861193!3d19.127585345521908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61fe8d8a6cd%3A0x7fa5afb6a1348ffe!2sManish%20Nagar%2C%20Four%20Bungalows%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1683403107782!5m2!1sen!2sin"
                className="border-0 w-100"
                style={{ borderRadius: "10px" }}
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile-Number"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control w-100"
                        name=""
                        id=""
                        placeholder="Comments"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4"> Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="m-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5 " />
                        <address className="m-0">
                          Hno: 301 ,Besa,Manish Nagar,Nagpur,Maharashtra
                        </address>
                      </li>
                      <li className="m-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+91 8264954234">+91 8264954234</a>
                      </li>
                      <li className="m-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:akanshbende29@gmail.com">
                          akanshbende29@gmail.com
                        </a>
                      </li>
                      <li className="m-3 d-flex gap-15 align-items-center">
                        <AiOutlineInfoCircle className="fs-5" />
                        <p className="m-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
