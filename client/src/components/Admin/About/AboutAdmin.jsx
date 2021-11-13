import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import {
  createAbout,
  deleteAbout,
  updateAbout,
} from "../../../actions/aboutAction";

function AboutAdmin() {
  const data = useSelector((state) => state.abouts);
  const dispacth = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [abouts, setAbouts] = useState({
    profile: "",
    content: "",
  });

  let formData = new FormData();

  const createAboutHandler = async () => {
    setIsPending(true);

    if (data[0]) {
      toast.error("You can only create one about section!");
      setIsPending(false);
      return false;
    }

    formData.append("profile", abouts.profile);
    formData.append("content", abouts.content);
    await dispacth(createAbout(formData));

    setAbouts({
      profile: "",
      content: "",
    });

    document.getElementById("profile").value = "";

    setIsPending(false);
  };

  const deleteAboutHandler = async (id) => {
    await dispacth(deleteAbout(id));
  };

  const editAboutHandler = async () => {
    setIsPending(true);

    formData.append("id", abouts.id);
    formData.append("profile", abouts.profile);
    formData.append("content", abouts.content);

    await dispacth(updateAbout(formData.get("id"), formData));

    document.getElementById("profile").value = "";

    setIsPending(false);
  };

  const about = data.map((abt, i) => {
    return (
      <tr key={abt._id} className="align-middle">
        <td>{i + 1}</td>
        <td>
          <img
            src={abt.profile.url}
            alt="logo"
            width="150"
            className="img-fluid"
          />
        </td>
        <td>{parse(abt.content)}</td>
        <td>
          <button
            onClick={() => deleteAboutHandler(abt._id)}
            className="btn btn-danger me-2"
          >
            Delete
          </button>
          <button
            onClick={() => setAbouts({ ...abt, id: abt._id })}
            className="btn btn-warning text-white"
            data-bs-toggle="modal"
            data-bs-target="#editAbout"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="py-5">
      <div className="row text-center">
        <div className="col">
          <h2>About Me Content</h2>
        </div>
      </div>
      <div className="row mt-5" data-aos="fade-right" data-aos-duration="1000">
        <div className="col-md-12">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#createAbout"
            >
              Add About
            </button>
            <button className="btn btn-primary" type="button">
              <NavLink to="/about" className="text-white text-decoration-none">
                Preview Content
              </NavLink>
            </button>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Content</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center">
                      <div className="alert alert-warning" role="alert">
                        No About Content
                      </div>
                    </td>
                  </tr>
                ) : (
                  about
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal crate about */}
      <div className="modal fade" id="createAbout">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create About
              </h5>
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group mb-3">
                <label htmlFor="content">Content</label>
                <textarea
                  value={abouts.content}
                  className={`form-control text-white bg-transparent`}
                  name="content"
                  id="content"
                  cols="30"
                  rows="5"
                  onChange={(e) =>
                    setAbouts({ ...abouts, content: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="profile">Upload Profile</label>
                <input
                  name="profile"
                  required
                  type="file"
                  className={`form-control text-white bg-transparent`}
                  id="profile"
                  onChange={(e) =>
                    setAbouts({ ...abouts, profile: e.target.files[0] })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {isPending ? (
                <button type="button" className="btn btn-primary" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Saving...
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={createAboutHandler}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal edit About */}
      <div className="modal fade" id="editAbout">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#1d1f28" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit About
              </h5>
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                value={abouts.id}
                type="hidden"
                name="id"
                className={`form-control text-white bg-transparent`}
                onChange={(e) => setAbouts({ ...abouts, id: e.target.value })}
              />

              <div className="form-group mb-3">
                <label htmlFor="content">New Content</label>
                <textarea
                  value={abouts.content}
                  className={`form-control text-white bg-transparent`}
                  name="content"
                  id="content"
                  cols="30"
                  rows="5"
                  onChange={(e) =>
                    setAbouts({ ...abouts, content: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="profile">Upload New Profile</label>
                <input
                  name="profile"
                  required
                  type="file"
                  className={`form-control text-white bg-transparent`}
                  id="profile"
                  onChange={(e) =>
                    setAbouts({ ...abouts, profile: e.target.files[0] })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {isPending ? (
                <button type="button" className="btn btn-primary" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Saving...
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editAboutHandler()}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAdmin;
