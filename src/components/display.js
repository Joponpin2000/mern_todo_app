import React, { useState } from 'react';
import image from './images/lbg.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

export default function Display(props) {

    return (
        <div>
            <img src={image} alt="" />
            <h3>Grey T-shirt</h3>
            <h3>$15.00</h3>
            <a href="" onClick={() => props.addBasket('greyTshirt')}>Add to Cart</a>
        </div>
    )
}

export default connect(null, { addBasket })(Display);