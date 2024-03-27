import React, { useState } from "react";
import Modal from "react-modal";
import MultiStepForm from "../component/footer/MultistepForm";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const InstructorBanner = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStartedClick = () => {
    console.log("Handling click");
    setShowForm(true);
  };

  return (
    <div className="instructor-banner">
      <div className="opacity opacity-one">
        <div className="container">
          <h4 style={{ fontStyle: "italic" }}>
            Every FIITJEE student is a Story!!
          </h4>
          <h2>So, Begin your Journey</h2>
          <a
            className="tran3s hvr-trim"
            onClick={handleGetStartedClick}
          >
            Get Started Now
          </a>
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.opacity */}
      <Modal
        isOpen={showForm}
        onRequestClose={() => setShowForm(false)}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <MultiStepForm style={customStyles}/>
      </Modal>
    </div>
  );
};

export default InstructorBanner;
