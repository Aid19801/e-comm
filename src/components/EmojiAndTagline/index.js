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

  emojiTaglineSection: {
    height: '50vh',
    paddingTop: 50,
    paddingBottom: 50,
    // border: '2px solid blue'
  },
  emojiTaglineContainer: {
    height: 'auto',
    width: '99vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 120,
  },
  '@media screen and (max-width: 900px)': {
    emojiTaglineSection: {
      paddingBottom: 0,
      height: 'auto',
    }
  }
})

function EmojiAndTagline({ componentLoaded, componentLoading, isMob }) {

  let emojiTaglineSectionRef = useRef(null); // photo & tagline

  const classes = useStyles();

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

  const intersection = useIntersection(emojiTaglineSectionRef, { // emoji art and tagline animation
    root: null,
    rootMargin: isMob ? "0px" : "-50px",
    threshold: .8, // have we reached the whole intersection 1 = yes, 0 = no
  });


  intersection && intersection.intersectionRatio < .8 ?
    fadeOut('.fadeIn') // Not Reached
    : fadeIn('.fadeIn'); // Reached so animate


  return (
    <React.Fragment>

      <Row className="mt-100 bg_orange">

        <Col sm={12}>
          <div ref={emojiTaglineSectionRef} className={`${classes.emojiTaglineSection} fadeIn`}>

            <div className={classes.emojiTaglineContainer}>

              <img
                src={require('../../images/dev.png')}

                style={{
                  height: 250,
                  width: 250,
                  marginBottom: 40,
                  opacity: 1,
                  borderRadius: 150
                }}
              />


              <p style={{ textAlign: 'center', fontSize: 30, width: '80%', color: 'white', marginTop: isMob ? 0 : 0 }}>Six years of Digital Design & Software Development by Technology professionals</p>


            </div>


          </div>

        </Col>
      </Row>

    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  loading: state.emojiTagline.loading,
  isMob: state.appState.isMob,
})

const mapDispatchToProps = dispatch => ({
  componentLoading: () => dispatch(actions.emojiAndTaglineLoading()),
  componentLoaded: () => dispatch(actions.emojiAndTaglineLoaded()),
})

export default compose(
  // withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(EmojiAndTagline);