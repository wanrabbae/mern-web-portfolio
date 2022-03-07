import React from "react";
import style from "./Projects.module.css";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

function Projects() {
  const projects = useSelector((state) => state.projects);

  const projectsList = projects.map((project) => {
    return (
      <>
        <div
          className="col-md-4 mb-3"
          data-aos-duration="1000"
          data-aos="zoom-out"
        >
          <div className="card mb-3 h-100 bg-transparent shadow-sm">
            <img src={project.image.url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <h6 className="card-subtitle my-3">
                {parse(project.description)}
              </h6>
              <p className="card-text">
                <span className={style.colorBlue}>Technologies:</span>{" "}
                {project.technologies}
              </p>
            </div>
            <div className="card-footer">
              <p className="card-text">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                  className={`btn text-white ${style.btnDemo} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.github}
                  className={`btn text-white ${style.btnGithub} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="py-5">
      {projects.length === 0 ? (
        <div className="text-center">
          <span
            className="spinner-border spinner-border-sm"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        <>
          <div className="row text-center">
            <div className="col">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row mt-3 justify-content-start">{projectsList}</div>
        </>
      )}
    </div>
  );
}

export default Projects;
