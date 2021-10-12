import React from 'react';
import { useSelector } from 'react-redux';

function ExperienceAdmin() {
    const { data } = useSelector(state => state.experiences);

    if (data === undefined) return <div>Loading...</div>

    const experience = data.map((exp) => {
        return (
            <tr key={exp._id}>
                <td>1</td>
                <td>{exp.title}</td>
                <td>{exp.company}</td>
                <td>{exp.city}</td>
                <td>{exp.startDate}</td>
                <td>{exp.endDate}</td>
                <td>{exp.description}</td>
                <td>{exp.technologies}</td>
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
                    <h2>Experience Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-right" data-aos-duration="1000">
                <div className="col-md-12">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button class="btn btn-success" type="button">Add Experience</button>
                    </div>
                    <div className="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Technologies</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {experience}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceAdmin;