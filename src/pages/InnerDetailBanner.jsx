import React from "react";

const InnerDetailBanner = ({ title }) => {
  console.log("====================================");
  console.log("Title: ", title);
  console.log("====================================");
  return (
    <div className="inner-banner">
      <div className="opacity">
        <div className="container">
          <h2>{title}</h2>
          <h4 style={{ color: "#fff", marginBottom: 12 }}>
            <button
              className="full_form"
              data-tooltip-anchor="top"
              data-tooltip="Vidyarthi Vigyan Manthan"
            >
              VVM
            </button>
            ,{" "}
            <button
              className="full_form"
              data-tooltip-anchor="top"
              data-tooltip="NMIC Full form"
            >
              NMIC
            </button>
            ,{" "}
            <button
              className="full_form"
              data-tooltip-anchor="top"
              data-tooltip="IPM full form"
            >
              IPM
            </button>
          </h4>
          <ul>
            <li>
              <a href="index.php" className="tran3s">
                Home
              </a>
            </li>
            <li>/</li>
            <li>Class VI</li>
            <li>/</li>
            <li>Offline Classroom Programs</li>
            <li>/</li>
            <li>Math Genie</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InnerDetailBanner;
