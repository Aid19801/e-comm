import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as actions from './actions';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';

import gsap from 'gsap';

const useStyles = createUseStyles({

  circlesSection: {
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

  '@media screen and (max-width: 900px)': {

    circlesSection: {
      // paddingTop: 0,
    },

  }
})

function CirclesSeparator({ componentLoaded, componentLoading, isMob }) {

  const classes = useStyles();

  let circlesSectionRef = useRef(null);

  const intersectionTwo = useIntersection(circlesSectionRef, { // circles animation
    root: null,
    rootMargin: isMob ? "60px" : "400px",
    threshold: 1,
  })

  const circleStyles = {
    height: 50,
    width: 50,
    borderRadius: 150,
    background: 'orange',
  }

  useEffect(() => {
    componentLoading();
  }, []);

  useEffect(() => {
    componentLoaded();
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
  // const intersectionTwo = useIntersection(circlesSectionRef, { // emoji art and tagline animation
  //   root: null,
  //   rootMargin: isMob ? "0px" : "-50px",
  //   threshold: .8, // have we reached the whole intersection 1 = yes, 0 = no
  // });


  intersectionTwo && intersectionTwo.intersectionRatio < .2 ?
  fadeOut('.fadeInTwo') // Not Reached
  : fadeIn('.fadeInTwo'); // Reached so animate

  return (
    <React.Fragment>

      <Row className="mt-150 fadeInTwo">


        <Col sm={12}>
          <div ref={circlesSectionRef} className={classes.circlesSection}>

            <div className={classes.circlesContainer}>
              <div className="fadeInCircle" style={circleStyles}></div>
              <div className="fadeInCircle" style={circleStyles}></div>
              <div className="fadeInCircle" style={circleStyles}></div>
            </div>

          </div>

        </Col>
      </Row>

    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  loading: state.circlesSeparator.loading,
  isMob: state.appState.isMob,
})

const mapDispatchToProps = dispatch => ({
  componentLoading: () => dispatch(actions.circlesSeparatorLoading()),
  componentLoaded: () => dispatch(actions.circlesSeparatorLoaded()),
})

export default compose(
  // withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(CirclesSeparator);