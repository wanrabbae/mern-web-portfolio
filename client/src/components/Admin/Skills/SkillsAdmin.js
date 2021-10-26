import React from 'react';
import { useSelector } from 'react-redux';

function SkillsAdmin() {
    const data = useSelector(state => state.skills);

    const skill = data.map((skl, i) => {
        return (
            <tr key={skl._id}>
                <td>{i + 1}</td>
                <td>{skl.languages}</td>
                <td>{skl.frontend}</td>
                <td>{skl.backend}</td>
                <td>{skl.tools}</td>
                <td>
                    <button className="btn btn-danger me-2">Delete</button>
                    <button className="btn btn-warning text-white" >Edit</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Skills Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-left" data-aos-duration="1000">
                <div className="col-md-12">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button className="btn btn-success" type="button">Add Skills</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Languages</th>
                                    <th scope="col">Frontend</th>
                                    <th scope="col">Backend</th>
                                    <th scope="col">Tools</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skill}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsAdmin;