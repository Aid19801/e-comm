import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Title from '../../components/Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedPane from '../../components/AnimatedPane';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import * as actions from './constants';
import brand from '../../brand.json';

class App extends Component {

  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    this.props.pageLoading();
    this.props.showProgressBar(true);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 100);
    this.props.pageLoaded();
  }


  render() {
    return (
      <div className="flex-center">
        <Row>
          <Col sm={12}>

            <Title text={brand.brand} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.landingPage.isLoading,
})

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.LANDING_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.LANDING_PAGE_LOADED })
})

export default compose(
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(App);