import React from 'react';
import style from './Contact.module.css'

function Contact() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Contact</h2>
                </div>
            </div>
            <div className="row mt-3 justify-content-center align-items-center">
                <div className="col-md-8">
                    <form>
                        <div className="row justify-content-center">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="name">Your name</label>
                                <input required type="text" className={`form-control text-white bg-transparent ${style.input}`} id="name" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="email">Your email</label>
                                <input required type="text" className={`form-control text-white bg-transparent ${style.input}`} id="email" />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 mb-3">
                                <label htmlFor="subject">Subject</label>
                                <input required type="text" className={`form-control text-white bg-transparent ${style.input}`} id="subject" />
                            </div>
                            <div className="col-md-8 mb-3">
                                <label htmlFor="message">Your message</label>
                                <textarea required name="message" id="message" row="30" cols="10" className={`form-control text-white bg-transparent ${style.input}`}></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <button className={`btn ${style.btnSend} text-white`} type="submit" name="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="row flex-column">
                        <div className="col">
                            <h6>
                                <span className="text-white text-center">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <br />
                                    Indonesia, Jawa Barat, Cirebon
                                </span>
                            </h6>
                        </div>
                        <div className="col">
                            <h6>
                                <span className="text-white text-center">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <br />
                                    Indonesia, Jawa Barat, Cirebon
                                </span>
                            </h6>
                        </div>
                        <div className="col">
                            <h6>
                                <span className="text-white text-center">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <br />
                                    Indonesia, Jawa Barat, Cirebon
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;