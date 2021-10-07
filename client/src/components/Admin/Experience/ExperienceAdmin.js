import React from 'react';

function ExperienceAdmin() {
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Student Software Engineer</td>
                                    <td>SMK Informatika Al-Irsyad Al-Islamiyyah</td>
                                    <td>Cirebon</td>
                                    <td>01-01-2021</td>
                                    <td>01-01-2023</td>
                                    <td>Lorem ipsum dolor sit</td>
                                    <td>M.E.R.N Stack</td>
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

export default ExperienceAdmin;