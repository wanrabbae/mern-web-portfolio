import React from 'react';
import { useSelector } from 'react-redux';

function CertificateAdmin() {
    const { data } = useSelector(state => state.certificates);

    if (data === undefined) return <div>Loading...</div>

    const certificate = data.map((crtf, i) => {
        return (
            <tr key={crtf._id} className="align-middle">
                <td>{i + 1}</td>
                <td><img src={crtf.image.url} alt="crtf" width="150" className="img-fluid" /></td>
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
                    <h2>Certificates Content</h2>
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-left" data-aos-duration="1000">
                <div className="col-md-12">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <button className="btn btn-success" type="button">Add Certificate</button>
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
                                {certificate}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificateAdmin;