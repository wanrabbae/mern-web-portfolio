import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';

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
                                <td>sada</td>
                                <td>
                                    <a href="#" className="btn btn-danger me-2" onClick={notifyDelete}>Delete</a>
                                    <a href="#" className="btn btn-warning" onClick={notifyEdit}>Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-5">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
    );
}

export default AboutAdmin;