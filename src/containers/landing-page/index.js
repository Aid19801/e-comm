import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../components/Title';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import * as actions from './constants';
import brand from '../../brand.json';
import withStyles from 'react-jss';
import Jumbotron from '../../components/JumboTron';
import SmallBanner from '../../components/SmallBanner';
import LargeBanner from '../../components/LargeBanner';
import PlaceholderImageBox from '../../components/ImageBox/placeholder';

const LazyImageBox = React.lazy(() => import('../../components/ImageBox')); // Lazy-loaded


const styles = {

  eachBoxContainer: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
    minWidth: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    padding: 20,

  },
  eachImgContainerOuter: {
    padding: '3%',
    background: 'beige',
    transform: 'skewY(2deg)',
  },
  eachImgContainerInner: {
    width: '100%',
    background: brand.color_light,
    backgroundImage: `linear-gradient(to right, ${brand.color_light}, grey, ${brand.color_superlight}, white)`,
    backgroundSize: '300% 100%',
    borderRadius: 5,
    height: '100%',
    minHeight: '100%',
    minWidth: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    padding: '9%',
    'moz-transition': 'all .4s ease-in-out',
    '-o-transition': 'all .4s ease-in-out',
    '-webkit-transition': 'all .4s ease-in-out',
    transition: 'all .4s ease-in-out',

    '&:hover': {
      backgroundPosition: '100% 0',
    },
  },
}
class LandingPage extends Component {

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

    const { classes } = this.props;

    return (
      <div className="flex-center">
        <Row>
          <Col sm={12}>
            <Title text={brand.brand} />
          </Col>
        </Row>
        <Row>

          {brand.landingPageImages.map(({ src, text }, i) => {
            return (
              <React.Fragment key={i}>
                <Col sm={3}>
                  <Fade delay={i === 0 ? 0 : 300}>
                    <div className={classes.eachBoxContainer}>
                      <div className={classes.eachImgContainerOuter}>
                        <div className={classes.eachImgContainerInner}>
                          <Suspense fallback={ <PlaceholderImageBox /> }>
                            <LazyImageBox src={src} text={text} />
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </React.Fragment>
            )
          })}

        </Row>

        <span style={{ marginTop: 30 }}></span>
       
        <Jumbotron {...brand.jumbotron} />

        <span style={{ marginTop: 30 }}></span>
        
        <SmallBanner {...brand.smallBanner} />

        <span style={{ marginTop: 30 }}></span>

        

        <span style={{ marginTop: 200 }}></span>

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
  withStyles(styles),
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(LandingPage);