import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Footer(params) {
    return (
        <Row id="footer">
            <Col md='6' sm='6' lg='6' className="mx-auto">
                &copy; 2020. All rights reserved. Developed by <a href="https://jofedo.netlify.app">Joseph Idowu</a>
            </Col>
        </Row>
    )
}

export default Footer;