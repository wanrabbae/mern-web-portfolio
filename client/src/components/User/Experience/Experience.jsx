import React from 'react';
import style from './Experience.module.css';
import { useSelector } from 'react-redux';

function Experience() {
    const experience = useSelector(state => state.experiences);

    const experienceList = experience.map(exp => {
        return <>
            <div className="col-md-10" data-aos-duration="1000" data-aos="zoom-in">
                <div className="card h-100 mb-4 bg-transparent border-0">
                    <div className="card-body">
                        <h5 className="card-title">{exp.title}</h5>
                        <h6 className={`card-subtitle my-3 ${style.colorBlue}`}>
                            {exp.company} - {exp.city}
                        </h6>
                        <p className="card-text">
                            {exp.startDate} - {exp.endDate}
                        </p>
                        <p className="card-text">
                            {exp.description}
                        </p>
                        <p className="card-text">
                            <span className={style.colorBlue}>Technologies:</span> {exp.technologies}
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    });

    return (
        <div className="py-5">
            {
                experience.length === 0 ? 
                <div className="text-center">
                    <span className="spinner-border spinner-border-sm" style={{ width: '3rem', height: '3rem' }} role="status" aria-hidden="true"></span>
                </div>
                :
                <>
                    <div className="row text-center">
                        <div className="col">
                            <h2>Experience</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {experienceList}
                    </div>
                </>
            }
        </div>
    );
}

export default Experience;