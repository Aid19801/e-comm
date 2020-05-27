import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Menu } from 'semantic-ui-react';
import brand from '../../brand.json';
import './styles.css';


const Navigation = () => (
  <React.Fragment>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </React.Fragment>
);

const NavigationAuth = () => (
  <React.Fragment>
    <Menu.Item name='Landing'>
      <Link to={ROUTES.LANDING}>Logo</Link>
    </Menu.Item>

    <Menu.Item name='About'>
      <Link to={ROUTES.ABOUT}>About</Link>
    </Menu.Item>

    <Menu.Item name='Account'>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </Menu.Item>

    <Menu.Item name='Admin'>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </Menu.Item>

    <Menu.Item name='signout' position='right'>
      <Link to={ROUTES.SIGN_OUT}>Signout</Link>
    </Menu.Item>
  </React.Fragment>
);

const NavigationNonAuth = () => (
  <React.Fragment>
    <Menu.Item name='Landing'>
      <Link to={ROUTES.LANDING}>{brand.brand}</Link>
    </Menu.Item>

    <Menu.Item
      name='Sign In'
      position='right'
    >
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Menu.Item>

  </React.Fragment>
);

export default Navigation;