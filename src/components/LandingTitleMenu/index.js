import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Col from 'react-bootstrap/Col';
import * as actions from './actions';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';

import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';

const useStyles = createUseStyles({
  firstSection: {
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
    marginRight: 10,
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

  divSpanLineRef: {
    height: 5,

    marginTop: 46,

    background: brand.color_vanityLine,
    borderRadius: 30,
  },

  '@media screen and (max-width: 900px)': {
        firstSection: {
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

        divSpanLineRef: {
        marginTop: 10,
        },
    }
})

function LandingTitleMenu({ componentLoaded, componentLoading, isMob }) {

  let h1ref = useRef(null);
  let h2ref = useRef(null);
  let menOneRef = useRef(null);
  let menTwoRef = useRef(null);
  let menThreeRef = useRef(null);
  let menFourRef = useRef(null);

  let divSpanLineRef = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    componentLoading();
  }, []);

  useEffect(() => {

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

    componentLoaded();
  }, []);

  useEffect(() => {
    TweenMax.fromTo(divSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 2.3 });
  }, []);


  return (
    <React.Fragment>
        <Col sm={12}>
          <div className={classes.firstSection}>

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

            <div ref={ref => divSpanLineRef = ref} className={classes.divSpanLineRef}></div>

          </div>

        </Col>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  loading: state.landingTitleMenu.loading,
  isMob: state.appState.isMob,
})

const mapDispatchToProps = dispatch => ({
    componentLoading: () => dispatch(actions.landingMenuLoading()),
    componentLoaded: () => dispatch(actions.landingMenuLoaded()),
})

export default compose(
  // withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(LandingTitleMenu);