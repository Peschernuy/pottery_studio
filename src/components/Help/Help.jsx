import React, { useState } from "react";
import "./help.scss";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import phone from '../../assets/images/icons/phone.svg'
import mail from '../../assets/images/icons/mail.svg'

const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.request
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    fetch("/api/help", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Your request has been submitted successfully.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            request: "",
          });
        } else {
          alert(
            "There was an error submitting your request. Please try again later."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        alert(
          "There was an error submitting your request. Please try again later."
        );
      });
  };
  return (
    <section className="help__section">
      <div className="help__info">
        <h1>Need help?</h1>
        <p>
          Your potterry journey starts with a single conversation or call. Join
          our classes, book a discovery meeting, today and unlock the your own
          potential.
        </p>
        <p>
          If you have any questions or need help, you may contact us to assist
          you.
        </p>
        <p className="help__phone">+ 12 345 432 324</p>
        <p>
          Mon-Fri: 8am - 6pm
          <br /> Sat: 10am - 6pm
        </p>
        <p className="help__mail">Email us 24/7</p>
      </div>
      <form className="help__form" onSubmit={handleSubmit}>
        <input
          placeholder="Name*"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Name"
        />

        <input
          placeholder="Email*"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email"
        />

        <input
          placeholder="Phone*"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          aria-label="Phone"
        />

        <textarea
          placeholder="Your request*"
          name="request"
          value={formData.request}
          onChange={handleChange}
          required
          aria-label="Your request"
        ></textarea>

        <SubmitBtn onClick={handleSubmit} text="Send" />
      </form>
    </section>
  );
};

export default Help;
