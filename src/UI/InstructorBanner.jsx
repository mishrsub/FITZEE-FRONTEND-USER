import React, { useState } from "react";
import MultiStepForm from "../component/footer/MultistepForm";

const InstructorBanner = () => {
    const [showForm, setShowForm] = useState(false);

    const handleGetStartedClick = (e) => {
        e.preventDefault(); // Prevent default anchor tag behavior
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
                        href="#"
                         className="tran3s hvr-trim" data-toggle="modal" data-target=".signInModal"
                        onClick={handleGetStartedClick} // Call handleGetStartedClick function
                    >
                        Get Started Now
                    </a>
                </div>{" "}
                {/* /.container */}
            </div>{" "}
            {/* /.opacity */}
            {showForm && <MultiStepForm isOpen={showForm} onClose={() => setShowForm(false)} />}
        </div>
    );
};

export default InstructorBanner;
