import React, { Component } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import brand from '../../brand.json';

TopBarProgress.config({
  barColors: {
    "0": brand.color_light,
    "1.0": brand.color_superlight
  },
  shadowBlur: 100,
  barThickness: 5,
});

const withProgressBar = PlatformSpecificComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: false,
      }
    }

    handleProgressBar = bool => {
      this.setState({ isLoading: bool })
    }
    
    render() {
      const { isLoading } = this.state;
      return (
        <div className="prog-bar">
          { isLoading && <TopBarProgress /> }
          <PlatformSpecificComponent showProgressBar={this.handleProgressBar} {...this.props} />
        </div>
      )
    }
  
  }
}

export default withProgressBar;