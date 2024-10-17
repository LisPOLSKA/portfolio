import React, { useRef, useState } from "react";
import "./contactC.scss"
import emailjs from "@emailjs/browser"


// Używanie zmiennych środowiskowych
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

console.log('Service ID:', serviceID);


function ContactC() {
  const [emailRef, setEmailRef]  = useState("");
  const [topicRef, setTopicRef]  = useState("");
  const [messRef, setMessRef]  = useState("");
  const [nameRef, setNameRef]  = useState("");
  const form = useRef();

  const send = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact__form">
      <div className="contactForm">
      <h1>Contact with me</h1>
      <form onSubmit={send} ref={form}>
      <div className="group_input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required onChange={(e) => setNameRef(e.target.value)}/>
        </div>
        <div className="group_input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required onChange={(e) => setEmailRef(e.target.value)}/>
        </div>
        <div className="group_input">
        <label htmlFor="topic">Topic</label>
        <input type="text" name="topic" id="topic" required onChange={(e) => setTopicRef(e.target.value)}/>
        </div>
        <div className="group_input">
        <label htmlFor="mess">Message</label>
        <textarea name="mess" id="mess" required onChange={(e) => setMessRef(e.target.value)}></textarea>
        </div>
        <button type="submit">Wyślij!</button>
      </form>
      </div>
    </section>
  );
}

export default ContactC;
