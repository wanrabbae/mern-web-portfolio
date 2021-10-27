import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCertificate, deleteCertificate } from '../../../actions/certificateAction';

function CertificateAdmin() {
    const data = useSelector(state => state.certificates);
    const [isPending, setIsPending] = useState(false);
    const [certificate2, setCertificate2] = useState({
        image: '',
    });
    const dispatch = useDispatch();

    let formData = new FormData();

    const handleChange = (e) => {
        setCertificate2({
            image: e.target.files[0],
        });
    }

    const createCertificateHandler = async () => {
        setIsPending(true);
        formData.append('image', certificate2.image);
        await dispatch(createCertificate(formData));
        setIsPending(false);

    }

    const deleteHandler = (id) => {
        dispatch(deleteCertificate(id));
    }

    const certificate = data.map((crtf, i) => {
        return (
            <tr key={crtf._id} className="align-middle">
                <td>{i + 1}</td>
                <td><img src={crtf.image.url} alt="crtf" width="150" className="img-fluid" /></td>
                <td>
                    <button className="btn btn-danger me-2" onClick={() => deleteHandler(crtf._id)}>Delete</button>
                    <button className="btn btn-warning text-white" >Edit</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Certificates Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-left" data-aos-duration="1000">
                <div className="col-md-12">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#createCrtfct">Add Certificate</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? <tr>
                                    <td colSpan="9" className="text-center">
                                        <div className="alert alert-warning" role="alert">
                                            No Certificate Content
                                        </div>
                                    </td>
                                </tr> : certificate}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal crate education */}
            <div className="modal fade" id="createCrtfct">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Certificate</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label htmlFor="image">Upload Certificate</label>
                                <input name="image" required type="file" className={`form-control text-white bg-transparent`} id="image" onChange={handleChange} />
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
                                    <button type="button" className="btn btn-primary" onClick={createCertificateHandler}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificateAdmin;