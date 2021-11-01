import React from 'react';
import style from './Education.module.css';
import { useSelector } from 'react-redux';

function Education() {
    const education = useSelector(state => state.educations);

    if (education.length === 0) {
        return <div>
            Loading...
        </div>
    }

    const educationList = education.map(edu => {
        return <>
            <div className="col-md-10" data-aos-duration="1000" data-aos="zoom-in">
                <div className={`card h-100 bg-transparent border-0 ${style.cardWrap}`}>
                    <div className="card-body">
                        {/* TITTLE */}
                        <h5 className="card-title">
                            {edu.title}

                        </h5>
                        {/* School And City */}
                        <h6 className={`card-subtitle my-3 ${style.colorBlue}`}>
                            {edu.school} - {edu.city}

                        </h6>
                        {/* Start Date And End Date */}
                        <p className="card-text">
                            {edu.startDate} - {edu.endDate}
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    });

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Education</h2>
                </div>
            </div>
            <div className="row mt-3">
                {educationList}
            </div>
        </div>
    );
}

export default Education;