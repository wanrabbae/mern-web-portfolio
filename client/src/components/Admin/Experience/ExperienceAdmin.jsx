import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createExperience, deleteExperience, updateExperience } from '../../../actions/experienceAction';

function ExperienceAdmin() {
    const data = useSelector(state => state.experiences);
    const dispatch = useDispatch();
    const [isPending, setIsPending] = useState(false);
    const [experiences, setExperiences] = useState({
        title: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        description: '',
        technologies: '',
    });

    const createExperienceHandler = async () => {
        setIsPending(true);
        await dispatch(createExperience(experiences));
        setExperiences({
            title: '',
            company: '',
            city: '',
            startDate: '',
            endDate: '',
            description: '',
            technologies: '',
        });
        setIsPending(false);
    }

    const deleteExeperienceHandler = (id) => {
        dispatch(deleteExperience(id));
    }

    const updateHandler = async (dataForUpdate) => {
        setIsPending(true);
        await dispatch(updateExperience(dataForUpdate));
        setIsPending(false);
    }

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
                    <button className="btn btn-danger me-2" onClick={() => deleteExeperienceHandler(exp._id)}>Delete</button>
                    <button onClick={() => 
                        setExperiences({
                                title: exp.title,
                                company: exp.company,
                                city: exp.city,
                                startDate: exp.startDate,
                                endDate: exp.endDate,
                                description: exp.description,
                                technologies: exp.technologies,
                                id: exp._id
                            }
                        )}
                    className="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#editExp">Edit</button>
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
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button onClick={() => setExperiences({
                            title: '',
                            company: '',
                            city: '',
                            startDate: '',
                            endDate: '',
                            description: '',
                            technologies: '',
                        })} 
                        className="btn btn-success" data-bs-toggle="modal" data-bs-target="#createExp" type="button">Add Experience</button>

                        <button className="btn btn-primary" type="button">
                            <NavLink to="/experience" className="text-white text-decoration-none">Preview Content</NavLink>
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
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
                                {data.length === 0 ? <tr>
                                    <td colSpan="9" className="text-center">
                                        <div className="alert alert-warning" role="alert">
                                            No Experience Content
                                        </div>
                                    </td>
                                </tr> : experience}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal crate experience */}
            <div className="modal fade" id="createExp">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Experience</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input value={experiences.title} name="title" required type="text" className={`form-control text-white bg-transparent`} id="title" onChange={e => setExperiences({ ...experiences, title: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="company">Company</label>
                                <input value={experiences.company} name="company" required type="text" className={`form-control text-white bg-transparent`} id="company" onChange={e => setExperiences({ ...experiences, company: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="city">City</label>
                                <input value={experiences.city} name="city" required type="text" className={`form-control text-white bg-transparent`} id="city" onChange={e => setExperiences({ ...experiences, city: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea value={experiences.description} name="description" required type="text" className={`form-control text-white bg-transparent`} id="description" onChange={e => setExperiences({ ...experiences, description: e.target.value })} cols="20" rows="5"></textarea>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="technologies">Technologies</label>
                                <input value={experiences.technologies} name="technologies" required type="text" className={`form-control text-white bg-transparent`} id="technologies" onChange={e => setExperiences({ ...experiences, technologies: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="startDate">Start Date</label>
                                <input value={experiences.startDate} name="startDate" required type="date" className={`form-control text-white bg-transparent`} id="startDate" onChange={e => setExperiences({ ...experiences, startDate: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="endDate">End Date</label>
                                <input value={experiences.endDate} name="endDate" required type="date" className={`form-control text-white bg-transparent`} id="endDate" onChange={e => setExperiences({ ...experiences, endDate: e.target.value })} />
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
                                    <button type="button" className="btn btn-primary" onClick={createExperienceHandler}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal edit experience */}
            <div className="modal fade" id="editExp">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Experience</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <input value={experiences.id} type="hidden" name="id" className={`form-control text-white bg-transparent`} onChange={e => setExperiences({ ...experiences, id: e.target.value })} />

                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input value={experiences.title} name="title" required type="text" className={`form-control text-white bg-transparent`} id="title" onChange={e => setExperiences({ ...experiences, title: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="company">Company</label>
                                <input value={experiences.company} name="company" required type="text" className={`form-control text-white bg-transparent`} id="company" onChange={e => setExperiences({ ...experiences, company: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="city">City</label>
                                <input value={experiences.city} name="city" required type="text" className={`form-control text-white bg-transparent`} id="city" onChange={e => setExperiences({ ...experiences, city: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea value={experiences.description} name="description" required type="text" className={`form-control text-white bg-transparent`} id="description" onChange={e => setExperiences({ ...experiences, description: e.target.value })} cols="20" rows="5"></textarea>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="technologies">Technologies</label>
                                <input value={experiences.technologies} name="technologies" required type="text" className={`form-control text-white bg-transparent`} id="technologies" onChange={e => setExperiences({ ...experiences, technologies: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="startDate">Start Date</label>
                                <input value={experiences.startDate} name="startDate" required type="date" className={`form-control text-white bg-transparent`} id="startDate" onChange={e => setExperiences({ ...experiences, startDate: e.target.value })} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="endDate">End Date</label>
                                <input value={experiences.endDate} name="endDate" required type="date" className={`form-control text-white bg-transparent`} id="endDate" onChange={e => setExperiences({ ...experiences, endDate: e.target.value })} />
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
                                    <button type="button" className="btn btn-primary" onClick={() => updateHandler(experiences)} >Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceAdmin;