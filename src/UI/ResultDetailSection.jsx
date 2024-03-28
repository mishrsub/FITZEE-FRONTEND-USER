import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllResult } from "../react-query/api/result";
import Modal from "react-modal";
import Loading from "./Loading";
import Gallery from "../component/Result/Gallery";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px", // Fixed width
    height: "590px", // Fixed height
    overflow: "auto", // Enables scrolling for the content inside
    flex: 1,
    overflowY: "auto",
  },
};

const ResultDetailSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSubset, setSubsetImage] = useState([]);

  const { resultId } = useParams();
  const { data, isLoading, error, refetch } = getAllResult(
    `http://35.154.95.255:8000/api/course/result/${resultId}`
  );

  useEffect(() => {
    refetch();
  }, [error, isLoading, data, resultId, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  const newData = data;

  // Function to open the modal
  const openModal = (id) => {
    setModalOpen(true);
    const yearData = data.passingYears.find((val) => val._id === id);
    setSubsetImage(yearData.image);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="our-portfolio">
        <div className="container">
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <input
              className="closeButtonResult"
              type="button"
              value={"CLOSE"}
              onClick={closeModal}
            />
            {/* submit
                        </input> */}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Gallery>
                {
                  imageSubset.map((val, index) => (
                    <a
                      key={index}
                      style={{ margin: "5px" }}
                      data-lg-size="1406-1390"
                      className="gallery-item"
                      data-src={`http://65.1.94.113:8000/uploads/${val}`}
                      data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                    >
                      <img
                        className="img-responsive"
                        key={index}
                        src={`http://65.1.94.113:8000/uploads/${val}`}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "200px", // Set your desired width
                          height: "140px", // Set your desired height
                          objectFit: "cover", // Maintain aspect ratio and cover the container
                          margin: "1%", // Add margin between images
                          boxSizing: "border-box",
                          cursor: "pointer",
                          border: "5px solid white",
                          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                          backgroundColor: "transparent",
                        }}
                      />
                    </a>
                  ))}
              </Gallery>
            </div>
          </Modal>

          <div className="row" id="mixitUp-item">
            {data?.passingYears?.length > 0 &&
              data?.passingYears?.map((val, i) => (
                <div
                  className={
                    i === 0
                      ? "col-sm-4 col-xs-6 mix presentation"
                      : "col-sm-4 col-xs-6 mix"
                  }
                  key={val._id}
                >
                  <div className="single-item">
                    <img
                      src={`http://65.1.94.113:8000/uploads/${newData?.programImg}`}
                      alt=""
                    />
                    <div className="opacity tran3s">
                      <div>
                        <h6>
                          {/* Open the modal on link click */}
                          <Link
                            className="open-modal"
                            to="#modal"
                            onClick={() => openModal(val._id)}
                          >
                            {val.year}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>{" "}
                  {/* /.single-item */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultDetailSection;
