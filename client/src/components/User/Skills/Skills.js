import React from 'react';
import { useSelector } from 'react-redux';

function Skills() {
    const skills = useSelector(state => state.skills);

    if (skills.length === 0) {
        return <div>
            Loading...
        </div>
    }

    // const skillsList = skills.map(skill => {
    //     return <>
    //         <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
    //             <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
    //                 <div className="card-body">
    //                     <h5 className="card-title"><b>Languages</b></h5>
    //                     <h6 className="card-subtitle my-3">{skill.languages}</h6>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
    //             <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
    //                 <div className="card-body">
    //                     <h5 className="card-title"><b>Frontend</b></h5>
    //                     <h6 className="card-subtitle my-3">{skill.frontend}</h6>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
    //             <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
    //                 <div className="card-body">
    //                     <h5 className="card-title"><b>Backend</b></h5>
    //                     <h6 className="card-subtitle my-3">{skill.backend}</h6>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
    //             <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
    //                 <div className="card-body">
    //                     <h5 className="card-title"><b>Tools</b></h5>
    //                     <h6 className="card-subtitle my-3">{skill.tools}</h6>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // });

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Skills</h2>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                    <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                        <div className="card-body">
                            <h5 className="card-title"><b>Languages</b></h5>

                            <h6 className="card-subtitle my-3">HTML && CSS</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">PHP</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                    <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                        <div className="card-body">
                            <h5 className="card-title"><b>Frontend</b></h5>

                            <h6 className="card-subtitle my-3">HTML && CSS</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">PHP</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                    <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                        <div className="card-body">
                            <h5 className="card-title"><b>Backend</b></h5>

                            <h6 className="card-subtitle my-3">HTML && CSS</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">PHP</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" data-aos-duration="1000" data-aos="flip-right">
                    <div className={`card mb-3 bg-transparent border-0 h-100 shadow-sm`}>
                        <div className="card-body">
                            <h5 className="card-title"><b>Tools</b></h5>

                            <h6 className="card-subtitle my-3">HTML && CSS</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">PHP</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                            <h6 className="card-subtitle my-3">JavaScript</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;