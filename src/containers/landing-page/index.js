import React, { Component, Suspense, useEffect, useState, useRef } from 'react';
import { useIntersection } from 'react-use';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as actions from './constants';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';

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
    height: '90vh',
    width: '100%',
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',

  },

  circlesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '90%',
  },

  '@media screen and (max-width: 900px)': {
    section: {
      height: '90vh',
      justifyContent: 'space-between',
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

  let sectionRef = useRef(null);
  let thirdSectionRef = useRef(null);


  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "200px",
    threshold: .8, // have we reached the whole intersection 1 = yes, 0 = no
  });

  const intersectionTwo = useIntersection(thirdSectionRef, {
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
      TweenMax.to(menOneRef, .2, {x: "+=5", yoyo: true, ease: Power3.easeIn, delay: 1.5});
    
      TweenMax.to(menTwoRef, .2, {x: "-=5", yoyo: true, ease: Power3.easeIn, delay: 1.55});
  
      TweenMax.to(menThreeRef, .2, {x: "+=5", yoyo: true, ease: Power3.easeIn, delay: 1.99});
      
      TweenMax.to(menFourRef, .2, {x: "-=5", yoyo: true, ease: Power3.easeIn, delay: 2.25});

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
  fadeOut('.fadeIn') // Not Reached
  : fadeIn('.fadeIn'); // Reached so animate

  intersectionTwo && intersectionTwo.intersectionRatio < .5 ?
  fadeOut('.fadeInCircle') // Not Reached
  : fadeIn('.fadeInCircle'); // Reached so animate

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
                  <div className="fadeInCircle" style={circleStyles} ></div>
                  <div className="fadeInCircle" style={circleStyles} ></div>
            </div>
            
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