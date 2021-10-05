import React from 'react';

function AboutAdmin() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>About Me Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-down" data-aos-duration="1000">
                <div className="col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Content</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <a href="https://www.google.com" className="btn btn-danger me-2" onClick={() => { window.confirm('Are you sure ?'); }}>Delete</a>
                                    <a href="https://www.google.com" className="btn btn-warning">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AboutAdmin;