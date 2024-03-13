import React, { useState } from "react";
import "./help.scss";

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
    // Handle form submission here
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
        <p>+ 12 345 432 324</p>
        <p>
          Mon-Fri: 8am - 6pm
          <br /> Sat: 10am - 6pm
        </p>
        <p>Email us 24/7</p>
      </div>
      <form className="help__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone*</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="request">Your request*</label>
        <textarea
          name="request"
          value={formData.request}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Help;
