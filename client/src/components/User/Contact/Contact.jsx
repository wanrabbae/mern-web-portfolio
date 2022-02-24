import React, { useState } from "react";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { createContact } from "../../../actions/contactAction";

function Contact() {
  const dispatch = useDispatch();

  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isPending, setIsPending] = useState(false);

  const sendContactHandler = async (e) => {
    setIsPending(true);
    e.preventDefault();
    await dispatch(createContact(contacts));
    setContacts({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsPending(false);
  };

  return (
    <div className="py-5">
      <div className="row text-center">
        <div className="col">
          <h2>Contact</h2>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-md-12">
          <form data-aos-duration="1000" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-md-4 mb-3">
                <label htmlFor="name">Your name</label>
                <input
                  value={contacts.name}
                  required
                  onChange={(e) =>
                    setContacts({ ...contacts, name: e.target.value })
                  }
                  type="text"
                  className={`form-control text-white bg-transparent ${style.input}`}
                  id="name"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="email">Your email</label>
                <input
                  value={contacts.email}
                  required
                  onChange={(e) =>
                    setContacts({ ...contacts, email: e.target.value })
                  }
                  type="email"
                  className={`form-control text-white bg-transparent ${style.input}`}
                  id="email"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 mb-3">
                <label htmlFor="subject">Subject</label>
                <input
                  value={contacts.subject}
                  required
                  onChange={(e) =>
                    setContacts({ ...contacts, subject: e.target.value })
                  }
                  type="text"
                  className={`form-control text-white bg-transparent ${style.input}`}
                  id="subject"
                />
              </div>
              <div className="col-md-8 mb-5">
                <label htmlFor="message">Your message</label>
                <textarea
                  value={contacts.message}
                  required
                  onChange={(e) =>
                    setContacts({ ...contacts, message: e.target.value })
                  }
                  name="message"
                  id="message"
                  row="30"
                  cols="10"
                  className={`form-control text-white bg-transparent h-100 ${style.input}`}
                ></textarea>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                {isPending ? (
                  <button
                    disabled
                    className={`btn ${style.btnSend} text-white`}
                    type="submit"
                    name="submit"
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </button>
                ) : (
                  <button
                    onClick={sendContactHandler}
                    className={`btn ${style.btnSend} text-white`}
                    type="submit"
                    name="submit"
                  >
                    Send
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
