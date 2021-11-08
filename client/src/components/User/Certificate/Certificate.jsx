import React from 'react';
import { useSelector } from 'react-redux';

function Certificate() {
    const certificates = useSelector(state => state.certificates);

    const certificateList = certificates.map(certificate => {
        return <>
            <div className="col-md-4" data-aos-duration="1000" data-aos="fade-down">
                <div className="card mb-3 bg-transparent shadow-sm">
                    <a href={certificate.image.url} target="_blank" rel="noopener noreferrer">
                        <img src={certificate.image.url} className="card-img-top" alt="certificate" />
                    </a>
                </div>
            </div>
        </>
    });

    return (
        <div className="py-5">
            {
                certificates.length === 0 ? 
                <div className="text-center">
                    <span className="spinner-border spinner-border-sm" style={{ width: '3rem', height: '3rem' }} role="status" aria-hidden="true"></span>
                </div>
                :
                <>
                    <div className="row text-center">
                        <div className="col">
                            <h2>Certificate</h2>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-start">
                        {certificateList}
                    </div>
                </>
            }
        </div>
    );
}

export default Certificate;