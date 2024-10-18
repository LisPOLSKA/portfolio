import React, { useRef, useState, useEffect } from "react";
import "./contactC.scss";
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';


// Używanie zmiennych środowiskowych
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function ContactC() {
  const [showPopup, setShowPopup] = useState(false); // Stan do kontrolowania popupu
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  

  const send = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(serviceID, templateID, form.current, {
      publicKey: publicKey,
    });
    setShowPopup(true); // Wyświetl popup
    form.current.reset(); // Zresetuj formularz
  } catch (error) {
    console.log("FAILED...", error.text);
  }
};

  return (
    <section className="contact__form" data-aos="fade-up">
      <div className="contactForm">
        <h1>Contact with me</h1>
        <form onSubmit={send} ref={form}>
          <div className="group_input">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" required />
          </div>
          <div className="group_input">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" required />
          </div>
          <div className="group_input">
            <label htmlFor="topic">Topic</label>
            <input type="text" name="topic" id="topic" required />
          </div>
          <div className="group_input">
            <label htmlFor="mess">Message</label>
            <textarea name="message" id="mess" required></textarea>
          </div>
          <button type="submit">Wyślij!</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <p>Wiadomość została pomyślnie wysłana!</p>
          <button onClick={() => setShowPopup(false)}>Zamknij</button>
        </div>
      )}
    </section>
  );
}

export default ContactC;
