import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Navigation from '../Navigation';


import { AboutPage, AdminPage, AccountPage, HomePage, LandingPage, SignInPage, SignOutPage, SignUpPage, PasswordForgetPage } from '../../containers';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import * as actions from './constants';
import ResponsiveNavbar from '../ResponsiveNavbar';

const App = ({ appLoading, appLoaded }) => {

  
  useEffect(() => {
    appLoading();
  })

  useEffect(() => {
    appLoaded();
  })

  return (
    <Router>

      <div>
        <ResponsiveNavbar>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_OUT} component={SignOutPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </ResponsiveNavbar>
  
      </div>
    </Router>
      );
}

const mapStateToProps = state => ({
  isLoading: state.appState.isLoading,
  error: state.appState.error,
})

const mapDispatchToProps = dispatch => ({
  appLoading: () => dispatch({ type: actions.APP_LOADING }),
  appLoaded: () => dispatch({ type: actions.APP_LOADED }),
  appFailed: () => dispatch({ type: actions.APP_FAILED }),
})


export default compose(
  withAuthentication,
  connect(mapStateToProps, mapDispatchToProps)
)(App);