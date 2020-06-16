import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Col from 'react-bootstrap/Col';
import * as actions from './actions';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';

import gsap from 'gsap';

const useStyles = createUseStyles({
  

  
  emojiTaglineSection: {
    height: 'auto'
  },
  emojiTaglineContainer: {
    height: 'auto',
    width: '99vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
  },
  '@media screen and (max-width: 900px)': {
    
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
    rootMargin: isMob ? "200px" : "-50px",
    threshold: .8, // have we reached the whole intersection 1 = yes, 0 = no
  });


  intersection && intersection.intersectionRatio < .8 ?
  fadeOut('.fadeIn') // Not Reached
  : fadeIn('.fadeIn'); // Reached so animate


  return (
    <React.Fragment>
      <Col sm={12}>
        <div ref={emojiTaglineSectionRef} className={classes.emojiTaglineSection}>

          <div className={classes.emojiTaglineContainer}>

            <img
              src={require('../../images/dev.png')}
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