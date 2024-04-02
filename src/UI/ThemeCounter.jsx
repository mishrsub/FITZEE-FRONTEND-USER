// import Particles from "react-tsparticles"
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ThemeCounter = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >
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
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={85873}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Students</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={468}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Courses</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={1729}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Projects</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={2560}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Ratings</p>
                            </div>
                        </div>
                    </div>{" "}
                    {/* /.container */}
                </div>{" "}
                {/* /.opacity */}
            </div>
        </ScrollTrigger>
    );
};

export default ThemeCounter;
