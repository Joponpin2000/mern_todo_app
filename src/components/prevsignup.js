import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { Link } from 'react-router-dom';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { signup } from '../api/auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { isAuthenticated } from '../helpers/auth';


const Signup = () => {

    let history = useHistory();


    useEffect(() => {

        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard')
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard')
        }
    }, [history]);

    const [formData, setFormData] = useState({
        username: 'test',
        email: 'test@email.com',
        password: 'test123',
        password2: 'test123',
        successmsg: false,
        errormsg: false,
        loading: false,
    });

    const { username, email, password, password2, successmsg, errormsg, loading, } = formData;

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
            successmsg: '',
            errormsg: ''
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData(
                {
                    ...formData, errormsg: 'All fields are required'
                }
            );
        }
        else if (!isEmail(email)) {
            setFormData(
                {
                    ...formData, errormsg: 'Invalid Email'
                }
            );
        }
        else if (!equals(password, password2)) {
            setFormData(
                {
                    ...formData, errormsg: 'Passwords do not match'
                }
            );
        }
        else {
            const { username, email, password } = formData;
            const data = { username, email, password };
            setFormData(
                {
                    ...formData, loading: true,
                }
            );
            signup(data)
                .then((response) => {

                    setFormData(
                        {
                            username: '',
                            email: '',
                            password: '',
                            password2: '',
                            successmsg: response.data.successMessage,
                            errormsg: false,
                            loading: false,
                        });
                })
                .catch((err) => {
                    setFormData(
                        {
                            ...formData,
                            loading: false,
                            errormsg: err.response.data.errorMessage,
                        });
                });
        }

    };

    const showSignupForm = () => (
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
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
                    {successmsg && showSuccessMsg(successmsg)}
                    {errormsg && showErrorMsg(errormsg)}
                    {loading && <div className="text-center mb-4">{showLoading()}</div>}
                    {showSignupForm()}
                </div>
            </div>
        </div>


    );
};


export default Signup;