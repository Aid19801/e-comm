import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import Login from '../../components/Login';
import Title from '../../components/Title';
import MessageLink from '../../components/MessageLink';
import * as actions from './constants';
import * as ROUTES from '../../constants/routes';


function SignInFormBase({ showProgressBar, pageLoading, pageLoaded }) {
  
  useEffect(() => {
    showProgressBar(true);
    pageLoading();
  }, []);

  useEffect(() => {
    showProgressBar(false);
    pageLoaded();
  }, []);

  return (
    <React.Fragment>
      <Login />
      <div style={{ marginBottom: 14 }}></div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  isLoading: state.signinPage.isLoading,
})
const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.SIGNIN_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.SIGNIN_PAGE_LOADED }),
})

const SignInForm = compose(
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(SignInFormBase);

const SignInPage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
      <Title text="Sign In" />
      <SignInForm />

      <MessageLink text="Dont Have An Account | " linkText="Sign Up" link={ROUTES.SIGN_UP} />
      <MessageLink text="Forgot Your Password | " linkText="Reset" link={ROUTES.PASSWORD_FORGET} />
  
    </div>
  );
}

export default SignInPage;

export { SignInForm };