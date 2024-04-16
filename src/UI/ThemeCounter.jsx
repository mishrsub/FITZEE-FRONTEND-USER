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
                                                end={60}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Locations</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={50}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Programs</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={400}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>Faculties</p>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <h3>
                                    <span className="counter">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={50000}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p>IITian's Trained</p>
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
