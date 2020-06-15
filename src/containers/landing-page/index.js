import React, { Component, Suspense, useEffect, useState, useRef } from 'react';
import { useIntersection } from 'react-use';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as actions from './constants';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';
import hoverEffect from 'hover-effect'
import bw1 from './bw1.jpg';
import bw2 from './bw2.jpg';

import tech from './tech.jpeg';
import laptop from './laptop.jpeg';

import diss from './diss.png';

import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';

const useStyles = createUseStyles({
  section: {
    height: '93vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  heading: {
    color: brand.color_dark,
    fontSize: '12vh',
    opacity: '0.2',
  },
  subheading: {
    color: brand.color_superdark,
    opacity: 0,
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  menuDivContainer: {
    // opacity: 0,
    marginRight: 10,
    // padding: '10px 25px 10px 25px',
    minWidth: 240,
    background: brand.color_dark,
    borderRadius: 25,
    boxShadow: `2px 5px 22px ${brand.color_dark}`,
    transition: '.2s ease',
    '&:hover': {
      background: 'orange',
      color: 'black !important',
      opacity: 1,
    },
  },
  menuOption: {
    color: brand.color_light,
    width: '100%',
    padding: '15px 25px 15px 25px',
    opacity: .3,
    '&:hover': {
      color: 'white !important',
      opacity: 1,
    },
  },

  divSpanRedLineRef: {
    // borderBottom: '4px solid red',
    height: 5,

    marginTop: 46,

    background: 'orange',
    borderRadius: 30,
  },

  sectionSecond: {
    height: 'auto'
  },
  blog: {
    height: 'auto',
    width: '99vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
  },

  sectionThird: {
    height: 'auto',
    width: '100%',
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,

  },

  circlesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '90%',
  },

  landing: {

  },
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
      // width: 375,
      // height: 500,
      // backgroundSize: 'contain',
      borderRadius: 85,
      padding: 40,
      // marginTop: -40,
    }

  },

  '@media screen and (max-width: 900px)': {
    section: {
      height: '90vh',
      justifyContent: 'space-between',
    },
    sectionThird: {
      paddingTop: 0,
    },
    menuContainer: {
      flexDirection: 'column',
      marginTop: 0,
      alignItems: 'center'
    },
    menuDivContainer: {
      marginBottom: 20,
      width: 280,
      marginRight: 0,
    },
    menuOption: {
      opacity: 1,
    },

    divSpanRedLineRef: {
      marginTop: 10,
    },

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

function LandingPage({ pageLoading, pageLoaded, isMob }) {

  let h1ref = useRef(null);
  let h2ref = useRef(null);
  let menOneRef = useRef(null);
  let menTwoRef = useRef(null);
  let menThreeRef = useRef(null);
  let menFourRef = useRef(null);

  let divSpanRedLineRef = useRef(null);

  let sectionRef = useRef(null); // photo & tagline
  let thirdSectionRef = useRef(null);

  let distortionRef = useRef(null);

  const intersection = useIntersection(sectionRef, { // emoji art and tagline animation
    root: null,
    rootMargin: isMob ? "200px" : "-50px",
    threshold: .8, // have we reached the whole intersection 1 = yes, 0 = no
  });

  const intersectionTwo = useIntersection(thirdSectionRef, { // circles animastion
    root: null,
    rootMargin: "400px",
    threshold: .8,
  })

  const circleStyles = {
    height: 50,
    width: 50,
    borderRadius: 150,
    background: 'orange',
  }

  const classes = useStyles();

  useEffect(() => {
    pageLoading();
  }, []);

  useEffect(() => {
    pageLoaded();

    TweenMax.staggerFrom([h1ref], .9, { opacity: 0, x: 60, ease: Power3.easeIn }, .4);
    TweenMax.to(h2ref, .5, { opacity: 1, x: 6, ease: Power3.easeInOut, delay: 1.5 });

    if (!isMob) { // desktop
      TweenMax.to(menOneRef, .2, { x: "+=5", yoyo: true, ease: Power3.easeIn, delay: 1.5 });

      TweenMax.to(menTwoRef, .2, { x: "-=5", yoyo: true, ease: Power3.easeIn, delay: 1.55 });

      TweenMax.to(menThreeRef, .2, { x: "+=5", yoyo: true, ease: Power3.easeIn, delay: 1.99 });

      TweenMax.to(menFourRef, .2, { x: "-=5", yoyo: true, ease: Power3.easeIn, delay: 2.25 });

    }

    if (isMob) { // mobile
      TweenMax.fromTo(menOneRef, .4, { opacity: 0 }, { opacity: 1, ease: Power3.easeIn, delay: 1.5 });
      TweenMax.fromTo(menTwoRef, .4, { opacity: 0 }, { opacity: 1, ease: Power3.easeIn, delay: 1.7 });
      TweenMax.fromTo(menThreeRef, .4, { opacity: 0 }, { opacity: 1, ease: Power3.easeIn, delay: 1.9 });
      TweenMax.fromTo(menFourRef, .4, { opacity: 0 }, { opacity: 1, ease: Power3.easeIn, delay: 2 });
    }

  }, []);

  useEffect(() => {
    TweenMax.fromTo(divSpanRedLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 2.3 });
  }, []);


  useEffect(() => {
    new hoverEffect({
      parent: distortionRef,
      intensity: .2,
      image1: laptop,
      image2: tech,
      displacementImage: diss,

    })
  }, [])

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

  const slideIn = element => {
    gsap.to(element, 1, {
      x: -60,
      ease: 'power4.out',
    })
  }

  const slideOut = element => {
    gsap.to(element, 1, {
      x: 0,
      ease: 'power4.out',
    })
  }

  intersection && intersection.intersectionRatio < .8 ?
    fadeOut('.fadeIn') // Not Reached
    : fadeIn('.fadeIn'); // Reached so animate

  intersectionTwo && intersectionTwo.intersectionRatio < .5 ?
    slideIn('.fadeInCircle') // Not Reached
    : slideOut('.fadeInCircle'); // Reached so animate

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <div className={classes.section}>

            <h1 ref={ref => h1ref = ref} className={classes.heading}>{brand.brand}</h1>
            <h2 ref={ref => h2ref = ref} className={classes.subheading}>{brand.tagline}</h2>

            <div className={classes.menuContainer}>
              <div ref={ref => menOneRef = ref} className={classes.menuDivContainer}>
                <h2 className={classes.menuOption}>
                  Clients
                </h2>
              </div>
              <div ref={ref => menTwoRef = ref} className={classes.menuDivContainer}>
                <h2 className={classes.menuOption}>
                  Testimonials
                </h2>
              </div>
              <div ref={ref => menThreeRef = ref} className={classes.menuDivContainer}>
                <h2 className={classes.menuOption}>
                  Portfolio
                </h2>
              </div>
              <div ref={ref => menFourRef = ref} className={classes.menuDivContainer}>
                <h2 className={classes.menuOption}>
                  Contact
                </h2>
              </div>
            </div>

            <div ref={ref => divSpanRedLineRef = ref} className={classes.divSpanRedLineRef}></div>

          </div>

        </Col>
        <Col sm={12}>
          <div ref={sectionRef} className={classes.sectionSecond}>

            <div className={classes.blog}>

              <img
                src={require('./dev2.png')}
                className="fadeIn"
                style={{
                  height: 250,
                  width: 250,
                  marginBottom: 40,
                  opacity: 1,
                  boxShadow: '2px 5px 22px rgb(152, 152, 152)',
                  borderRadius: 150
                }}
              />


              <p style={{ color: 'black', textAlign: 'center', fontSize: 30, width: '80%', color: brand.color_dark, marginTop: isMob ? 0 : 40 }} className="fadeIn">Six years of Digital Design & Software Development by Technology professionals</p>


            </div>
          </div>

        </Col>

        <Col sm={12}>
          <div ref={thirdSectionRef} className={classes.sectionThird}>

            <div className={classes.circlesContainer}>
              <div className="fadeInCircle" style={circleStyles}></div>
              <div className="fadeInCircle" style={circleStyles}></div>
              <div className="fadeInCircle" style={circleStyles}></div>
            </div>

          </div>

        </Col>

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




      </Row>


      <Row>
        <Col sm={12}>
          <div className="d-flex flex-column justify-content-center shadow-lg p-3 bg-white rounded">
              <h3 className="grey m-0">{brand.footerTextHeading}</h3>
              <p className="grey">{brand.footerEmail}</p>
          </div>
        </Col>
      </Row>

    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  isLoading: state.landingPage.isLoading,
  isMob: state.appState.isMob,
})

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.LANDING_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.LANDING_PAGE_LOADED })
})

export default compose(
  // withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(LandingPage);