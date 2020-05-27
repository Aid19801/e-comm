import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withRouter } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import { Menu } from 'semantic-ui-react';
import brand from '../../brand.json';
import './styles.css';


const Navigation = ({ hideSideBar, history }) => (
  <React.Fragment>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth hideSideBar={hideSideBar} history={history} /> : <NavigationNonAuth hideSideBar={hideSideBar} history={history} />
      }
    </AuthUserContext.Consumer>
  </React.Fragment>
);

const NavigationAuth = ({ hideSideBar, history }) => {

  const handleClick = (location) => {
    history.push(location);
    hideSideBar();
  }
  return (
    <React.Fragment>
      <Menu.Item name='Landing'>
        <div onClick={() => handleClick(ROUTES.LANDING)}>Logo</div>
      </Menu.Item>
  
      <Menu.Item name='About'>
        <div onClick={() => handleClick(ROUTES.ABOUT)}>About</div>
      </Menu.Item>
  
      <Menu.Item name='Account'>
        <div onClick={() => handleClick(ROUTES.ACCOUNT)}>Account</div>
      </Menu.Item>
  
      <Menu.Item name='Admin'>
        <div onClick={() => handleClick(ROUTES.ADMIN)}>Admin</div>
      </Menu.Item>
  
      <Menu.Item name='signout' position='right'>
        <div onClick={() => handleClick(ROUTES.SIGN_OUT)}>Sign Out</div>
      </Menu.Item>
    </React.Fragment>
  );
    
}

const NavigationNonAuth = ({ hideSideBar, history }) => {

  const handleClick = (location) => {
    history.push(location);
    hideSideBar();
  }

  return (
    <React.Fragment>
      <Menu.Item name='Landing'>
        <div onClick={() => handleClick(ROUTES.LANDING)}>{brand.brand}</div>
      </Menu.Item>
  
      <Menu.Item
        name='Sign In'
        position='right'
      >
        <div onClick={() => handleClick(ROUTES.SIGN_IN)}>Sign In</div>
      </Menu.Item>
  
    </React.Fragment>
  );
}

export default withRouter(Navigation);