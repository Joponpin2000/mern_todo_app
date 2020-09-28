import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';

const Header = ({ history }) => {

    const handleLogout = evt => {
        logout(() => {
            history.push('/login');
        });
    }

    const showNavigation = () => (
        <nav className="navbar fixed-top navbar-expand-lg navbar-toggleable-md double-nav navabr-light bg-light">
            <h4><Link to="/" className="navabr-brand text-secondary">Logo</Link></h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-secondary">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link text-secondary">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-secondary">Login</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                            <li className="nav-item">
                                <Link to="/user/dashboard" className="nav-link text-secondary">Dashboard</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                            <li className="nav-item">
                                <Link to="/admin/dashboard" className="nav-link text-secondary">Dashboard</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <button className="btn btn-link text-secondary text-decoration-none pl-0" onClick={handleLogout}>Logout</button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );

    return (
        <header id="header">
            {showNavigation()}
        </header>
    );
}

export default withRouter(Header);