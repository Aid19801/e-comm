import { combineReducers } from 'redux';
import appStateReducer from '../components/App/reducer';
import accountPageReducer from '../containers/account-page/reducer';
import adminPageReducer from '../containers/admin-page/reducer';
import aboutPageReducer from '../containers/about-page/reducer';
import homePageReducer from '../containers/homepage/reducer';
import landingPageReducer from '../containers/landing-page/reducer';
import passwordChangeFormReducer from '../containers/account-page/pw-change-reducer';
import passwordForgetPageReducer from '../containers/password-forget-page/reducer';
import signinPageReducer from '../containers/signin-page/reducer';
import signupPageReducer from '../containers/signup-page/reducer';
import signoutPageReducer from '../containers/signout-page/reducer';
import loginReducer from '../components/Login/reducer';


import LandingTitleMenuReducer from '../components/LandingTitleMenu/reducer';
import EmojiTaglineReducer from '../components/EmojiAndTagline/reducer';
import CirclesSeparatorReducer from '../components/CirclesSeparator/reducer';
import DistortedImageReducer from '../components/DistortedImageAndTitle/reducer';

const RootReducer = combineReducers({
    appState: appStateReducer,
    accountPage: accountPageReducer,
    adminPage: adminPageReducer,
    aboutPage: aboutPageReducer,
    homePage: homePageReducer,
    landingPage: landingPageReducer,
    passwordForgetPage: passwordForgetPageReducer,
    passwordChangeForm: passwordChangeFormReducer,
    signinPage: signinPageReducer,
    signupPage: signupPageReducer,
    signoutPage: signoutPageReducer,

    login: loginReducer,
    landingTitleMenu: LandingTitleMenuReducer,
    emojiTagline: EmojiTaglineReducer,
    circlesSeparator: CirclesSeparatorReducer,
    distortedImage: DistortedImageReducer,
})

export default RootReducer;