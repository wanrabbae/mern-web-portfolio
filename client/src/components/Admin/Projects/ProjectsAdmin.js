import React from 'react';
import logoImg from '../../../assets/images/logo.png';

function ProjectsAdmin() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Projects Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-right" data-aos-duration="1000">
                <div className="col-md-12">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button class="btn btn-success" type="button">Add Project</button>
                    </div>
                    <div className="table-responsive">
                        <table class="table">
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
                                <tr className="align-middle">
                                    <th scope="row">1</th>
                                    <td>
                                        <img src={logoImg} alt="logo" width="250" className="img-fluid" />
                                    </td>
                                    <td>Dynamic Personal Website</td>
                                    <td>A Dynamic Personal Website With M.E.R.N Stack</td>
                                    <td>Mongo DB, Express JS, React JS, Node JS</td>
                                    <td>
                                        <a href="#">Link</a>
                                    </td>
                                    <td>
                                        <a href="#">Link</a>
                                    </td>
                                    <td>
                                        <a href="#" className="btn btn-danger me-2">Delete</a>
                                        <a href="#" className="btn btn-warning text-white" >Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsAdmin;