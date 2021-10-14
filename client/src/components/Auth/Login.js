import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinAction } from '../../actions/authAction';
import style from './Login.module.css';

function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signinAction(formData))
    }

    return (
        <div className="py-5">
            <div className={`row justify-content-center align-items-center ${style.foo}`} data-aos="fade-down" data-aos-duration="1000">
                <div className="col-md-6">
                    <div className="card bg-transparent border-0 shadow-sm p-3">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login Only For Administrator!</h3>
                            <form className="mt-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input name="username" required type="text" className={`form-control text-white bg-transparent ${style.input}`} id="username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input name="password" required type="password" className={`form-control text-white bg-transparent ${style.input}`} id="password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <button className={`btn ${style.btnSubmit} text-white`} type="submit" name="submit" onClick={handleSubmit}>Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;