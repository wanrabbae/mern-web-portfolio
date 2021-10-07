import React, { useState } from 'react';
import { toast } from 'react-toastify';
import logoImg from '../../../assets/images/logo.png';

function AboutAdmin() {
    const notifyEdit = () => toast.success('You clicked the button Edit!')
    const notifyDelete = () => toast.warn('You clicked the button Delete!')

    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate);

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>About Me Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-right" data-aos-duration="1000">
                <div className="col-md-12">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button class="btn btn-success" type="button">Add About</button>
                    </div>
                    <div className="table-responsive">
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
                                <tr className="align-middle">
                                    <th scope="row">1</th>
                                    <td>
                                        <img src={logoImg} alt="logo" width="250" className="img-fluid" />
                                    </td>
                                    <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempore sunt inventore sequi earum temporibus esse fugiat porro expedita corrupti! lorem20</td>
                                    <td>
                                        <a href="#" className="btn btn-danger me-2" onClick={notifyDelete}>Delete</a>
                                        <a href="#" className="btn btn-warning text-white" onClick={notifyEdit}>Edit</a>
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

export default AboutAdmin;