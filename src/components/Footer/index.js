import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';
import Socials from '../Socials';

const useStyles = createUseStyles({
    footerContainer: {
        position: 'fixed',
        border: '3px solid #a5a0a0',
        bottom: 0,
        width: '100vw',
        height: 'auto',
        zIndex: 10000,
        background: brand.color_light,
        padding: 10,
        fontSize: 12,
    },
    responsiveRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    },
    brandInitials: {
        width: '33%',
        textAlign: 'start',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 3px 1px black',
        position: 'absolute',
        left: 1,
    },
    footerText: {
        color: brand.color_superdark,
        font: 'inherit',
        padding: 8,
        maxWidth: 1280,
    },
    '@media screen and (max-width: 800px)': {
        responsiveRow: {
            justifyContent: 'center',
        },
        brandInitials: {
            display: 'none',
        },
        footerContainer: {
            border: '3px solid #a5a0a0',
            fontSize: 10,
        }
    },
    '@media screen and (max-width: 425px)': {
        footerContainer: {
            fontSize: 6,
        }
    }
});

function Footer() {

    const classes = useStyles();
    return (
        <React.Fragment>

            <Fade bottom delay={300}>
                <div className={classes.footerContainer}>

                    <div className={classes.responsiveRow}>
                        <h1 className={classes.brandInitials}>{brand.brand_initials}</h1>
                        <Socials />
                    </div>
                    <p>{brand.footerText}</p>
                </div>
            </Fade>
        </React.Fragment>
    );
}
export default Footer