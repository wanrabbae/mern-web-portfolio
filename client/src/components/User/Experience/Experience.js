import React from 'react';
import style from './Experience.module.css'

function Experience() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Experience</h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-10" data-aos-duration="1000" data-aos="zoom-in">
                    <div className="card h-100 mb-4 bg-transparent border-0">
                        <div className="card-body">
                            <h5 className="card-title">Software Engineer</h5>
                            <h6 className={`card-subtitle my-3 ${style.colorBlue}`}>
                                Google - City
                            </h6>
                            <p className="card-text">
                                jan 2020 - dec 2020
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum tincidunt est vitae ultrices accumsan.
                                Aliquam ornare lacus adipiscing, posuere lectus et,
                                blandit augue.
                            </p>
                            <p className="card-text">
                                <span className={style.colorBlue}>Technologies:</span> React, Redux, Node.js, Express, MongoDB,
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-10" data-aos-duration="1000" data-aos="zoom-in">
                    <div className="card h-100 mb-4 bg-transparent border-0">
                        <div className="card-body">
                            <h5 className="card-title">Backend Engineer</h5>
                            <h6 className={`card-subtitle my-3 ${style.colorBlue}`}>
                                Facebook - City
                            </h6>
                            <p className="card-text">
                                jan 2021 - dec 2021
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum tincidunt est vitae ultrices accumsan.
                                Aliquam ornare lacus adipiscing, posuere lectus et,
                                blandit augue.
                            </p>
                            <p className="card-text">
                                <span className={style.colorBlue}>Technologies:</span> React, Redux, Node.js, Express, MongoDB,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;