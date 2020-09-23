import React, { useState } from 'react';
import './style/Signup.css';
import { Link } from 'react-router-dom';


const Signnup = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successmsg: false,
        errormsg: false,
        loading: false,
    });

    const { username, email, password, password2, successmsg, errormsg, loading, } = formData;

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

    };

    const showSignupForm = () => (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-panel input-group">
                <div className="input-group-grouped">
                    <span className="input-group-text">
                        <i className="fa fa-user"></i>
                    </span>
                </div>
                <input name="username" onChange={handleChange} className="form-control" value={username} placeholder="Username" type="text" />
            </div>
            <div className="form-panel input-group">
                <div className="input-group-grouped">
                    <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>
                <input name="email" onChange={handleChange} className="form-control" value={email} placeholder="Email address" type="email" />
            </div>
            <div className="form-panel input-group">
                <div className="input-group-grouped">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input name="password" onChange={handleChange} className="form-control" placeholder="Password" value={password} type="password" />
            </div>
            <div className="form-panel input-group">
                <div className="input-group-grouped">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input name="password2" onChange={handleChange} className="form-control" placeholder="Confirm password" value={password2} type="password" />
            </div>
            <div className="form-group">
                <button name="" className="btn btn-primary btn-block" type="submit">
                    Create Account
                </button>
            </div>
            <p className="text-center text-white">
                Have an account? <Link to="/login">Log In</Link>
            </p>
        </form>
    );

    return (

        <div className="signup-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {showSignupForm()}
                </div>
            </div>
        </div>


    );
};


export default Signnup;