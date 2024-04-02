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
                    <img
                        src={LetterAvatar(
                            convertRomanToSpaced(studentClass),
                            60
                        )}
                        alt=""
                    />
                </div>
                {/* <div className="name free clearfix">
                    <h6 className="float-left">{studentClass}</h6>
                    <span className="p-bg-color float-right">
                        <div key={subPrograms._id}>
                            <p>{subPrograms.isPaid ? "Free" : "Paid"}</p>
                        </div>
                    </span>
                </div> */}
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
        // nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: "fadeOut", // Add fadeOut animation
        animateIn: "fadeIn", // Add fadeIn animation
        dots: true,
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
        classData.programs
            // .slice(0, 1)
            .flatMap((program) =>
                program.subprograms
                    // .slice(0, 1)
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
