import React, { useState } from "react";
import MultiStepForm from "../component/footer/MultistepForm";

const InstructorBanner = () => {
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  const handleGetStartedClick = () => {
    console.log('====================================');
    console.log(showForm);
    console.log('====================================');
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
          {/* <a className="tran3s hvr-trim" onClick={handleGetStartedClick}>
            Get Started Now
          </a> */}
          <a href="#" className="tran3s hvr-trim" data-toggle="modal" data-target=".signInModal">Get Started Now</a>
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.opacity */}
      {showForm && <MultiStepForm onClose={() => setShowForm(false)} />}
      
    </div>
  );
};

export default InstructorBanner;
