import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import "./ContactInfo.css"; 

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info__item">
        <div className="contact-info__icon">
          <FaPhone className="custom-icon" />
        </div>
        <div className="contact-info__details">
          <h1 className="contact-info__title">Phone No</h1>
          <h1 className="contact-info__text">{ contactData.phone }</h1>
        </div>
      </div>

      <div className="contact-info__item">
        <div className="contact-info__icon">
          <FaEnvelope className="custom-icon" />
        </div>
        <div className="contact-info__details">
          <h1 className="contact-info__title">Email</h1>
          <h1 className="contact-info__text">{contactData.email}</h1>
        </div>
      </div>

      <div className="contact-info__item">
        <div className="contact-info__icon">
          <FaMap className="custom-icon" />
        </div>
        <div className="contact-info__details">
          <h1 className="contact-info__title">Address</h1>
          <h1 className="contact-info__text">{contactData.address}</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
