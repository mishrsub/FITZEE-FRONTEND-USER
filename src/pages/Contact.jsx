import React, { useState } from "react";
import { AddContact } from "../react-query/api/Contact";
import { Bounce, toast } from "react-toastify";
import Loading from "../UI/Loading";

const Contact = () => {
  const [showAllAddresses, setShowAllAddresses] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    type:"contact"
  });

  const contactMut = AddContact();

  const toggleAddresses = () => {
    setShowAllAddresses(!showAllAddresses);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await contactMut.mutateAsync({ ...contact });

      // If the mutation is successful
      setContact({
        name: "",
        email: "",
        message: "",
        mobile: "",
      });

      toast.success(`✔ Enquiry successful!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      // If there is an error
      if (error.response && error.response.data.status === 400) {
        setContact({
          name: "",
          email: "",
          message: "",
          mobile: "",
          type: "contact",
        });

        toast.error(`❌ ${error.response.data.error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        console.error("Error submitting contact:", error);
      }
    } finally {
      // Stop the loader regardless of success or failure
      contactMut.reset();
    }
  };

  return (
    <div className="container contact-us-page pb-100">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 wow fadeInLeft">
          <div className="contact-us-form">
            <h2>Raise your Query here</h2>
            <form className="form-validation" autoComplete="off">
              <div className="row">
                <div className="col-xs-12">
                  <div className="single-input">
                    <input
                      type="text"
                      placeholder="You Name*"
                      name="name"
                      value={contact.name}
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                      required
                    />
                  </div>{" "}
                  {/* /.single-input */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-sm-6 col-xs-12">
                  <div className="single-input">
                    <input
                      type="email"
                      placeholder="Enter Email here*"
                      name="email"
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                      required
                    />
                  </div>{" "}
                  {/* /.single-input */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-sm-6 col-xs-12">
                  <div className="single-input">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="mobile"
                      value={contact.mobile}
                      onChange={(e) =>
                        setContact({ ...contact, mobile: e.target.value })
                      }
                      required
                    />
                  </div>{" "}
                  {/* /.single-input */}
                </div>{" "}
                {/* /.col- */}
                <div className="col-xs-12">
                  <div className="single-input">
                    <textarea
                      placeholder="Your Message"
                      name="message"
                      defaultValue={""}
                      value={contact.message}
                      onChange={(e) =>
                        setContact({ ...contact, message: e.target.value })
                      }
                      required
                    />
                  </div>{" "}
                  {/* /.single-input */}
                </div>{" "}
                {/* /.col- */}
              </div>{" "}
              {/* /.row */}
              <input
                type="button"
                defaultValue="Send Message"
                className="tran3s p-bg-color"
                onClick={formSubmit}
              />
            </form>
            {/* Contact Form Validation Markup */}
            {/* Contact alert */}
            <div className="alert-wrapper" id="alert-success">
              <div id="success">
                <button className="closeAlert">
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <div className="wrapper">
                  <p>Your message was sent successfully.</p>
                </div>
              </div>
            </div>{" "}
            {/* End of .alert_wrapper */}
            <div className="alert-wrapper" id="alert-error">
              <div id="error">
                <button className="closeAlert">
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <div className="wrapper">
                  <p>Sorry! Something Went Wrong.</p>
                </div>
              </div>
            </div>{" "}
            {/* End of .alert_wrapper */}
          </div>{" "}
          {/* /.contact-us-form */}
        </div>{" "}
        {/* /.col- */}
        <div className="col-md-6 col-sm-12 col-xs-12 wow fadeInRight">
          <div className="contactUs-address">
            <h2>Contact Information</h2>
            <p>
              For any question or query feel free to reach out to us. We are
              always here to help!!
            </p>
            <div className="single-address clearfix">
              <div className="icon float-left">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text float-left">
                <h6>Address</h6>
                <span>
                  {showAllAddresses ? (
                    <>
                      <b>Andheri Center-</b> San Francisco, CA 560 Bush St &amp;
                      20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <b>Kandivali Center-</b> San Francisco, CA 560 Bush St
                      &amp; 20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <b>Thane Center-</b> San Francisco, CA 560 Bush St &amp;
                      20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <b>Navi Mumbai Center-</b> San Francisco, CA 560 Bush St
                      &amp; 20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <b>Chembur Center-</b> San Francisco, CA 560 Bush St &amp;
                      20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <a
                        className="read-more-hide read"
                        href=""
                        onClick={toggleAddresses}
                      >
                        View Less
                      </a>
                    </>
                  ) : (
                    <>
                      <b>Andheri Center-</b> San Francisco, CA 560 Bush St &amp;
                      20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <b>Kandivali Center-</b> San Francisco, CA 560 Bush St
                      &amp; 20th Ave, Apt <br />
                      5 San Francisco, 230909
                      <hr />
                      <a
                        className="read-more-show read"
                        href=""
                        onClick={toggleAddresses}
                      >
                        View All
                      </a>
                    </>
                  )}
                </span>
              </div>
            </div>{" "}
            {/* End of .single-address */}
            <div className="single-address clearfix">
              <div className="icon float-left">
                <i className="flaticon-envelope" />
              </div>
              <div className="text float-left">
                <h6>Email</h6>
                <span>helpdesk@myfiitjee.com</span>
              </div>
            </div>{" "}
            {/* End of .single-address */}
            <div className="single-address clearfix">
              <div className="icon float-left">
                <i className="flaticon-phone-call" />
              </div>
              <div className="text float-left">
                <h6>Phone</h6>
                <span>+91-8080220888</span>
              </div>
            </div>{" "}
            {/* End of .single-address */}
          </div>{" "}
          {/* /.our-address */}
        </div>
      </div>{" "}
      {/* /.row */}
    </div>
  );
};

export default Contact;
