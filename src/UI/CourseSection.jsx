import React, { useEffect, useState } from "react";
import Course4 from "../assets/images/course/4.jpg";
import FitjeeCourse4 from "../assets/images/course/fiitjee_course-4.jpg";
import FitjeeCourse1 from "../assets/images/course/fiitjee_course-1.jpg";
import FitjeeCourse2 from "../assets/images/course/fiitjee_course-2.jpg";
import FitjeeCourse3 from "../assets/images/course/fiitjee_course-3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getAllData } from "../react-query/api/Home";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const CourseCard = ({ studentClass, program, subPrograms, classId }) => {
    console.log("====================================");
    // console.log("CLASS----------------->",studentClass);
    console.log("====================================");
    return (
        <div key="1" className="single-course" style={{ marginRight: 25 }}>
            <div className="image-box">
                <img src={FitjeeCourse1} alt="" />
            </div>
            <div className="text">
                <div className="image">
                    {/* <img src={Course4} alt="" /> */}
                    <img  width="60" height="60" avatar="V I"/>
                </div>
                <div className="name free clearfix">
                    <h6 className="float-left">{studentClass}</h6>
                    <span className="p-bg-color float-right">
                        <div key={subPrograms._id}>
                            <p>{subPrograms.isPaid ? "Free" : "Paid"}</p>
                        </div>
                    </span>
                </div>
                <h5>
                    <Link
                        to={`/fiitjee_mumbai-v11/courses/class/${classId}/program/${program._id}/subprogram/${subPrograms._id}`}
                        className="tran3s"
                    >
                        <div key={subPrograms._id}>
                            <p>{subPrograms.name}</p>
                        </div>
                    </Link>
                </h5>
                <ul className="clearfix">
                    <li className="float-left">
                        <i className="flaticon-people" />
                        <a href="#" className="tran3s">
                            2,680
                        </a>
                    </li>
                    <li className="float-left">
                        <i className="flaticon-comments" />
                        <a href="#" className="tran3s">
                            13
                        </a>
                    </li>
                    <li className="float-right">
                        <i className="flaticon-star" />
                        <a href="#" className="tran3s">
                            3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const CourseSection = () => {
    const { isLoading, error, newData } = getAllData(
        "http://35.154.95.255:8000/api/course",
        "class"
    );

    // console.log('====================================');
    // console.log("NEW DATA: ",newData);
    // console.log('====================================');
    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <h3>Error: {error.message}</h3>;
    }

    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: "fadeOut", // Add fadeOut animation
        animateIn: "fadeIn", // Add fadeIn animation
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            992: {
                items: 3,
            },
        },
    };

    const items = newData.flatMap((classData) =>
        classData.programs.slice(0, 1).flatMap((program) =>
            program.subprograms
                .slice(0, 1)
                .map((programData, i) => (
                    <CourseCard
                        key={programData._id}
                        program={program}
                        studentClass={classData.name}
                        subPrograms={programData}
                        classId={classData._id}
                    />
                ))
        )
    );

    // console.log('====================================');
    // console.log("CARD LIST ITEM: ",items);
    // console.log('====================================');
    return (
        <div className="popular-course">
            <div className="container">
                <div className="theme-title">
                    {/* <h6>Featured Course</h6> */}
                    <h2>Our Course</h2>
                </div>{" "}
                {/* /.theme-title */}
                <div className="row">
                    <div className="instructor-slider">
                        <OwlCarousel className="owl-theme" {...options}>
                            {items}
                        </OwlCarousel>
                    </div>{" "}
                    {/* /.col- */}
                </div>{" "}
                {/* /.row */}
            </div>{" "}
            {/* /.container */}
        </div>
    );
};

export default CourseSection;
