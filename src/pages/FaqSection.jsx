import React, { useState } from "react";
import { AddContact } from "../react-query/api/Contact";
import { Bounce, toast } from "react-toastify";
import { getAllData } from "../react-query/api/Home";
import Loading from "../UI/Loading";

const FaqSection = () => {
  const { isLoading, error, newData, refetch } = getAllData(
    "http://65.1.94.113:8000/api/faq",
    "faq"
  );
  const midpoint = Math.ceil(newData?.length / 2);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    type: "faq",
  });

  const contactMut = AddContact();

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await contactMut.mutateAsync({ ...contact });

      // If the mutation is successful
      setContact({
        name: "",
        email: "",
        message: "",
        mobile: "",
        type: "faq",
      });

      toast.success(`✔ Faq successful!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      // If there is an error
      if (error.response && error.response.data.status === 400) {
        setContact({
          name: "",
          email: "",
          message: "",
          mobile: "",
          type: "faq",
        });

        toast.error(`❌ ${error.response.data.error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        console.error("Error submitting contact:", error);
      }
    } finally {
      // Stop the loader regardless of success or failure
      contactMut.reset();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="popular-faq">
        <div className="container">
          <div className="theme-title text-center">
            <h2>Frequently Asked Questions</h2>
            <p>
              If you have any concerns, please read this collection of frequently
              asked questions before contacting us. If <br /> you are still
              unclear about something, feel free to contact.
            </p>
          </div>{" "}
          {/* /.theme-title */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {/* ================== FAQ Panel ================ */}
              <div className="faq-panel">
                <div className="panel-group theme-accordion" id="accordion">
                  {newData.slice(0, midpoint).map((val, i) => (
                    <div className="panel" key={i}>
                      <div
                        className={
                          i === 0
                            ? "panel-heading active-panel"
                            : "panel-heading"
                        }
                      >
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent={`#accordion-${i}`}
                            href={`#collapse${i}`}
                          >
                            {val.title}
                          </a>
                        </h6>
                      </div>
                      <div
                        id={`collapse${i}`}
                        className={
                          i === 0
                            ? "panel-collapse collapse in"
                            : " panel-collapse collapse"
                        }
                      >
                        <div className="panel-body">
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* /.col- */}
            {/* /////////////////////////////////////////////////////////////////////// */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {/* ================== FAQ Panel ================ */}
              <div className="faq-panel">
                <div
                  className="panel-group theme-accordion"
                  id="accordion3"
                >
                  {newData.slice(midpoint).map((val, i) => (
                    <div className="panel" key={i + midpoint}>
                      <div
                        className="panel-heading"
                      >
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent={`#accordion-${i + midpoint}`}
                            href={`#collapse${i + midpoint}`}
                          >
                            {val.title}
                          </a>
                        </h6>
                      </div>
                      <div
                        id={`collapse${i + midpoint}`}
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body">
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* /.col- */}
          </div>
          {/* /.row */}
        </div>
      </div>
      <div className="faq-form">
        <div className="container">
          <h2>Didn't find the answer?</h2>
          <form action="#">
            <div className="row">
              <div className="col-sm-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  value={contact.name}
                  onChange={(e) =>
                    setContact({ ...contact, name: e.target.value })
                  }
                />
              </div>
              <div className="col-sm-4">
                <input
                  type="email"
                  placeholder="Your Email*"
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                />
              </div>
              <div className="col-sm-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={contact.mobile}
                  onChange={(e) =>
                    setContact({ ...contact, mobile: e.target.value })
                  }
                />
              </div>
              <div className="col-xs-12">
                <textarea
                  placeholder="Your Question"
                  defaultValue={""}
                  value={contact.message}
                  onChange={(e) =>
                    setContact({ ...contact, message: e.target.value })
                  }
                />
              </div>
            </div>
            <input
              type="submit"
              defaultValue="Submit Question"
              className="s-bg-color tran3s"
              onClick={formSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
