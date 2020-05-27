import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../signup-page';
import { withFirebase } from '../../components/Firebase';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import Login from '../../components/Login';

import * as ROUTES from '../../constants/routes';
import * as actions from './constants';
import { PasswordForgetLink } from '../password-forget-page';

class SignInFormBase extends Component {

  componentWillMount() {
    this.props.showProgressBar(true);
    this.props.pageLoading();
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 100) 
    this.props.pageLoaded();
  }

  render() {
    return (
      <Login onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.signinPage.isLoading,
})
const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.SIGNIN_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.SIGNIN_PAGE_LOADED }),
})


const SignInForm = compose(
  withRouter,
  withFirebase,
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(SignInFormBase);

const SignInPage = () => (
    <div>
      <h1>SignIn</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
);

export default SignInPage;

export { SignInForm };