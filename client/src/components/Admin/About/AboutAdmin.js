import React from 'react';
import { useSelector } from 'react-redux';

function AboutAdmin() {
    const data = useSelector(state => state.abouts);

    const about = data.map((abt, i) => {
        return (
            <tr key={abt._id} className="align-middle">
                <td>{i + 1}</td>
                <td><img src={abt.profile.url} alt="logo" width="150" className="img-fluid" /></td>
                <td>{abt.content}</td>
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
                    <h2>About Me Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-right" data-aos-duration="1000">
                <div className="col-md-12">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button className="btn btn-success" type="button">Add About</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {about}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutAdmin;