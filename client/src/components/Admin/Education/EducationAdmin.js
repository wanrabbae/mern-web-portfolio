import React from 'react';
import { useSelector } from 'react-redux';
// import moment from 'moment';

function EducationAdmin() {
    const { data } = useSelector(state => state.educations);

    if (data === undefined) {
        return <div>Loading...</div>
    }

    const education = data.map((edu, i) => {
        return (
            <tr key={edu._id}>
                <td>{i + 1}</td>
                <td>{edu.title}</td>
                <td>{edu.school}</td>
                <td>{edu.city}</td>
                <td>{edu.startDate}</td>
                <td>{edu.endDate}</td>
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
                    <h2>Education Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-left" data-aos-duration="1000">
                <div className="col-md-12">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button class="btn btn-success" type="button">Add Education</button>
                    </div>
                    <div className="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">School</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationAdmin;