import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import brand from '../../brand.json';

function Footer({ isMob }) {

    return (
        <React.Fragment>

            <Row>

                <Col sm={12}>
                    {isMob ? (
                        <div className="d-flex justify-content-center shadow-lg p-3 bg-white rounded ${isMob flex-column">
                            <h3 className="footer_text grey m-0">Get in touch to see how</h3>
                            <h3 className="footer_text orange">we can electrify</h3>
                            <h3 className="footer_text grey">your business today.</h3>
                            <p className="grey">{brand.footerEmail}</p>
                        </div>
                    ) : (
                            <div className="d-flex justify-content-center shadow-lg p-3 bg-white rounded">
                                <h3 className="footer_text grey m-0">Get in touch to see how we can <span style={{color: 'orange'}}>electrify</span> your business today.</h3>
                                <p className="grey">{brand.footerEmail}</p>
                            </div>
                        )}

                </Col>
            </Row>

        </React.Fragment>
    );
}
export default Footer