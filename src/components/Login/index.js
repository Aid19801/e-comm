import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { withFirebase } from '../Firebase';
import LoadingSpinner from '../LoadingSpinner';
import * as ROUTES from '../../constants/routes';
import * as actions from './constants';
import brand from '../../brand.json';

const useStyles = createUseStyles({
    header: {
        color: `${brand.color_dark} !important`,
    },
    button: {
        backgroundColor: `${brand.color_dark} !important`,
        color: `${brand.color_light} !important`,
    },
    segment: {
        backgroundColor: `${brand.color_light} !important`,
    },
    error: {
        color: 'darkred',
        marginTop: '14px !important',
    }
})

function Login({ onSubmit, isLoading, firebase, history, updateStateUserLoginFailed, updateStateUserIsLoggingIn, updateStateUserIsLoggedIn }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const classes = useStyles();

    const handleOnChange = (event) => {
        event.target.name === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        updateStateUserIsLoggingIn();
        try {
            const res = await firebase.doSignInWithEmailAndPassword(email, password);
            console.log('AT | res:', res);
            updateStateUserIsLoggedIn(res.user.uid)
            history.push(ROUTES.HOME)
        } catch (e) {
            updateStateUserLoginFailed(e.message);
            setError(e)
        }
        setEmail('');
        setPassword('');
        event.preventDefault();
    }

    if(isLoading) {
        return <LoadingSpinner />
    }

    return (
        <Grid textAlign='center' style={{ height: 'auto' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

            <Fade left delay={1000}>
            
                <Header as='h2' textAlign='center' className={classes.header}>
                    <Image src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
                    Log-in to your account
                </Header>

            </Fade>


                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked className={classes.segment}>
                        <Form.Input
                            fluid icon='user'
                            iconPosition='left'

                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Email Address"
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            type='password'

                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Password"
                        />

                        <Button fluid size='large' className={classes.button}>
                            Sign In
                        </Button>

                        {error && <p className={classes.error}>{error.message}</p>}

                    </Segment>

                </Form>


            </Grid.Column>
        </Grid>
    );
}

const mapStateToProps = state => ({
    isLoading: state.login.isLoading,
});

const mapDispatchToProps = dispatch => ({
    updateStateUserIsLoggingIn: () => dispatch({ type: actions.SIGNING_IN }),
    updateStateUserIsLoggedIn: (str) => dispatch({ type: actions.SIGNED_IN, uid: str }),
    updateStateUserLoginFailed: () => dispatch({ type: actions.SIGN_IN_FAIL }),
});


export default compose(
    withFirebase,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Login);