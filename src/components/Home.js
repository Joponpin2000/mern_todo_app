import React, { Fragment, useEffect } from 'react';
import { Row, Col, Button, Container, Jumbotron, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchProducts } from '../api/product';
import { listProducts } from '../actions/productActions';
import { showLoading } from '../helpers/loading';
// import { connect } from 'react-redux';
// import { addBasket } from '../actions/addAction';

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
                            {
                                (products.length > 0) ? (
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