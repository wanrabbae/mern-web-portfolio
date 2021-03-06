import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteEducation, createEducation, updateEducation } from '../../../actions/educationAction';
// import moment from 'moment';

function EducationAdmin() {
    const data = useSelector(state => state.educations);
    const dispatch = useDispatch();
    const [isPending, setIsPending] = useState(false);
    const [educations, setEducations] = useState({
        title: '',
        school: '',
        city: '',
        startDate: '',
        endDate: '',
    });

    const createEducationHandler = async () => {
        setIsPending(true);
        await dispatch(createEducation(educations));
        setEducations({
            title: '',
            school: '',
            city: '',
            startDate: '',
            endDate: '',
            id: '',
        });
        setIsPending(false);
    }

    const deleteHandler = (id) => {
        dispatch(deleteEducation(id));
    }

    const updateHandler = async (dataForUpdate) => {
        setIsPending(true);
        await dispatch(updateEducation(dataForUpdate));
        setIsPending(false);
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
                    <button onClick={() => 
                    setEducations({
                        title: edu.title,
                        school: edu.school,
                        city: edu.city,
                        startDate: edu.startDate,
                        endDate: edu.endDate,
                        id: edu._id
                    }
                )} 
                    
                    className="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#editEdu">Edit</button>
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
                        <button onClick={() => setEducations({
                            title: '',
                            school: '',
                            city: '',
                            startDate: '',
                            endDate: '',
                        })} 
                        className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#createEdu">Add Education</button>

                        <button className="btn btn-primary" type="button">
                            <NavLink to="/education" className="text-white text-decoration-none">Preview Content</NavLink>
                        </button>
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
                                {data.length === 0 ? <tr>
                                    <td colSpan="9" className="text-center">
                                        <div className="alert alert-warning" role="alert">
                                            No Education Content
                                        </div>
                                    </td>
                                </tr> : education}
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
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input value={educations.title} name="title" required type="text" className={`form-control text-white bg-transparent`} id="title" onChange={e => setEducations({ ...educations, title: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="school">School</label>
                                <input value={educations.school} name="school" required type="text" className={`form-control text-white bg-transparent`} id="school" onChange={e => setEducations({ ...educations, school: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="city">City</label>
                                <input value={educations.city} name="city" required type="text" className={`form-control text-white bg-transparent`} id="city" onChange={e => setEducations({ ...educations, city: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="startDate">Start Date</label>
                                <input value={educations.startDate} name="startDate" required type="date" className={`form-control text-white bg-transparent`} id="startDate" onChange={e => setEducations({ ...educations, startDate: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="endDate">End Date</label>
                                <input value={educations.endDate} name="endDate" required type="date" className={`form-control text-white bg-transparent`} id="endDate" onChange={e => setEducations({ ...educations, endDate: e.target.value })} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            {
                                isPending ?
                                    <button type="button" className="btn btn-primary" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Saving...
                                    </button>
                                    :
                                    <button type="button" className="btn btn-primary" onClick={createEducationHandler}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Modal edit education */}
            <div className="modal fade" id="editEdu">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Education</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className="modal-body">
                                <input value={educations.id} type="hidden" name="id" className={`form-control text-white bg-transparent`} onChange={e => setEducations({ ...educations, id: e.target.value })} />

                                <div className="form-group mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input value={educations.title} name="title" required type="text" className={`form-control text-white bg-transparent`} id="title" onChange={e => setEducations({ ...educations, title: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="school">School</label>
                                    <input value={educations.school} name="school" required type="text" className={`form-control text-white bg-transparent`} id="school" onChange={e => setEducations({ ...educations, school: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="city">City</label>
                                    <input value={educations.city} name="city" required type="text" className={`form-control text-white bg-transparent`} id="city" onChange={e => setEducations({ ...educations, city: e.target.value })} />
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
                            {
                                isPending ?
                                    <button type="button" className="btn btn-primary" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Saving...
                                    </button>
                                    :
                                    <button type="button" className="btn btn-primary" onClick={() => updateHandler(educations)}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationAdmin;