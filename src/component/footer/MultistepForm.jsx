import React, { useState } from "react";
import Modal from "react-modal";
import SuccessImg from "../../assets/images/switch-profile-success.gif";

const MultiStepForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0); // Current step of the form
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "",
    firstName: "",
    lastName: "",
    email: "",
    currentClass: "",
    studyCenter: "",
    agreeTerms: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Define handleChange function
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Define handleNext function
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1); // Move to the next step
    } else {
      onClose(); // Close the modal after form submission
    }
  };

  // Define handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose(); // Close the modal after form submission
  };

  const steps = [
    {
      title: "Step 1",
      content: (
        <>
          <h3>Get Started</h3>
          <center>
            <p>Enter your 10 digit mobile number below</p>
          </center>
          <div className="wrapper">
            <h6>
              Mobile Number<sup style={{ color: "red" }}>*</sup>
            </h6>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <div className="remember-pass" style={{ marginTop: 0 }}>
              <input
                type="checkbox"
                id="htm2"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="htm2">
                I authorise FIITJEE to Connect, send information time to time
                via SMS, Call/ Robocall (Automated Call), WhatsApp or E-mail and
                I agree to FIITJEE’S Privacy Policy (Click link on Privacy
                Policy to Read).
              </label>
            </div>
            <button
              type="button"
              className="p-bg-color hvr-trim"
              onClick={handleNext}
            >
              Send OTP
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Step 2",
      content: (
        <>
          <h3>Verify your Mobile Number</h3>
          <center>
            <p>Enter the OTP sent +91-8777263893</p>
          </center>
          <div className="wrapper">
            <div className="otp-field mb-4">
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
            <button
              type="button"
              className="p-bg-color hvr-trim"
              onClick={handleNext}
            >
              Verify
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Step 3",
      content: (
        <>
          <h3 style={{marginTop:"6%",textAlign:"center"}}>Please Fill the below details.</h3>
          <div className="wrapper">
            <div className="row">
              <div className="col-md-6">
                <h6>
                  Aspirant’s First Name<sup style={{ color: "red" }}>*</sup>
                </h6>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <h6>
                  Aspirant’s Last Name<sup style={{ color: "red" }}>*</sup>
                </h6>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <h6>Email ID</h6>
                <input
                  type="text"
                  placeholder="Enter your Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <h6>
                  Currently in Class (Academic Year 2023-24)
                  <sup style={{ color: "red" }}>*</sup>
                </h6>
                <select
                  className="show-tick form-control"
                  name="currentClass"
                  value={formData.currentClass}
                  onChange={handleChange}
                >
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className="col-md-12" style={{ marginTop: "15px" }}>
                <h6>
                  Preferred Study Center<sup style={{ color: "red" }}>*</sup>
                </h6>
                <select
                  className="show-tick form-control"
                  name="studyCenter"
                  value={formData.studyCenter}
                  onChange={handleChange}
                >
                  <option>Andheri</option>
                  <option>Kandivali</option>
                  <option>Thane</option>
                  <option>Navi Mumbai</option>
                  <option>Chembur</option>
                </select>
              </div>
              {/* <div className="col-md-12">
                <div className="remember-pass">
                  <input
                    type="checkbox"
                    id="htm2"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="htm2">
                    I authorise FIITJEE to Connect, send information time to
                    time via SMS, Call/ Robocall (Automated Call), WhatsApp or
                    E-mail and I agree to FIITJEE’S Privacy Policy (Click link
                    on Privacy Policy to Read).
                  </label>
                </div>
              </div> */}
            </div>
            <button
              type="button"
              className="p-bg-color hvr-trim"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Step 4",
      content: (
        <>
          <div className="wrapper">
            <center>
              <img src={SuccessImg} style={{ width: 200 }} />
              <h6>your message have been successfully submitted</h6>
            </center>
            <br />
            <button
              type="button"
              className="p-bg-color hvr-trim"
              data-dismiss="modal"
              aria-hidden="true"
              onClick={handleNext}
            >
              Ok
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <Modal
      className="query-modal fade-in-up"
      isOpen={isOpen} // Pass isOpen prop to control modal visibility
      onRequestClose={onClose} // Close modal on outside click or Esc key
      overlayClassName="modal-overlay" // Custom class for overlay styling
      style={{
        overlay: {
          zIndex: 1000,
          display: "flex",
          alignItems: "center", // Center align the modal vertically
          justifyContent: "center",
          backgroundColor: "orange", // Semi-transparent black overlay
        },
        content: {
          position: "fixed",
          maxWidth: "100%",
          width: "900px",
          height: `${step === 2 ? "100%" : "90%"}`,
          maxHeight: "100%",
          overflowY: "auto",
          // overflow:"hidden",
          inset: "50% 40px 40px 50%",
          border: "1px solid rgb(204, 204, 204)",
          background: "rgb(255, 255, 255)",
          borderRadius: "8px",
          outline: "none",
          padding: "20px",
          transform: "translate(-50%, -50%)",
          zIndex: "12000",
          top: "50%",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 20px",
        },
        
      }}
    >
      {/* <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body"> */}
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-hidden="true"
        onClick={onClose}
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        style={{ marginTop: "3%", marginRight: "6%", fontSize: "40px",color: isHovered ? "red" : "black" }}
      >
        &times;
      </button>
      <form className="popup_modal">{steps[step].content}</form>
      {/* </div>
        </div>
      </div> */}
    </Modal>
  );
};

export default MultiStepForm;
