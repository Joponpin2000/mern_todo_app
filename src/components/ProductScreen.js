import React, { Fragment, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductScreen = (props) => {

    const productDetails = useSelector(state => state.productDetails)
    const dispatch = useDispatch;

    useEffect(() => {
        dispatch(detailsProduct())
        return () => {
            //
        }
    }, [])
    return (
        <Fragment>
            <Container>
                <Link to="/">Back to home</Link>
                <Row>
                    {
                        <Col key={product._id} md='4'>
                            <Card className="mb-3">
                                <Card.Img height='250' src={`http://localhost:4000/${product.productImage}`} alt={product.productName} />
                                <Card.Body>
                                    <Card.Title>
                                        {product.productName}
                                    </Card.Title>
                                    <Card.Text>
                                        {product.productDesc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                </Row>
            </Container>
        </Fragment>
    )
}

export default ProductScreen;