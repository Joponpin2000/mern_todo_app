import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = (props) => {
    useEffect(() => {
        getNumbers();
    }, [])
    return (
        <div className="App">
            <header>
                <div>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/cart"> Cart <span> {props.basketProps.basketNumbers} </span></Link></li>
                </div>
            </header>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);