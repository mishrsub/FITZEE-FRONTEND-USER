import React, { useState } from "react";

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(1); // Current step of the form
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (step < 4) {
      setStep(step + 1); // Move to the next step
    } else {
      onClose(); // Close the modal after form submission
    }
  };

  return (
    <div className="modal fade signInModal theme-modal-box" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={onClose}>&times;</button>
            <form onSubmit={handleSubmit}>
              <div id="Menu1" style={{ display: step === 1 ? "block" : "none" }}>
                <h3>Get Started</h3>
                <center><p>Enter your 10 digit mobile number below</p></center>
                <div className="wrapper">
                  <h6>Mobile Number<sup style={{ color: "red" }}>*</sup></h6>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                  <button type="submit" className="p-bg-color hvr-trim">Send OTP</button>
                </div>
              </div>
              {/* Include other steps similarly */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
