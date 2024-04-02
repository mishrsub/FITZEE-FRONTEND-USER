import React, { useEffect } from "react";
import Img1 from "../assets/images/inner-page/1.jpg";
import Img3 from "../assets/images/inner-page/3.png";
import Img5 from "../assets/images/inner-page/5.png";
import Img4 from "../assets/images/inner-page/4.png";

const About = () => {
    useEffect(() => {
        // Function to load a script dynamically
        const loadScript = (src, id) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.id = id;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        // Define an array of scripts to load
        const scriptsToLoad = [
            // "/assets/vendor/particles.js-master/particles.min.js",
            "/vendor/particles.js-master/particles.min.js",
            "/vendor/particles.js-master/demo/js/lib/stats.js",
            "/vendor/particles.js-master/demo/js/app.js",
            "/vendor/particles.js-master/demo/js/theme.js",
            "https://cdn.jsdelivr.net/npm/react-particles-js@3.6.0/umd/particles.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js",
        ];

        // Load all the scripts
        const loadAllScripts = async () => {
            for (const script of scriptsToLoad) {
                try {
                    await loadScript(
                        script,
                        script.split("/").pop().split(".")[0]
                    );
                    console.log(`${script} loaded successfully`);
                } catch (error) {
                    console.error(`Error loading ${script}:`, error);
                }
            }
        };

        // Call the function to load all scripts
        loadAllScripts();

        // Cleanup function to remove the dynamically added scripts when the component unmounts
        return () => {
            scriptsToLoad.forEach((script) => {
                document
                    .getElementById(script.split("/").pop().split(".")[0])
                    ?.remove();
            });
        };
    }, []); // The empty dependency array ensures this useEffect runs once on mount

    return (
        <>
            <div className="about-text">
                <div className="container">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="theme-title">
                                    <h2 style={{ fontSize: 36 }}>
                                        Chairman's Message
                                    </h2>
                                </div>{" "}
                                {/* /.theme-title */}
                                <p className="space">
                                    ” This Journey from just an IIT-JEE Coaching
                                    Institute to the most powerful brand in
                                    serious education has been exhilarating.
                                    However, the Journey is not over yet. For us
                                    at FIITJEE, the Journey will never be over…
                                    <br />
                                    <br />
                                    For us, this Journey itself is the
                                    destination.”
                                </p>
                                <div className="title">
                                    <h4>Mr. D. K. Goel</h4>
                                    <span>
                                        (Founder Chairman &amp; Chief Mentor -
                                        FIITJEE Group)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* /.wrapper */}
                </div>{" "}
                {/* /.container */}
            </div>{" "}
            {/* /.about-text */}
            <div className="amazing-feature" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="single-box float-right tran3s">
                                {/* <i class="flaticon-compose"></i> */}
                                <center>
                                    <img
                                        src={Img3}
                                        alt="VISION"
                                        className="space"
                                        width="120px"
                                    />
                                </center>
                                <h6>
                                    <a href="#" className="tran3s">
                                        VISION
                                    </a>
                                </h6>
                                <p>
                                    Keeping our mission in mind, we will
                                    establish a transformational leadership
                                    position in each of our projects across the
                                    globe. We will become a Comprehensive Global
                                    Leader In Education by 2030.
                                </p>
                            </div>{" "}
                            {/* /.single-box */}
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="single-box tran3s">
                                <center>
                                    <img
                                        src={Img4}
                                        alt="VISION"
                                        className="space"
                                        width="120px"
                                    />
                                </center>
                                <h6>
                                    <a href="#" className="tran3s">
                                        MISSION
                                    </a>
                                </h6>
                                <p>
                                    To create World’s Best Institution that
                                    serves the society for thousands of years
                                    -may be perennially. To Make India Global
                                    Leader In Education, both In Not For Profit
                                    as well as For Profit Ventures
                                </p>
                            </div>{" "}
                            {/* /.single-box */}
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="single-box tran3s">
                                <center>
                                    <img
                                        src={Img5}
                                        alt="VISION"
                                        className="space"
                                        width="120px"
                                    />
                                </center>
                                <h6>
                                    <a href="#" className="tran3s">
                                        VALUES
                                    </a>
                                </h6>
                                <p>
                                    FIITJEE values system revolves around truth,
                                    transparency &amp; commitment. Whatever we
                                    think, we say &amp; whatever we say, we do.
                                    We present to you what we actually are.
                                </p>
                            </div>{" "}
                            {/* /.single-box */}
                        </div>
                    </div>
                </div>{" "}
                {/* /.container */}
            </div>
            {/* 
			=============================================
				Theme Counter Section
			============================================== 
			*/}
            <div className="theme-counter">
                <div className="count-particles">
                    <span className="js-count-particles">--</span>
                </div>
                <div id="particles-js" />
                <div className="opacity">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">10</span>+
                                </h3>
                                <p>Locations</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">20</span>+
                                </h3>
                                <p>Programs</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">60</span>+
                                </h3>
                                <p>Faculties</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">1000</span>+
                                </h3>
                                <p>IITian’s Trained</p>
                            </div>
                        </div>
                    </div>{" "}
                    {/* /.container */}
                </div>{" "}
                {/* /.opacity */}
            </div>{" "}
            {/* /.theme-counter */}
            {/* 
			=============================================
				Our Instructors
			============================================== 
			*/}
            <div className="our-instructor pt-100">
                <div className="container">
                    <div className="theme-title text-center">
                        <h2>Our Story</h2>
                        <p>
                            Since our inception in Mumbai in 2005, we have
                            evolved into the most reputable Test Preparation
                            Institute in the state. Our journey has been marked
                            by significant milestones that underscore our
                            commitment to excellence. Let's take a closer look
                            at some of the noteworthy achievements that have
                            shaped our path to success.
                        </p>
                    </div>{" "}
                    {/* /.theme-title */}
                    <div className="timeline">
                        <ul>
                            <li>
                                <div className="content">
                                    <h2>2010</h2>
                                    <h3>Andheri Center</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged.{" "}
                                    </p>
                                </div>
                                {/* <div class="time">
									<h4>January 2018</h4>
								</div> */}
                            </li>
                            <li>
                                <div className="content">
                                    <h2>2010</h2>
                                    <h3>Kandivali Center</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged.{" "}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>2010</h2>
                                    <h3>Thane Center</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged.{" "}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>2010</h2>
                                    <h3>Navi Mumbai Center</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged.{" "}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>2010</h2>
                                    <h3>Chembur Center</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged.{" "}
                                    </p>
                                </div>
                            </li>
                            <div style={{ clear: "both" }} />
                        </ul>
                    </div>
                </div>
            </div>
            {/* /.our-instructor */}
        </>
    );
};

export default About;
