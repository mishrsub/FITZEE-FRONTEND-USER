import React, { useState } from "react";
import SuccessImg from "../assets/images/switch-profile-success.gif";
import { Link } from "react-router-dom";

const RegistrationBanner = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    purpose: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4>Get Started</h4>
            <span>Enter your 10 digit mobile number below</span>
            <h6>
              Mobile Number<sup style={{ color: "red" }}>*</sup>
            </h6>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
              name="mobile"
              value={contact.mobile}
            />
            <div className="remember-pass">
              <input type="checkbox" id="html" />
              <label for="html">
                I authorise FIITJEE to Connect, send information time to time
                via SMS, Call/ Robocall (Automated Call), WhatsApp or E-mail and
                I agree to FIITJEE’S Privacy Policy (Click link on Privacy
                Policy to Read).
              </label>
            </div>
            <button
              type="button"
              className="tran3s hvr-trim"
              onClick={() => setStep(2)}
            >
              Submit
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h4>Verify your Mobile Number</h4>
            <span>Enter the OTP sent +91-8777263893</span>
            <div className="otp-field mb-4">
              {[...Array(6)].map((_, index) => (
                <input key={index} type="number" />
              ))}
            </div>
            <button
              type="button"
              className="tran3s hvr-trim"
              onClick={() => setStep(3)}
            >
              Verify
            </button>
          </>
        );
      case 3:
        return (
          <>
            <h4>Quick Registration Form (Please fill your details below)</h4>
            <br />
            <h6>
              Aspirant’s First Name
              <sup style={{ color: "red" }}>*</sup>
            </h6>
            <input type="text" placeholder="Enter your first name" />
            <h6>
              Aspirant’s Last Name
              <sup style={{ color: "red" }}>*</sup>
            </h6>
            <input type="text" placeholder="Enter your last name" />
            <h6>
              Email ID<sup style={{ color: "red" }}>*</sup>
            </h6>
            <input type="email" placeholder="Enter your Email ID" />
            <h6>
              Currently in Class (Academic Year 2023-24)
              <sup style={{ color: "red" }}>*</sup>
            </h6>
            <select className="show-tick form-control">
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <br />
            <h6>
              Preferred Study Center
              <sup style={{ color: "red" }}>*</sup>
            </h6>
            <select className="show-tick form-control">
              <option>Andheri</option>
              <option>Kandivali</option>
              <option>Thane</option>
              <option>Navi Mumbai</option>
              <option>Chembur</option>
            </select>
            <br />

            {/* Other form fields go here */}
            <button
              type="button"
              className="tran3s hvr-trim"
              onClick={() => setStep(4)}
            >
              Submit
            </button>
          </>
        );
      case 4:
        return (
          <div>
            <center>
              <img src={SuccessImg} style={{ width: 200 }} />
              <h6>your message have been successfully submitted</h6>
            </center>
            <br />
            <Link to="/" className="tran3s hvr-trim">
              Ok
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="registration-banner">
      <div className="opacity">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xs-12">
              <div className="registration-form">
                <form onSubmit={handleSubmit}>
                  <h2>To Know More!!</h2>
                  <p>Get in touch with one of our experts.</p>
                  <div className="form-wrapper">{renderStepContent()}</div>
                </form>
              </div>
            </div>
            <div className="col-md-7 col-xs-12">
              <div className="text-wrapper">
                <h2>
                  How Can I be a part of
                  <br />
                  <span className="p-color">FIITJEE, Mumbai?</span>
                </h2>
                <div>
                  <ol className="step">
                    <li className="wow delay1 fadeInUp">
                      <div className="title">Registration</div>
                      <div className="descr">
                        Register for a FIITJEE Admission test
                      </div>
                    </li>
                    <li className="wow delay2 fadeInUp">
                      <div className="title">Appearance</div>
                      <div className="descr">
                        Give the test with the best of your abilities
                      </div>
                    </li>
                    <li className="wow delay3 fadeInUp">
                      <div className="title">Selection</div>
                      <div className="descr">
                        Get your test analysed by our experts
                      </div>
                    </li>
                    <li className="wow delay4 fadeInUp">
                      <div className="title">Enrolment</div>
                      <div className="descr">
                        Complete your admission formalities
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBanner;
