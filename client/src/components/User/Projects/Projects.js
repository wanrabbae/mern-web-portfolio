import React from 'react';
import style from './Projects.module.css';
import { useSelector } from 'react-redux';

function Projects() {
    const projects = useSelector(state => state.projects);

    if (projects.length === 0) {
        return <div>
            Loading...
        </div>
    }

    const projectsList = projects.map(project => {
        return <>
            <div className="col-md-4 mb-3" data-aos-duration="1000" data-aos="zoom-out">
                <div className="card mb-3 h-100 bg-transparent shadow-sm">
                    <img src={project.image.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <h6 className="card-subtitle my-3">{project.description}</h6>
                        <p className="card-text">
                            <span className={style.colorBlue}>Technologies:</span> {project.technologies}
                        </p>
                        <p className="card-text">
                            <a target="_blank" rel="noreferrer" href={project.link} className={`btn text-white ${style.btnDemo} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fas fa-external-link-alt"></i> Demo</a>
                            <a target="_blank" rel="noreferrer" href={project.github} className={`btn text-white ${style.btnGithub} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fab fa-github"></i> GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    });

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Projects</h2>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                {projectsList}
            </div>
        </div>
    );
}

export default Projects;