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
            <div className="row mt-3">
                <div className="col-md-10">
                    <div className={`card h-100 bg-transparent border-0 ${style.cardWrap}`}>
                        <div className="card-body">
                            {/* TITTLE */}
                            <h5 className="card-title">
                                Engineer's Degree in Computer Science

                            </h5>
                            {/* School And City */}
                            <h6 className={`card-subtitle my-3 ${style.colorBlue}`}>
                                SMK Informatika Al Irsyad Al Ilamiyyah - Cirebon

                            </h6>
                            {/* Start Date And End Date */}
                            <p className="card-text">
                                May 2019 - May 2020
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-10">
                    <div className={`card h-100 bg-transparent border-0 ${style.cardWrap}`}>
                        <div className="card-body">
                            {/* TITTLE */}
                            <h5 className="card-title">
                                Engineer's Degree in Computer Science

                            </h5>
                            {/* School And City */}
                            <h6 className={`card-subtitle my-3 ${style.colorBlue}`}>
                                SMK Informatika Al Irsyad Al Ilamiyyah - Cirebon

                            </h6>
                            {/* Start Date And End Date */}
                            <p className="card-text">
                                May 2019 - May 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;