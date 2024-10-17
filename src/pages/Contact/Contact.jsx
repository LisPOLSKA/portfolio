import React from "react";
import ContactC from "../../components/contactC/ContactC";
import "./contact.scss"

function Contact() {
  return (
    <div className="contact__page">
      <span>Write to me on any topic! I will answer as soon as I can. If you want more about any of my projects you can ask here. If you want to ask me something it's the best way to do this.</span>
      <ContactC/>
    </div>
  );
}

export default Contact;
