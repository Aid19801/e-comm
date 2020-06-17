import React, { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import brand from '../../brand.json';

function Footer({ isMob }) {


    const footerRef = useRef(null);

    const intersection = useIntersection(footerRef, {
        root: null,
        rootMargin: '50px',
        threshold: .4,
    });


    const fadeIn = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            y: -0,
            ease: 'power4.out',
            stagger: {
                amount: .3,
            }
        })
    }

    const fadeOut = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: 60,
            ease: 'power4.out',
        })
    }


    intersection && intersection.intersectionRatio < .4 ?
        fadeOut('.fadeInFooter') // Not Reached
        : fadeIn('.fadeInFooter'); // Reached so animate

    return (
        <React.Fragment>

            <Row ref={footerRef} className="fadeInFooter">

                <Col sm={12}>
                    {isMob ? (
                        <div className="d-flex justify-content-center shadow-lg p-3 bg-white rounded flex-column">
                            <h3 className="footer_text grey m-0">Get in touch to see how</h3>
                            <h3 className="footer_text orange">we can electrify</h3>
                            <h3 className="footer_text grey">your business today.</h3>
                            <p className="grey">{brand.footerEmail}</p>
                        </div>
                    ) : (
                            <div className="d-flex justify-content-center shadow-lg p-3 bg-white rounded flex-column">
                                <h3 className="footer_text grey m-0">Get in touch to see how we can <span style={{color: 'orange'}}>electrify</span> your business today.</h3>
                                <p className="orange bold padding-on">{brand.footerEmail}</p>
                            </div>
                        )}

                </Col>
            </Row>

        </React.Fragment>
    );
}
export default Footer