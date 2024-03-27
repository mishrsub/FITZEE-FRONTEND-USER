import React, { useState } from 'react'
import { AddContact } from '../react-query/api/Contact';
import { Bounce, toast } from 'react-toastify';

const RegistrationBanner = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile:"",
    purpose:""
  });

  const contactMutation = AddContact();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger the mutation by calling the mutate function with the data
    contactMutation.mutate({
      ...contact
    });
    console.log(contact);

    setContact({
      name: "",
      email: "",
      mobile:"",
      purpose:""
    });

    toast.success("✔ Contact Added Successfully!", {
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
  };


  return (
    <div className="registration-banner">
  <div className="opacity">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-xs-12">
          <div className="registration-form">
            <form action="#" onSubmit={handleSubmit}>
              <h2>To Know More!!</h2>
              <p>Get in touch with one of our experts.</p>
              <div className="form-wrapper">
                <h6>
                  Your Full Name<sup style={{ color: "red" }}>*</sup>
                </h6>
                <input type="text" placeholder="Your Name" value={contact.name} onChange={(e) => setContact({...contact,name:e.target.value})}/>
                <h6>
                  Mobile Number<sup style={{ color: "red" }}>*</sup>
                </h6>
                <input type="text" placeholder="+91 854 875 971" value={contact.mobile} onChange={(e) => setContact({...contact,mobile:e.target.value})}/>
                <h6>
                  Your EMail<sup style={{ color: "red" }}>*</sup>
                </h6>
                <input type="email" placeholder="sample@gmail.com" value={contact.email} onChange={(e) => setContact({...contact,email:e.target.value})}/>
                <h6>
                  Purpose of enquiry<sup style={{ color: "red" }}>*</sup>
                </h6>
                <input type="text" placeholder="Write your Enquiry here.." value={contact.purpose} onChange={(e) => setContact({...contact,purpose:e.target.value})}/>
                <button className="tran3s hvr-trim">Submit</button>
              </div>{" "}
              {/* /.form-wrapper */}
            </form>
          </div>{" "}
          {/* /.registration-form */}
        </div>
        <div className="col-md-7 col-xs-12">
          <div className="text-wrapper">
            <h2>
              How Can I be a part of
              <br /> <span className="p-color">FIITJEE, Mumbai?</span>
            </h2>
            <div>
              <ol className="step">
                <li>
                  <div className="title">Registration</div>
                  <div className="descr">
                    Register for a FIITJEE Admission test
                  </div>
                </li>
                <li>
                  <div className="title">Appearance</div>
                  <div className="descr">
                    Give the test with the best of your abilities
                  </div>
                </li>
                <li>
                  <div className="title">Selection</div>
                  <div className="descr">
                    Get your test analysed by our experts
                  </div>
                </li>
                <li>
                  <div className="title">Enrolment</div>
                  <div className="descr">
                    Complete your admission formalities
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* /.row */}
    </div>{" "}
    {/* /.container */}
  </div>{" "}
  {/* /.opacity */}
</div>

  )
}

export default RegistrationBanner
