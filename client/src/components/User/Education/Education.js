import React from 'react';
import style from './Education.module.css';

function Education() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Education</h2>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-md-5 mt-3">
                    <div className={`card h-100 bg-transparent ${style.cardWrap}`}>
                        <div className="card-body">
                            {/* TITTLE */}
                            <h5 className="card-title">
                                <b>
                                    <i className="fas fa-graduation-cap"></i> Engineer's Degree in Computer Science
                                </b>
                            </h5>
                            {/* School And City */}
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-university"></i> SMK Informatika Al Irsyad Al Ilamiyyah - Cirebon
                                </b>
                            </p>
                            {/* Start Date And End Date */}
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-calendar-alt"></i> May 2019 - May 2020
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                    <div className={`card h-100 bg-transparent ${style.cardWrap}`}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <b>
                                    <i className="fas fa-graduation-cap"></i> Engineer's Degree in Computer Science
                                </b>
                            </h5>
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-university"></i> SMK Informatika Al Irsyad Al Ilamiyyah - Cirebon
                                </b>
                            </p>
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-calendar-alt"></i> May 2019 - May 2020
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                    <div className={`card h-100 bg-transparent ${style.cardWrap}`}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <b>
                                    <i className="fas fa-graduation-cap"></i> Engineer's Degree in Computer Science
                                </b>
                            </h5>
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-university"></i> SMK Informatika Al Irsyad Al Ilamiyyah - Cirebon
                                </b>
                            </p>
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-calendar-alt"></i> May 2019 - May 2020
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                    <div className={`card h-100 bg-transparent ${style.cardWrap}`}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <b>
                                    <i className="fas fa-graduation-cap"></i> Engineer's Degree in Computer Science
                                </b>
                            </h5>
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-university"></i> SMK Informatika Al Irsyad Al Ilamiyyah - Cirebon
                                </b>
                            </p>
                            <p className="card-text">
                                <b>
                                    <i className="fas fa-calendar-alt"></i> May 2019 - May 2020
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;