import React from 'react';
import { useSelector } from 'react-redux';

function Skills() {
    const skills = useSelector(state => state.skills);

    return (
        <div className="py-5">
            {
                skills.length === 0 ? 
                <div className="text-center">
                    <span className="spinner-border spinner-border-sm" style={{ width: '3rem', height: '3rem' }} role="status" aria-hidden="true"></span>
                </div>
                :
                <>
                    <div className="row text-center">
                        <div className="col">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                            <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                                <div className="card-body">
                                    <h4 className="card-title"><b>Languages</b></h4>

                                    {skills.map(sk =>{
                                        return <h6 className="card-subtitle my-3">{sk.languages}</h6>
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                            <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                                <div className="card-body">
                                    <h4 className="card-title"><b>Frontend</b></h4>

                                    {skills.map(sk =>{
                                        return <h6 className="card-subtitle my-3">{sk.frontend}</h6>
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                            <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                                <div className="card-body">
                                    <h4 className="card-title"><b>Backend</b></h4>

                                    {skills.map(sk =>{
                                        return <h6 className="card-subtitle my-3">{sk.backend}</h6>
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                            <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                                <div className="card-body">
                                    <h4 className="card-title"><b>Tools</b></h4>

                                    {skills.map(sk =>{
                                        return <h6 className="card-subtitle my-3">{sk.tools}</h6>
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Skills;