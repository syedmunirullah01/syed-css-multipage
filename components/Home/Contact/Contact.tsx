import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contact.css"; // Import the custom CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-grid">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
