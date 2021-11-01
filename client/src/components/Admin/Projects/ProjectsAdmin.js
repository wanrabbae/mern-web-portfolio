import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createProject, deleteProject } from '../../../actions/projectAction';

function ProjectsAdmin() {
    const data = useSelector(state => state.projects);
    const dispatch = useDispatch();
    const [isPending, setIsPending] = useState(false);
    const [projects, setProjects] = useState({
        title: '',
        description: '',
        technologies: '',
        link: '',
        github: '',
        image: '',
    });

    let formData = new FormData();

    const createProjetHandler = async () => {
        setIsPending(true);

        formData.append('title', projects.title);
        formData.append('description', projects.description);
        formData.append('technologies', projects.technologies);
        formData.append('link', projects.link);
        formData.append('github', projects.github);
        formData.append('image', projects.image);

        await dispatch(createProject(formData));

        setProjects({
            title: '',
            description: '',
            technologies: '',
            link: '',
            github: '',
            image: '',
        });

        document.getElementById('image').value = '';

        setIsPending(false);
    }

    const deleteProjectHandler = (id) => {
        dispatch(deleteProject(id));
    }

    const project = data.map((prj, i) => {
        return (
            <tr key={prj._id} className="align-middle">
                <td>{i + 1}</td>
                <td>
                    <img src={prj.image.url} alt="logo" width="250" className="img-fluid" />
                </td>
                <td>{prj.title}</td>
                <td>{prj.description}</td>
                <td>{prj.technologies}</td>
                <td>
                    <a href={prj.link}>Link</a>
                </td>
                <td>
                    <a href={prj.github}>Link</a>
                </td>
                <td>
                    <button onClick={() => deleteProjectHandler(prj._id)} className="btn btn-danger me-2">Delete</button>
                    <button className="btn btn-warning text-white" >Edit</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Projects Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-right" data-aos-duration="1000">
                <div className="col-md-12">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#createPrj">Add Project</button>
                        <button className="btn btn-primary" type="button">
                            <NavLink to="/projects" className="text-white text-decoration-none">Preview Content</NavLink>
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Technologies</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Github</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? <tr>
                                    <td colSpan="9" className="text-center">
                                        <div className="alert alert-warning" role="alert">
                                            No Projects Content
                                        </div>
                                    </td>
                                </tr> : project}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal crate Project */}
            <div className="modal fade" id="createPrj">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Project</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input value={projects.title} name="title" required type="text" className={`form-control text-white bg-transparent`} id="title" onChange={e => setProjects({ ...projects, title: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="technologies">Technologies</label>
                                <input value={projects.technologies} name="technologies" required type="text" className={`form-control text-white bg-transparent`} id="technologies" onChange={e => setProjects({ ...projects, technologies: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="link">Link Project (Demo)</label>
                                <input value={projects.link} name="link" required type="text" className={`form-control text-white bg-transparent`} id="link" onChange={e => setProjects({ ...projects, link: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="github">Github Project</label>
                                <input value={projects.github} name="github" required type="text" className={`form-control text-white bg-transparent`} id="github" onChange={e => setProjects({ ...projects, github: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea value={projects.description} name="description" id="description" className="form-control text-white bg-transparent" cols="20" rows="4" onChange={e => setProjects({ ...projects, description: e.target.value })}></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image">Upload Image</label>
                                <input name="image" required type="file" className={`form-control text-white bg-transparent`} id="image" onChange={e => setProjects({ ...projects, image: e.target.files[0] })} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            {
                                isPending ?
                                    <button type="button" className="btn btn-primary" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Saving...
                                    </button>
                                    :
                                    <button type="button" className="btn btn-primary" onClick={createProjetHandler}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsAdmin;