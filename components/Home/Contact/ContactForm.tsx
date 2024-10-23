import React from "react";
import "./ContactForm.css"; // Import the custom CSS

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1 className="form-title">Let&apos;s Work Together</h1>
      <p className="form-description">
        Ready to collaborate or have questions? Fill out the form, and
        let&apos;s turn your ideas into reality. I&apos;m excited to connect and
        explore possibilities together!
      </p>

      <form className="form-body">
        <div className="input-group">
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email Address"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input-field"
          />
        </div>
        <div>
          <select className="select-field">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="frontenddeveloper">Frontend Developer</option>
            <option value="backenddeveloper">Backend Developer</option>
            <option value="fullstackdeveloper">Full Stack Developer</option>
          </select>
        </div>
        <textarea
          className="textarea-field"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
