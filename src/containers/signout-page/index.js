import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../components/Firebase';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import * as actions from './constants';

class SignOutFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  componentWillMount() {
    this.props.showProgressBar(true);
    this.props.pageLoading();
    this.props.firebase.doSignOut();
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 100) 
    this.props.pageLoaded();
  }

  render() {

    return (
      <h1>you are now signed out.</h1>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.signoutPage.isLoading,
})
const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.SIGNOUT_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.SIGNOUT_PAGE_LOADED }),
})


const SignOutForm = compose(
  withRouter,
  withFirebase,
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(SignOutFormBase);

const SignOutPage = () => (
    <div>
      <h1>SignOut</h1>
      <SignOutForm />
    </div>
);

export default SignOutPage;

export { SignOutForm };