import React from "react";
import Logo5 from "../../assets/images/logo/logo5.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-logo">
                <a href="index-2.html">
                  <img src={Logo5} alt="Logo" style={{ width: 150 }} />
                </a>
                <p>
                  FIITJEE was created in 1992 by the vision and toil of Mr. D.
                  K. Goel, a Mechanical Engineering Graduate from IIT Delhi. We
                  had a very humble beginning as a forum for IIT-JEE, with a
                  vision to provide an ideal launch pad for serious JEE
                  aspirants.
                </p>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/fiitjeemumbai/" className="tran3s" target="_blank">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Ffiitjeemumbai" className="tran3s" target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mumbaifiitjee/" className="tran3s" target="_blank">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 footer-list">
              <h6>Important Links</h6>
              <ul>
                <li>
                  <Link to="/fiitjee_mumbai-v22/faq" className="tran3s">
                    FAQ &amp; Support
                  </Link>
                </li>
                <li>
                  <a href="" className="tran3s">
                    Careers
                  </a>
                </li>
                <li>
                  <Link to="/fiitjee_mumbai-v22/blog" className="tran3s">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/fiitjee_mumbai-v22/news" className="tran3s">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-3 footer-list">
              <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
              <ul>
                <li>
                  <Link to="/fiitjee_mumbai-v22/about" className="tran3s">
                    About us
                  </Link>
                </li>
                <li>
                  <a href="" className="tran3s">
                    Student corner
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-12 footer-list">
              <Link to="/fiitjee_mumbai-v22/contact" className="tran3s">
                <h6>Contact us</h6>
              </Link>
              <ul>
                <li>
                  <i className="flaticon-phone-call" />{" "}
                  <a href="#">08080220888</a>
                </li>
                <li>
                  <i className="flaticon-envelope" />{" "}
                  <a href="#">helpdesk@myfiitjee.com</a>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
        <div className="bottom-footer">
          <div className="container">
            <ul className="float-right">
              <li>
                <h3>
                  <span className="p-color">20+</span> Program
                </h3>
              </li>
              <li>
                <h3>
                  <span className="p-color">60+</span> Faculties
                </h3>
              </li>
              <li>
                <h3>
                  <span className="p-color">1000+</span> IITian’s produced
                </h3>
              </li>
            </ul>
            <p className="float-left">
              © {/*?php echo date("Y"); ?*/}{" "}
              <a href="#" className="tran3s p-color">
                FIITJEE Mumbai
              </a>
              . All rights reserved
            </p>
          </div>
        </div>{" "}
        {/* /.bottom-footer */}
      </footer>
    </>
  );
};

export default Footer;
