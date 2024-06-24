import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { validEmail } from "./miscellaneous/regex";
import Button from "./miscellaneous/button";
import rings from "../assets/images/pattern-rings.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Footer({ devData }) {
  const socialMedia = devData.basics;
  return (
    <footer className="footer py-5" id="contactForm">
      <section className="container">
        <div className="row gap-5 justify-content-lg-between">
          <div className="col col-lg-4">
            <div className="text-center text-lg-start d-flex flex-column gap-4 position-relative">
              <h2 className="heading-xl">Contact</h2>
              <p>
                If you have a burning question you would like to ask, a job
                position that I could potentially fill or a project that I could
                help with. Do contact me and I will reply as soon as I am
                available.
              </p>
              <img
                src={rings}
                alt={rings}
                className="position-absolute end-50 top-100 z-1 desktopRings"
              />
            </div>
          </div>
          <div className="col col-lg-5">
            <ContactForm />
          </div>
        </div>

        <hr className="border my-5" />

        <div className="row py-lg-2 gap-4 justify-content-center align-items-center">
          <div className="col-6 col-lg text-center text-lg-start">
            <h3 className="heading-dev">
              elias<span className="brand-color">.</span>ekornås
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [message, setMessage] = useState("");
  const [submitSuc, setSubmitSuc] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
      return;
    }

    emailjs
      .sendForm(
        "service_7hpyixo",
        "template_m5jv27d",
        form.current,
        "cvUymwIjUhxtPjW9K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmitSuc(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setSubmitSuc(false);
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="text-end">
        {!submitSuc ? (
          <Button>SEND MESSAGE</Button>
        ) : (
          <Button classes="button brand-color">
            MESSAGE SENT <FontAwesomeIcon icon={faCheck} />
          </Button>
        )}
      </div>
    </form>
  );
}
