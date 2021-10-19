import React from 'react';
import { useSelector } from 'react-redux';

function ProjectsAdmin() {
    const { data } = useSelector(state => state.projects);

    if (data === undefined) return <div>Loading...</div>

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
                    <a href="www.google.com" className="btn btn-danger me-2">Delete</a>
                    <a href="www.google.com" className="btn btn-warning text-white" >Edit</a>
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
                        <button className="btn btn-success" type="button">Add Project</button>
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
                                {project}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsAdmin;