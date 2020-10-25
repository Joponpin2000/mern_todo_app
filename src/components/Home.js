import React, { Fragment, useEffect } from 'react';
import { Row, Col, Button, Container, Jumbotron, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { showLoading } from '../helpers/loading';

const Home = (props) => {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(listProducts())

        return () => {
            //
        }
    }, [dispatch])

    const getSecondPart = (str) => {
        let gy = `${str}`;
        return gy.toString().split('\\')[1];
    }

    return (

        loading ? (
            <div className="text-center" > { showLoading()}</div>)
            :
            error ? (<div>{error}</div>) : (
                < Fragment >
                    <div id="overlay">
                        <Jumbotron id="home-bg">
                            <Container>
                                <Row>
                                    <Col md='6' className="text-white mx-auto">
                                        <h1>Online Restaurant</h1>
                                        <p>Restaurant at your doorstep..</p>
                                        <p>
                                            <Button variant="outline-secondary" className="text-white">Learn more</Button>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </div>
                    <Container>
                        <h3 className="text-secondary mb-4">Popular Meals</h3>
                        <Row>
                            {
                                (products) ? (
                                    // Map objects like this
                                    products.map((product, i) =>
                                        <Fragment key={i}>
                                            <Col md='4'>
                                                <Card className="mb-3">
                                                    <Link to={"/product/" + product._id}>
                                                        <Card.Img height='250' src={`http://localhost:4000/${getSecondPart(product.productImage)}`} alt={product.productName} />
                                                    </Link>
                                                    <Card.Body>
                                                        <Card.Title>
                                                            <Link to={"/product/" + product._id}>{product.productName}</Link>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {product.productDesc}
                                                        </Card.Text>
                                                        {/* <a href="" onClick={() => props.addBasket('greyTshirt')}>Add to Cart</a> */}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Fragment>
                                    )
                                )
                                    : (
                                        <div className="hidden">Unavailable</div>
                                    )
                            }
                        </Row>
                    </Container>
                </Fragment >
            )
    );
};

// export default connect(null, { addBasket })(Home);
export default Home;