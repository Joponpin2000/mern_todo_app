import React, { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';

function PlaceOrderScreen(props) {
    const cart = useSelector(state => state.cart);
    const { cartItems, shipping, payment } = cart;

    if (!shipping.address) {
        props.history.push('/shipping')
    }

    if (!payment.paymentMethod) {
        props.history.push('/payment')
    }
    const itemsPrice = cartItems.reduce((a, c) => a + c.productPrice * c.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = 0.15 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;
    const placeOrderHandler = () => {

    }

    const getSecondPart = (str) => {
        let gy = `${str}`;
        return gy.toString().split('\\')[1];
    }

    return (
        <Fragment>
            <CheckoutSteps step1 step2 step3 step4 />
            <Container>
                <h4>Shipping</h4>
                <Row>
                    <Col md='8'>
                        {cart.shipping.address}, {cart.shipping.city},
                        {cart.shipping.postalCode}, {cart.shipping.country}
                    </Col>
                    <Col md='4'>
                        <div>
                            Payment Method: {cart.payment.paymentMethod}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='8'>
                        {
                            cartItems.map((item, i) =>
                                (
                                    <Row className="my-2" key={i}>
                                        {
                                            <Fragment>
                                                <Col md='6'>
                                                    <Card>
                                                        <Card.Img className="product-image" src={`http://localhost:4000/${getSecondPart(item.productImage)}`} alt={item.productName} />
                                                    </Card>
                                                </Col>
                                                <Col md='6'>
                                                    <Card style={{ 'border': 'none' }}>
                                                        <Card.Body>
                                                            <Card.Title>
                                                                <Link to={"/product/" + item._id}>
                                                                    {item.productName}
                                                                </Link>
                                                            </Card.Title>
                                                            <Card.Text>
                                                                Price: ${item.productPrice}
                                                            </Card.Text>
                                                        Qty: {item.qty}
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Fragment>
                                        }
                                    </Row>
                                )
                            )
                        }
                    </Col>
                    <Col md='4'>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h3>Order Summary</h3>
                                    <div>
                                        <div>Items</div>
                                        <div>${itemsPrice}</div>
                                    </div>
                                    <div>
                                        <div>Shipping</div>
                                        <div>${shippingPrice}</div>
                                    </div>
                                    <div>
                                        <div>Tax</div>
                                        <div>${taxPrice}</div>
                                    </div>
                                    <div>
                                        <div>Order Total</div>
                                        <div>${totalPrice}</div>
                                    </div>
                                </Card.Text>
                                <Button type="submit" onClick={placeOrderHandler} className="btn btn-warning btn-block">Place Order</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    )
}
export default PlaceOrderScreen;