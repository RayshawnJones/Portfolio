import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Import the emailjs library
import { validEmail } from "./miscellaneous/regex"; // Import a regular expression for email validation
import Button from "./miscellaneous/button"; // Import a custom Button component
import rings from "../assets/images/pattern-rings.svg"; // Import an image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Import the faCheck icon from FontAwesome
import { useState } from "react"; // Import the useState hook

export default function Footer({ devData }) {
  const socialMedia = devData.basics; // Get the social media data from the devData prop
  return (
    <footer className="footer py-5" id="contactForm">
      <section className="container">
        <div className="row gap-5 justify-content-lg-between">
          <div className="col col-lg-4">
            <div className="text-center text-lg-start d-flex flex-column gap-4 position-relative">
              <h2 className="heading-xl">Contact</h2>
              <p>
                Currently open for full time role, networking, and shadowing mentor opportunities. Freelance availability is dependent on potentially filling or creating a project new project whether it is open or private that I could
                help with. Please don't hesitate to contact me and I will respond back as soon as I am
                possible.
              </p>
              <img
                src={rings}
                alt={rings}
                className="position-absolute end-50 top-100 z-1 desktopRings"
              />
            </div>
          </div>
          <div className="col col-lg-5">
            <ContactForm /> // Render the ContactForm component
          </div>
        </div>

        <hr className="border my-5" />

        <div className="row py-lg-2 gap-4 justify-content-center align-items-center">
          <div className="col-6 col-lg text-center text-lg-start">
            <h3 className="heading-dev">
              Rayshawn<span className="brand-color">.</span>Jones
            </h3>
          </div>
          <div className="col-6 col-lg">
            <ul className="d-flex align-items-center p-0 m-lg-0 justify-content-center justify-content-lg-end gap-5">
              {socialMedia.profiles.map((profile) => (
                <li className="list-style" key={profile.network}>
                  <a href={profile.url}>
                    <img src={profile.icon} alt={profile.network} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

function ContactForm() {
  const [name, setName] = useState(""); // Create a state variable for the name input field
  const [email, setEmail] = useState(""); // Create a state variable for the email input field
  const [emailErr, setEmailErr] = useState(false); // Create a state variable to track if the email format is invalid
  const [message, setMessage] = useState(""); // Create a state variable for the message input field
  const [submitSuc, setSubmitSuc] = useState(false); // Create a state variable to track if the form submission was successful

  const form = useRef(); // Create a ref for the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!name || !email || !message) {
      return; // If any of the required fields are empty, do nothing
    }
    if (!validEmail.test(email)) {
      setEmailErr(true); // If the email format is invalid, set the emailErr state variable to true
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      ) // Send the form data using the emailjs library
      .then(
        (result) => {
          console.log(result.text); // Log the success message
        },
        (error) => {
          console.log(error.text); // Log the error message
        }
      );

    setSubmitSuc(true); // Set the submitSuc state variable to true to show the success message
    setName(""); // Clear the name input field
    setEmail(""); // Clear the email input field
    setMessage(""); // Clear the message input field
    setTimeout(() => {
      setSubmitSuc(false); // After 3 seconds, set the submitSuc state variable back to false to hide the success message
    }, 3000);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-4">
        <div className="d-flex flex-column">
          <label htmlFor="name" className="pb-1 label-style">
            NAME
          </label>
          <input
            name="user_name"
            id="name"
            type="text"
            className="input-style"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update the name state variable when the input value changes
          />
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="email" className="pb-1 label-style">
            EMAIL
          </label>
          <input
            name="user_email"
            type="email"
            id="email"
            className="input-style"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the email state variable when the input value changes
          />
          {emailErr && (
            <p className="error-message text-end mt-1">
              Sorry, this format is invalid.
            </p>
          )}
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="message" className="pb-1 label-style">
            MESSAGE
          </label>
          <textarea
            name="message"
            type="text"
            id="message"
            className="input-style"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update the message state variable when the input value changes
          />
        </div>
      </div>
      <div className="text-end">
        {!submitSuc ? (
          <Button>SEND MESSAGE</Button> // Render the "SEND MESSAGE" button if the form has not been successfully submitted
        ) : (
          <Button classes="button brand-color">
            MESSAGE SENT <FontAwesomeIcon icon={faCheck} /> // Render the success message if the form has been successfully submitted
          </Button>
        )}
      </div>
    </form>
  );
}
