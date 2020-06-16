import React, { Component, Suspense, useEffect, useState, useRef } from 'react';
import { useIntersection } from 'react-use';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';

import * as actions from './constants';
import brand from '../../brand.json';
import { createUseStyles } from 'react-jss';

import EmojiAndTagline from '../../components/EmojiAndTagline';
import CirclesSeparator from '../../components/CirclesSeparator';
import LandingTitleMenu from '../../components/LandingTitleMenu';
import DistortedImageAndTitle from '../../components/DistortedImageAndTitle';
import Footer from '../../components/Footer';


function LandingPage({ pageLoading, pageLoaded, isMob }) {

  useEffect(() => {
    pageLoading();
  }, []);

  useEffect(() => {
    pageLoaded();
  }, []);

  return (
    <React.Fragment>

      <LandingTitleMenu />

      <EmojiAndTagline />

      <CirclesSeparator />

      <DistortedImageAndTitle />

      <Footer />

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