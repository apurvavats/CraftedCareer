import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">
          If you want to connect, I’d love to hear from you!
        </p>

        <div className="contact-cards">
          {/* Email */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <Mail size={22} color="white" />
            </div>
            <div>
              <p className="card-label">Email</p>
              <a href="mailto:vatsapurva31@email.com" className="card-link">
                vatsapurva31@email.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <Phone size={22} color="white" />
            </div>
            <div>
              <p className="card-label">Phone</p>
              <a href="tel:+916202166141" className="card-link">
                +91 6202166141
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact-card">
            <div className="icon-wrapper">
              <MapPin size={22} color="white" />
            </div>
            <div>
              <p className="card-label">Location</p>
              <p className="card-link">Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
