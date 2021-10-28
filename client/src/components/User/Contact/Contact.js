import React, { useState } from 'react';
import style from './Contact.module.css';
import { toast } from 'react-toastify';

function Contact() {
    const [contacts, setContacts] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const sendContactHandler = (e) => {
        e.preventDefault();
        toast.success('This send contact feature still not developed!');
        setContacts({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

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
                                <input value={contacts.name} required onChange={e => setContacts({ ...contacts, name: e.target.value })} type="text" className={`form-control text-white bg-transparent ${style.input}`} id="name" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="email">Your email</label>
                                <input value={contacts.email} required onChange={e => setContacts({ ...contacts, email: e.target.value })} type="text" className={`form-control text-white bg-transparent ${style.input}`} id="email" />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 mb-3">
                                <label htmlFor="subject">Subject</label>
                                <input value={contacts.subject} required onChange={e => setContacts({ ...contacts, subject: e.target.value })} type="text" className={`form-control text-white bg-transparent ${style.input}`} id="subject" />
                            </div>
                            <div className="col-md-8 mb-5">
                                <label htmlFor="message">Your message</label>
                                <textarea value={contacts.message} required onChange={e => setContacts({ ...contacts, message: e.target.value })} name="message" id="message" row="30" cols="10" className={`form-control text-white bg-transparent h-100 ${style.input}`}></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <button onClick={sendContactHandler} className={`btn ${style.btnSend} text-white`} type="submit" name="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-4">
                    <div className="row justify-content-center">
                        <div className="row flex-column text-center mb-3">
                            <div className="col">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col">
                                <h6>Indonesia, Jawa Barat, Cirebon</h6>
                            </div>
                        </div>
                        <div className="row flex-column text-center mb-3">
                            <div className="col">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col">
                                <h6>Indonesia, Jawa Barat, Cirebon</h6>
                            </div>
                        </div>
                        <div className="row flex-column text-center mb-3">
                            <div className="col">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col">
                                <h6>Indonesia, Jawa Barat, Cirebon</h6>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;