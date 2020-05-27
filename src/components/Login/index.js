import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import * as actions from './constants';

function Login({ onSubmit, firebase, history, updateStateUserLoginFailed, updateStateUserIsLoggingIn, updateStateUserIsLoggedIn }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
    return (
        <Grid textAlign='center' style={{ height: 'auto' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
                    Log-in to your account
                </Header>

                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
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

                        <Button color='teal' fluid size='large'>
                            Sign In
                        </Button>

                    </Segment>

                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
                {error && <p>{error.message}</p>}
            </Grid.Column>
        </Grid>
    );
}

const mapStateToProps = state => ({
    isLoading: state.signinPage.isLoading,
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