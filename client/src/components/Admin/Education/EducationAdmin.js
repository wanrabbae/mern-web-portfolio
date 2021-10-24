import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEducation, createEducation } from '../../../actions/educationAction';
// import moment from 'moment';

function EducationAdmin() {
    const { data } = useSelector(state => state.educations);
    const dispatch = useDispatch();
    const [educations, setEducations] = useState({
        title: '',
        school: '',
        city: '',
        startDate: '',
        endDate: '',
    });

    const createEducationHandler = (e) => {
        e.preventDefault();
        createEducation(educations)
    }

    const deleteHandler = (id) => {
        dispatch(deleteEducation(id))
    }

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
                    <button onClick={() => deleteHandler(edu._id)} className="btn btn-danger me-2">Delete</button>
                    <button className="btn btn-warning text-white" >Edit</button>
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
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#createEdu">Add Education</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
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
            {/* Modal crate education */}
            <div className="modal fade" id="createEdu">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Education</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-group mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input name="title" required type="text" className={`form-control text-white bg-transparent`} id="title" onChange={e => setEducations({ ...educations, title: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="school">School</label>
                                    <input name="school" required type="text" className={`form-control text-white bg-transparent`} id="school" onChange={e => setEducations({ ...educations, school: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="city">City</label>
                                    <input name="city" required type="text" className={`form-control text-white bg-transparent`} id="city" onChange={e => setEducations({ ...educations, city: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input name="startDate" required type="date" className={`form-control text-white bg-transparent`} id="startDate" onChange={e => setEducations({ ...educations, startDate: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="endDate">End Date</label>
                                    <input name="endDate" required type="date" className={`form-control text-white bg-transparent`} id="endDate" onChange={e => setEducations({ ...educations, endDate: e.target.value })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="submit" name="submit" className="btn btn-primary" onClick={createEducationHandler}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >


    );
}

export default EducationAdmin;