import PropTypes from 'prop-types'
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';
import { createUseStyles } from 'react-jss';

import brand from '../../brand.json';

import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

const getWidth = () => window.innerWidth;

const useStyles = createUseStyles({
    segment: {
        backgroundColor: `${brand.color_superdark} !important`,
    }
})


function DesktopContainer({ children }) {
    const [fixed, setFixed] = useState(false);

    const hideFixedMenu = () => setFixed(false);
    const showFixedMenu = () => setFixed(true);

    const classes = useStyles();

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: '100vh', padding: '1em 0em' }}
                    className={classes.segment}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Navigation hideSideBar={hideFixedMenu} />
                        </Container>
                    </Menu>
                    {children}
                </Segment>
            </Visibility>
        </Responsive>
    )
}

function MobileContainer({ children }) {
    const [ sidebarOpened, setSidebarOpened ] = useState(false);

    const handleSidebarHide = () => setSidebarOpened(false);
    const handleToggle = () => setSidebarOpened(true);

    const classes = useStyles();

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation='push'
                inverted
                onHide={handleSidebarHide}
                vertical
                visible={sidebarOpened}
            >
                <Navigation hideSideBar={handleSidebarHide} />
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                    textAlign='center'
                    style={{ 
                        minHeight: '100vh',
                        padding: '1em 0em',
                    }}
                    vertical
                    className={classes.segment}
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={handleToggle}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                        </Menu>
                    </Container>
                    {children}
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
    )
}
const ResponsiveNavbar = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)


export default ResponsiveNavbar