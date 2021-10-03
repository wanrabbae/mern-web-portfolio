import React from 'react';
import certificateImg from '../../../assets/images/0001.jpg'

function Certificate() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Certificate</h2>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                <div class="col-md-4" data-aos-duration="1000" data-aos="fade-down">
                    <div class="card mb-3 bg-transparent shadow-sm">
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={certificateImg} class="card-img-top" alt="certificate" />
                        </a>
                    </div>
                </div>
                <div class="col-md-4" data-aos-duration="1000" data-aos="fade-down">
                    <div class="card mb-3 bg-transparent shadow-sm">
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={certificateImg} class="card-img-top" alt="certificate" />
                        </a>
                    </div>
                </div>
                <div class="col-md-4" data-aos-duration="1000" data-aos="fade-down">
                    <div class="card mb-3 bg-transparent shadow-sm">
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={certificateImg} class="card-img-top" alt="certificate" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;