import React, { useState } from "react";

const ContactMe = () => {
  return (
    <div className="contactForm">
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          id="name"
          required
        />
      </div>

      <div>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          id="email"
          required
        />
      </div>

      <div>
        <textarea
          className="form-control"
          id="message"
          placeholder="Message"
          required
        />
      </div>

      <div>
        <button className="btn contact-btn" type="submit">
         Submit
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
