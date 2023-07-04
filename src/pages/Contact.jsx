import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import Container from "../Components/Container";
import * as yup from "yup";
import { Formik } from "formik";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  mobile: yup
    .string()
    .default("")
    .nullable()
    .required("Mobile No. is Required"),

  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is Required"),
  comment: yup.string().default("").nullable().required("Comment is Required"),
});

function Contact() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.7727428476971!2d72.82599008861193!3d19.127585345521908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61fe8d8a6cd%3A0x7fa5afb6a1348ffe!2sManish%20Nagar%2C%20Four%20Bungalows%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1683403107782!5m2!1sen!2sin"
              className="border-0 w-100"
              style={{ borderRadius: "10px" }}
              width="600"
              height="450"
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex  flex-wrap  justify-content-between ">
              <div className="w-100">
                <h3 className="contact-title mb-4"> Get In Touch With Us</h3>
                <div className="w-100">
                  <ul className="ps-0 ">
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
              <div className="w-100">
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15 "
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur(`name`)}
                      value={formik.values.name}
                    />
                    <div className="error ms-3">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur(`email`)}
                      value={formik.values.email}
                    />
                    <div className="error ms-3">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile-Number"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur(`mobile`)}
                      value={formik.values.mobile}
                    />
                    <div className="error ms-3">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="form-control w-100"
                      id=""
                      placeholder="Comments"
                      cols="30"
                      rows="4"
                      name="comments"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur(`comment`)}
                      value={formik.values.comment}
                    ></textarea>
                    <div className="error ms-3">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
