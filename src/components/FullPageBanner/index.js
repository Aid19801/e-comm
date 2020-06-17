import React, { useEffect, useState, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { TweenMax, Power3 } from 'gsap';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import brand from '../../brand.json';
import * as actions from './actions';

function FullPageBanner({ componentLoading, componentLoaded, isMob }) {

    useEffect(() => {
        componentLoading();
    }, []);

    const bigFadeIn = useRef(null);

    const intersection = useIntersection(bigFadeIn, {
        root: null,
        rootMargin: '100px',
        threshold: .8,
    });

    const fadeIn = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            y: -60,
            ease: 'power4.out',
            stagger: {
                amount: .3,
            }
        })
    }

    const fadeOut = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: -20,
            ease: 'power4.out',
        })
    }


    intersection && intersection.intersectionRatio < .8 ?
        fadeOut('.fooFade') // Not Reached
        : fadeIn('.fooFade'); // Reached so animate

    useEffect(() => {
        componentLoaded();
    }, []);


    return (
        <>
            <Row className={isMob ? "containContent bg_grey mt-40" : "bg_grey"}>
                <Col lg={12}>
                    <div ref={bigFadeIn} style={{ height: '80vh', width: '100%' }} className="fooFade flex-center">
                        <h2 className="d-flex w-100 justify-content-center" style={{ color: 'black', fontSize: '10vh' }}>Simple</h2>
                        <h2 className="d-flex w-100 justify-content-center" style={{ color: 'orange', fontSize: '10vh', fontStyle: 'italic' }}>Elegant</h2>
                        <h2 className="d-flex w-100 justify-content-center" style={{ color: 'black', fontSize: '10vh' }}>Solutions</h2>
                    </div>
                </Col>
            </Row>
        </>
    );
}

const mapStateToProps = state => ({
    // loading: state.fullPageBanner.loading,
    isMob: state.appState.isMob,
})

const mapDispatchToProps = dispatch => ({
    componentLoading: () => dispatch(actions.fullPageBannerLoading()),
    componentLoaded: () => dispatch(actions.fullPageBannerLoading())
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(FullPageBanner);