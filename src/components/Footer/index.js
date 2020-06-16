import React from 'react';
import Col from 'react-bootstrap/Col';
import brand from '../../brand.json';

function Footer() {

    return (
        <React.Fragment>

            <Col sm={12}>
                <div className="d-flex flex-column justify-content-center shadow-lg p-3 bg-white rounded">
                    <h3 className="grey m-0">{brand.footerTextHeading}</h3>
                    <p className="grey">{brand.footerEmail}</p>
                </div>
            </Col>
        </React.Fragment>
    );
}
export default Footer