import React, { useEffect } from "react";
import FitjeeCourse1 from "../../assets/images/course/fiitjee_course-1.jpg";
import FitjeeCourse2 from "../../assets/images/course/fiitjee_course-2.jpg";
import FitjeeCourse3 from "../../assets/images/course/fiitjee_course-3.jpg";
import FitjeeCourse4 from "../../assets/images/course/fiitjee_course-4.jpg";
import Course4 from "../../assets/images/course/4.jpg";
import Loading from "../../UI/Loading";
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/wordTruncate";
import LetterAvatar from "./LetterAvatar";

const CourseGrid = ({ course }) => {
    const { isLoading, error, data } = course;

    console.log("====================================");
    console.log("DATATATATATATTATATATATATTA: ===> ", data);
    console.log("====================================");

    // Define the LetterAvatar function
    function LetterAvatar(name, size) {
        name = name || "";
        size = size || 60;

        var colours = [
            "#1abc9c",
            "#2ecc71",
            "#3498db",
            "#9b59b6",
            "#34495e",
            "#16a085",
            "#27ae60",
            "#2980b9",
            "#8e44ad",
            "#2c3e50",
            "#f1c40f",
            "#e67e22",
            "#e74c3c",
            "#ecf0f1",
            "#95a5a6",
            "#f39c12",
            "#d35400",
            "#c0392b",
            "#bdc3c7",
            "#7f8c8d",
        ];

        var nameSplit = String(name).toUpperCase().split(" ");
        var initials = "";
        var charIndex, colourIndex, canvas, context, dataURI;

        nameSplit.forEach((word) => {
            initials += word.charAt(0);
        });

        if (window.devicePixelRatio) {
            size = size * window.devicePixelRatio;
        }

        charIndex = (initials == "" ? 72 : initials.charCodeAt(0)) - 64;
        colourIndex = charIndex % 20;
        canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        context = canvas.getContext("2d");

        context.fillStyle = colours[colourIndex - 1];
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = Math.round(canvas.width / 2) + "px Arial";
        context.textAlign = "center";
        context.fillStyle = "#FFF";
        context.fillText(initials, size / 2, size / 1.5);

        dataURI = canvas.toDataURL();
        canvas = null;

        return dataURI;
    }

    // Convert Roman numeral to spaced format
    function convertRomanToSpaced(roman) {
        const romanNumerals = {
            I: "I",
            V: "V",
            X: "X",
            L: "L",
            C: "C",
            D: "D",
            M: "M",
        };
        let result = "";
        for (let i = 0; i < roman.length; i++) {
            result += romanNumerals[roman[i]] + " ";
        }
        return result.trim();
    }

    // Example usage:
    console.log(convertRomanToSpaced("VIII")); // Output: "V I I I"

    // Test cases
    console.log(LetterAvatar("XI", 60)); // Output: "X I"
    console.log(LetterAvatar("VIII", 60)); // Output: "V I I I"
    console.log(LetterAvatar("XIe SIe WEe", 60)); // Output: "X Ie   S Ie   W Ee"

    // useEffect(() => {
    //     LetterAvatar.transform();
    // }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    return (
        <div className="our-course course-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-xs-12 popular-course float-right">
                        <div className="row">
                            {data.programs.flatMap((program) =>
                                program.subprograms.map((programData, i) => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                        <div
                                            className="single-course"
                                            key={programData._id}
                                        >
                                            <div className="image-box">
                                                <img
                                                    src={`http://35.154.95.255:8000/uploads/${programData.programImg}`}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text">
                                                <div className="image">
                                                    {/* <img src={Course4} alt="" /> */}
                                                    {/* <img  width="60" height="60" avatar="V I"/> */}
                                                    {/* <LetterAvatar
                                                        name={convertRomanNumeral(
                                                            data.name
                                                        )}
                                                        size={60}
                                                    /> */}
                                                    <img
                                                        src={LetterAvatar(
                                                            convertRomanToSpaced(
                                                                data.name
                                                            ),
                                                            60
                                                        )}
                                                        alt=""
                                                    />
                                                </div>
                                                {/* <div className="name free clearfix">
                                                    <h6 className="float-left">
                                                        Class {data.name}
                                                    </h6>
                                                    <span className="p-bg-color float-right">
                                                        {programData.isPaid
                                                            ? "Paid"
                                                            : "Free"}
                                                    </span>
                                                </div> */}
                                                <h5>
                                                    <Link
                                                        to={`/fiitjee_mumbai-v11/courses/class/${data._id}/program/${program._id}/subprogram/${programData._id}`}
                                                    >
                                                        {/* <a href="course_details.php" className="tran3s"> */}
                                                        {truncateText(
                                                            programData.name,
                                                            5
                                                        )}
                                                        {/* </a> */}
                                                    </Link>
                                                </h5>
                                                <ul className="clearfix">
                                                    <li className="float-left">
                                                        <i className="flaticon-people" />
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            2,680
                                                        </a>
                                                    </li>
                                                    <li className="float-left">
                                                        <i className="flaticon-comments" />
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            13
                                                        </a>
                                                    </li>
                                                    <li className="float-right">
                                                        <i className="flaticon-star" />
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    {/* /.popular-course */}
                    {/* ************************* SIDEBAR ***************************** */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="course-sidebar">
                            <div className="sidebar-categories">
                                <h4>Categories</h4>
                                <div
                                    className="panel-group theme-accordion"
                                    id="accordion"
                                >
                                    {data?.programs.length > 0 &&
                                        data.programs.map((val, i) => (
                                            <div className="panel" key={i}>
                                                <div
                                                    className={
                                                        i === 0
                                                            ? `panel-heading active-panel`
                                                            : `panel-heading`
                                                    }
                                                >
                                                    <h6 className="panel-title">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href={`#collapse${
                                                                i + 1
                                                            }`} // Unique href for each panel
                                                        >
                                                            {val?.name}
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div
                                                    id={`collapse${i + 1}`} // Unique id for each collapse panel
                                                    className={
                                                        i === 0
                                                            ? "panel-collapse collapse in"
                                                            : "panel-collapse collapse"
                                                    }
                                                >
                                                    {val.subprograms.length >
                                                        0 &&
                                                        val.subprograms.map(
                                                            (subVal, j) => (
                                                                <div
                                                                    className="panel-body"
                                                                    key={j}
                                                                >
                                                                    <ul>
                                                                        <li>
                                                                            <Link
                                                                                to={`/fiitjee_mumbai-v11/courses/class/${data._id}/program/${val._id}/subprogram/${subVal._id}`}
                                                                                className="tran3s"
                                                                            >
                                                                                {
                                                                                    subVal.name
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )
                                                        )}
                                                </div>
                                            </div>
                                        ))}
                                </div>{" "}
                                {/* end #accordion */}
                            </div>{" "}
                            {/* /.sidebar-categories */}
                            <div className="course-filter">
                                <h4>Search By Filters</h4>
                                <form action="#" className="main-wrapper">
                                    <div className="tag-option">
                                        <h5>Target Exams</h5>
                                        <ul className="clearfix">
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="book"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="book">
                                                    ANMC
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="linux"
                                                />
                                                <label htmlFor="linux">
                                                    VVM
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="design"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="design">
                                                    NMTC
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="development"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="development">
                                                    Homi Bhabha
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="development"
                                                />
                                                <label htmlFor="development">
                                                    IPM
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="development"
                                                />
                                                <label htmlFor="development">
                                                    JMO
                                                </label>
                                            </li>
                                        </ul>
                                    </div>{" "}
                                    {/* /.tag-option */}
                                    {/* <div class="course-price-filter">
											<h5>Price</h5>
											<div class="pricetag">
												<div class="float-left">
											<input type="checkbox" id="remember">
											<label for="remember">Free</label>
											</div>
											<div class="float-left" style="margin-left: 20px;">
											<input type="checkbox" id="remember">
											<label for="remember">Paid</label>
											</div>
											</div>
										</div> */}
                                    {/* /.course-price-filter */}
                                    <div className="course-location">
                                        <h5>Location</h5>
                                        <div className="form-group">
                                            <div>
                                                <select
                                                    multiple=""
                                                    id="loaction"
                                                    className="selectpicker show-tick form-control"
                                                    data-live-search="true"
                                                    data-placeholder="Choose your location..."
                                                >
                                                    <option>Andheri</option>
                                                    <option>Kandivali</option>
                                                    <option>Thane</option>
                                                    <option>Navi Mumbai</option>
                                                    <option>Chembur</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /.course-location */}
                                    <div className="button-wrapper">
                                        <input
                                            type="submit"
                                            defaultValue="Apply filters"
                                            className="p-bg-color tran3s"
                                        />
                                    </div>{" "}
                                </form>{" "}
                                {/* /.main-wrapper */}
                            </div>
                            {/* /.course-filter */}
                        </div>{" "}
                        {/* /.course-sidebar */}
                    </div>{" "}
                    {/* /.col- */}
                </div>{" "}
                {/* /.row */}
            </div>{" "}
            {/* /.container */}
        </div>
    );
};

export default CourseGrid;
