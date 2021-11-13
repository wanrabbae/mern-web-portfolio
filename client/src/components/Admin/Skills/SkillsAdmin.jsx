import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createSkill, deleteSkill, updateSkill } from '../../../actions/skillAction';

function SkillsAdmin() {
    const data = useSelector(state => state.skills);
    const dispatch = useDispatch();
    const [isPending, setIsPending] = useState(false);
    const [skills, setSkills] = useState({
        languages: '',
        frontend: '',
        backend: '',
        tools: '',
    })

    const createSkillHandler = async () => {
        setIsPending(true);
        await dispatch(createSkill(skills));
        setSkills({
            languages: '',
            frontend: '',
            backend: '',
            tools: '',
        })
        setIsPending(false);
    }

    const deleteSkillHandler = (id) => {
        dispatch(deleteSkill(id));
    }

    const updateHandler = async (data) => {
        setIsPending(true);
        await dispatch(updateSkill(data));
        setIsPending(false);
    }

    const skill = data.map((skl, i) => {
        return (
            <tr key={skl._id}>
                <td>{i + 1}</td>
                <td>{skl.languages}</td>
                <td>{skl.frontend}</td>
                <td>{skl.backend}</td>
                <td>{skl.tools}</td>
                <td>
                    <button onClick={() => deleteSkillHandler(skl._id)} className="btn btn-danger me-2">Delete</button>
                    <button onClick={() => 
                    setSkills({
                            languages: skl.languages,
                            frontend: skl.frontend,
                            backend:  skl.backend,
                            tools: skl.tools,
                            id: skl._id
                        }
                    )} 
                    
                    className="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target="#editSkl">Edit</button>
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
                        <button onClick={() => setSkills({
                            languages: '',
                            frontend: '',
                            backend: '',
                            tools: '',
                        })}
                        
                        className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#createSkill">Add Skills</button>

                        <button className="btn btn-primary" type="button">
                            <NavLink to="/skills" className="text-white text-decoration-none">Preview Content</NavLink>
                        </button>
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
                                {data.length === 0 ? <tr>
                                    <td colSpan="9" className="text-center">
                                        <div className="alert alert-warning" role="alert">
                                            No Skill Content
                                        </div>
                                    </td>
                                </tr> : skill}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal crate education */}
            <div className="modal fade" id="createSkill">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Skills</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label htmlFor="languages">Languages</label>
                                <input value={skills.languages} name="languages" required type="text" className={`form-control text-white bg-transparent`} id="languages" onChange={e => setSkills({ ...skills, languages: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="frontend">Frontend</label>
                                <input value={skills.frontend} name="frontend" required type="text" className={`form-control text-white bg-transparent`} id="frontend" onChange={e => setSkills({ ...skills, frontend: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="backend">Backend</label>
                                <input value={skills.backend} name="backend" required type="text" className={`form-control text-white bg-transparent`} id="backend" onChange={e => setSkills({ ...skills, backend: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="tools">Tools</label>
                                <input value={skills.tools} name="tools" required type="text" className={`form-control text-white bg-transparent`} id="tools" onChange={e => setSkills({ ...skills, tools: e.target.value })} />
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
                                    <button type="button" className="btn btn-primary" onClick={createSkillHandler}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal edit skills */}
            <div className="modal fade" id="editSkl">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Skills</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className="modal-body">
                                <input value={skills.id} type="hidden" name="id" className={`form-control text-white bg-transparent`} onChange={e => setSkills({ ...skills, id: e.target.value })} />

                                <div className="form-group mb-3">
                                    <label htmlFor="languages">Languages</label>
                                    <input value={skills.languages} name="languages" required type="text" className={`form-control text-white bg-transparent`} id="languages" onChange={e => setSkills({ ...skills, languages: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="frontend">Frontend</label>
                                    <input value={skills.frontend} name="frontend" required type="text" className={`form-control text-white bg-transparent`} id="frontend" onChange={e => setSkills({ ...skills, frontend: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="backend">Backend</label>
                                    <input value={skills.backend} name="backend" required type="text" className={`form-control text-white bg-transparent`} id="backend" onChange={e => setSkills({ ...skills, backend: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="tools">Tools</label>
                                    <input value={skills.tools} name="tools" required type="text" className={`form-control text-white bg-transparent`} id="tools" onChange={e => setSkills({ ...skills, tools: e.target.value })} />
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
                                    <button type="button" className="btn btn-primary" onClick={() => updateHandler(skills)}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsAdmin;