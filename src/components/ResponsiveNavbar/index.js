import PropTypes from 'prop-types'
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';
import { createUseStyles } from 'react-jss';

import brand from '../../brand.json';

import {
    Container as SemanticContainer,
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
    },
    sidebar: {
        backgroundColor: `${brand.color_superdark} !important`,
    },
    semantic_container_override: {
        marginLeft: '0px !important',
        paddingLeft: '0px !important',
        // border: '3px solid red',
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
                        <SemanticContainer>
                            <Navigation hideSideBar={hideFixedMenu} />
                        </SemanticContainer>
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
                className={classes.sidebar}
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
                    <SemanticContainer className={classes.semantic_container_override}>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={handleToggle}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                        </Menu>
                    </SemanticContainer>
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