import React, { useState } from 'react';
import { savePayment } from '../actions/cartAction';
import { useDispatch } from 'react-redux';
import CheckoutSteps from './CheckoutSteps';

const Payment = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // setLoading(true)
        const formData = ({
            paymentMethod
        })
        dispatch(savePayment(formData));
        props.history.push("placeorder");
    };

    const showPaymentForm = () => (
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-panel input-group">
                <div>
                    <input name="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)} value="paypal" type="radio" />
                    <label htmlFor="paymentMethod">
                        Paypal
                    </label>
                </div>
            </div>
            <div className="form-group">
                <button name="" className="btn btn-primary btn-block" type="submit">
                    Continue
                </button>
            </div>
        </form>
    )

    return (
        <div>
            <div className="signup-container vh-100">
                <CheckoutSteps step1 step2 step3 />
                <div className="row px-3">
                    <div className="col-md-5 mx-auto align-self-center">
                        {showPaymentForm()}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;