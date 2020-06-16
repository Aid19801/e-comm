import React, { Component, Suspense, useEffect, useState, useRef } from 'react';
import { useIntersection } from 'react-use';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';

import * as actions from './actions';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';
import hoverEffect from 'hover-effect'

import tech from '../../images/tech.jpeg';
import laptop from '../../images/laptop.jpeg';

import diss from '../../images/diss.png'

const useStyles = createUseStyles({

  intro: {
    '& h2': {
      color: 'black',
    },
    '& p': {
      color: 'black',
    }
  },
  distortion: {
    height: 500,
    width: 'auto',

    '& canvas': {
      borderRadius: 85,
      padding: 40,
    }

  },

  '@media screen and (max-width: 900px)': {

    distortion: {
      '& canvas': {
        width: 375,
        height: 500,
        backgroundSize: 'contain',
        borderRadius: 85,
        padding: 40,
        marginTop: -40,
      }
    },

  }
})

function DistortedImageAndTitle({ componentLoaded, componentLoading, isMob }) {

  let distortionRef = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    componentLoading();
  }, []);

  useEffect(() => {
    new hoverEffect({
      parent: distortionRef,
      intensity: .2,
      image1: laptop,
      image2: tech,
      displacementImage: diss,

    })
    componentLoaded();
  }, []);


  return (
    <React.Fragment>
      <Col lg={9}>

        <div className={classes.landing}>

          <div ref={ref => distortionRef = ref} className={classes.distortion}></div>

        </div>

      </Col>

      <Col lg={3} className="d-flex flex-column justify-content-around" style={{ marginBottom: 100 }}>

        <h2 className="d-flex w-100 justify-content-center" style={{ color: 'black', fontSize: '10vh' }}>Simple</h2>
        <h2 className="d-flex w-100 justify-content-center" style={{ color: 'orange', fontSize: '10vh', fontStyle: 'italic' }}>Elegant</h2>
        <h2 className="d-flex w-100 justify-content-center" style={{ color: 'black', fontSize: '10vh' }}>Solutions</h2>

      </Col>


    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  loading: state.distortedImage.loading,
  isMob: state.appState.isMob,
})

const mapDispatchToProps = dispatch => ({
  componentLoading: () => dispatch(actions.distortedImageLoading()),
  componentLoaded: () => dispatch(actions.distortedImageLoaded()),
})

export default compose(
  // withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(DistortedImageAndTitle);