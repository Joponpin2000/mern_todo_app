import React, { Fragment } from 'react';
import { Row, Col, Button, Container, Jumbotron, Card } from 'react-bootstrap';
import image from './images/sbg.jpg';
// import { connect } from 'react-redux';
// import { addBasket } from '../actions/addAction';

const Home = (props) => {
    return (
        <Fragment>
            <Jumbotron id="home-bg">
                <Container>
                    <h1>Online Restaurant</h1>
                    <p>online restaurant...`</p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <h3 className="text-secondary mb-4">Popular Meals</h3>
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <Card.Img src={image} alt="" />
                            <Card.Body>
                                <Card.Title>
                                    Grey T-shirt
                        </Card.Title>
                                <Card.Text>
                                    $15.00
                        </Card.Text>
                                {/* <a href="" onClick={() => props.addBasket('greyTshirt')}>Add to Cart</a> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3">
                            <Card.Img src={image} alt="" />
                            <Card.Body>
                                <Card.Title>
                                    Grey T-shirt
                        </Card.Title>
                                <Card.Text>
                                    $15.00
                        </Card.Text>
                                {/* <a href="" onClick={() => props.addBasket('greyTshirt')}>Add to Cart</a> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3">
                            <Card.Img src={image} alt="" />
                            <Card.Body>
                                <Card.Title>
                                    Grey T-shirt
                        </Card.Title>
                                <Card.Text>
                                    $15.00
                        </Card.Text>
                                {/* <a href="" onClick={() => props.addBasket('greyTshirt')}>Add to Cart</a> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container></Fragment>
    );
};

// export default connect(null, { addBasket })(Home);
export default Home;