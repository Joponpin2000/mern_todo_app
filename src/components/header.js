import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { getNumbers } from '../actions/getAction';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    useEffect(() => {
        getNumbers();
    }, [])

    const handleLogout = () => {
        logout(() => {
            props.history.push('/');
        });
    }

    const showNavigation = () => (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {!isAuthenticated() && (
                            <Fragment>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Fragment>
                        )}
                        {isAuthenticated() && isAuthenticated().role === 0 && (
                            <Fragment>
                                <Nav.Link href="/user/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/cart">Cart <span></span></Nav.Link>
                            </Fragment>
                        )}
                        {isAuthenticated() && isAuthenticated().role === 1 && (
                            <Fragment>
                                <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                            </Fragment>
                        )}
                        {userInfo && isAuthenticated() && (
                            <Fragment>
                                {/* <Nav.Link to="/profile">My Profile ({userInfo.username})</Nav.Link> */}
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </Fragment>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );

    return (
        <header id="header">
            {showNavigation()}
        </header>
    );
}

// const mapStateToProps = state => ({
//     basketProps: state.basketState
// })

export default withRouter(Header);