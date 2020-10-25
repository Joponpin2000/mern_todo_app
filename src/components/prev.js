import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { Link, useHistory } from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { login } from '../api/auth';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
import { signin } from '../actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {

        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard')
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard')
        }
    }, [history]);

    const [formData, setFormData] = useState({
        email: 'test@email.com',
        password: 'test123',
        errormsg: false,
        loading: false,
    });

    const { email, password, errormsg, loading, } = formData;

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            errormsg: '',
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isEmpty(email) || isEmpty(password)) {
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
        else {
            dispatch(signin(email, password));
            //     const { email, password } = formData;
            //     const data = { email, password };
            //     setFormData(
            //         {
            //             ...formData, loading: true,
            //         }
            //     );
            //     login(data)
            //         .then((response) => {
            //             setAuthentication(response.data.token, response.data.user);
            //             if (isAuthenticated() && isAuthenticated().role === 1) {
            //                 history.push('/admin/dashboard')
            //             } else if (isAuthenticated() && isAuthenticated().role === 0) {
            //                 history.push('/user/dashboard')
            //             }
            //         })
            //         .catch((err) => {
            //             console.log('login error: ', err);
            //             setFormData(
            //                 {
            //                     ...formData,
            //                     loading: false,
            //                     errormsg: err.response.data.errorMessage
            //                 }
            //             )
            //         });
        }

    };

    const showLoginForm = () => (
        <form className="login-form" onSubmit={handleSubmit} noValidate>
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
            <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                    Login
                </button>
            </div>
            <p className="text-center text-white">
                Don't have an account? <Link to="/signup">Register here</Link>
            </p>
        </form>
    );

    return (

        <div className="login-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {errormsg && showErrorMsg(errormsg)}
                    {loading && <div className="text-center mb-4">{showLoading()}</div>}
                    {showLoginForm()}
                </div>
            </div>
        </div>


    );
};

export default Login;