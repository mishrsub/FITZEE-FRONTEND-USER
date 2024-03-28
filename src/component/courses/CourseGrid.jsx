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

    const convertRomanNumeral = (romanNumeral) =>
        romanNumeral.replace(/(I|V|X|L|C|D|M)(?![IVXLCDM]|$)/g, "$1 ");

    // Test cases
    console.log(convertRomanNumeral("XI")); // Output: "X I"
    console.log(convertRomanNumeral("VIII")); // Output: "V I I I"
    console.log(convertRomanNumeral("XIe SIe WEe")); // Output: "X Ie   S Ie   W Ee"

    useEffect(() => {
        LetterAvatar.transform();
    }, []);

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
                                                    <LetterAvatar
                                                        name={convertRomanNumeral(
                                                            data.name
                                                        )}
                                                        size={60}
                                                    />
                                                </div>
                                                <div className="name free clearfix">
                                                    <h6 className="float-left">
                                                        Class {data.name}
                                                    </h6>
                                                    <span className="p-bg-color float-right">
                                                        {programData.isPaid
                                                            ? "Paid"
                                                            : "Free"}
                                                    </span>
                                                </div>
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
                                    <div className="panel">
                                        <div className="panel-heading active-panel">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse1"
                                                >
                                                    Offline Classroom Programs
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="panel-collapse collapse in"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Math Genie
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            Little Genie One
                                                            Year Foundation
                                                            Program (N)
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 1 */}
                                    <div className="panel">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse2"
                                                >
                                                    Digital Classroom Programs
                                                </a>
                                            </h6>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="panel-collapse collapse"
                                        >
                                            <div className="panel-body">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            e-LITTLE GENIE
                                                            little Genie-One
                                                            Year Live Online
                                                            Foundation Program
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="tran3s"
                                                        >
                                                            e-Maths Genie
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /panel 2 */}
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
                                                    IIT
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="linux"
                                                />
                                                <label htmlFor="linux">
                                                    JEE
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="design"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="design">
                                                    JEE Mains
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    id="development"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="development">
                                                    JEE Advance
                                                </label>
                                            </li>
                                        </ul>
                                    </div>{" "}
                                    {/* /.tag-option */}
                                    <div className="course-price-filter">
                                        <h5>Price</h5>
                                        <div className="pricetag">
                                            <div className="float-left">
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                />
                                                <label htmlFor="remember">
                                                    Free
                                                </label>
                                            </div>
                                            <div
                                                className="float-left"
                                                style={{ marginLeft: 20 }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                />
                                                <label htmlFor="remember">
                                                    Paid
                                                </label>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* /.course-price-filter */}
                                    <div className="course-location">
                                        <h5>Location</h5>
                                        <div className="form-group">
                                            <div>
                                                <select
                                                    id="loaction"
                                                    className="selectpicker show-tick form-control"
                                                    data-live-search="true"
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
                                    </div>
                                </form>{" "}
                                {/* /.main-wrapper */}
                            </div>{" "}
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
