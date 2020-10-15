
{
    products.map(product =>
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
    )
}