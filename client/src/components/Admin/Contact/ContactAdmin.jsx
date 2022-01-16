import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, deleteContact } from "../../../actions/contactAction";

function ContactAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const data = useSelector((state) => state.contacts);

  const deleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const contact = data.map((contact) => {
    return (
      <>
        <div className="col-md-10">
          <div className="card bg-transparent border-0 shadow rounded h-100">
            <div className="card-body">
              <h5 className="card-title">
                <div className="d-flex justify-content-between align-items-center">
                  <span>{contact.name}</span>
                  <span>
                    <button
                      onClick={() => deleteHandler(contact._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </h5>
              <p className="card-text">
                {contact.subject} - {contact.email}
              </p>
              <p className="card-text">Message: {contact.message}</p>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="py-5">
      <div className="row text-center">
        <div className="col">
          <h2>Contacted</h2>
        </div>
      </div>

      <div
        className="row justify-content-center mt-3 row-cols-1 row-cols-md-3 g-4 text-white"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {/* CONTACT HERE */}
        {data.length === 0 ? (
          <div className="col-md-10">
            <div className="alert alert-warning" role="alert">
              No Contacted
            </div>
          </div>
        ) : (
          contact
        )}
      </div>
    </div>
  );
}

export default ContactAdmin;
