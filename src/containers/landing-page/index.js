import React, { Component, Suspense, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../components/Title';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import * as actions from './constants';
import brand from '../../brand.json';
import withStyles, { createUseStyles } from 'react-jss';
import Jumbotron from '../../components/JumboTron';
import SmallBanner from '../../components/SmallBanner';
import LargeBanner from '../../components/LargeBanner';
import PlaceholderImageBox from '../../components/ImageBox/placeholder';

import { TweenMax, Power3 } from 'gsap';

// const LazyImageBox = React.lazy(() => import('../../components/ImageBox')); // Lazy-loaded

const useStyles = createUseStyles({
  section: {
    height: '70vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    padding: '10px 25px 10px 25px',
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

    background: 'red',
    borderRadius: 30,
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
    TweenMax.fromTo(divSpanRedLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 2 });
  }, [])

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

            <div ref={ref => divSpanRedLineRef = ref} className={classes.divSpanRedLineRef}>yeah!</div>

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