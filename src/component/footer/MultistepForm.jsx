import React, { useState } from "react";
import Modal from "react-modal";

const MultiStepForm = ({style}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
      zIndex: 9999, // Set the z-index for the overlay
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999, // Set the z-index for the modal content
    },
  };
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={style}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default MultiStepForm;
