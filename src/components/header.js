import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const showNavigation = () => (
        <nav className="navbar fixed-top navbar-expand-lg navbar-toggleable-md double-nav navabr-light bg-light">
            <h4><Link to="/" className="navabr-brand">Logo</Link></h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
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

export default Header;