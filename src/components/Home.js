import React, { Fragment, useEffect } from 'react';
import { Row, Col, Button, Container, Jumbotron, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                                products ?
                                    // Map objects like this
                                    Object.getOwnPropertyNames(products).map((product, i) =>
                                        <Fragment key={i}>
                                            <Col md='4'>
                                                <Card className="mb-3">
                                                    <Card.Img height='250' src={`http://localhost:4000/${getSecondPart(products[product].productImage)}`} alt={products[product].productName} />
                                                    <Card.Body>
                                                        <Card.Title>
                                                            <Link to="/">{products[product].productName}</Link>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {products[product].productDesc}
                                                        </Card.Text>
                                                        {/* <a href="" onClick={() => props.addBasket('greyTshirt')}>Add to Cart</a> */}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Fragment>
                                    )
                                    : <div></div>
                            }
                        </Row>
                    </Container>
                </Fragment >
            )
    );
};

// export default connect(null, { addBasket })(Home);
export default Home;