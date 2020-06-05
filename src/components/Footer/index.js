import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

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
    footerText: {
        color: brand.color_superdark,
        font: 'inherit',
        padding: 8,
        maxWidth: 1280,
    },
    '@media screen and (max-width: 800px)': {
        footerContainer: {
            border: '3px solid #a5a0a0',
            fontSize: 10,
        }
    },
    '@media screen and (max-width: 400px)': {
        footerContainer: {
            fontSize: 8,
        }
    }
});

function Footer({ ...props }) {

    useEffect(() => {


    }, [])

    const classes = useStyles();
    return (
        <div className={classes.footerContainer}>
            <p>{brand.footerText}</p>
        </div>
    );
}
export default Footer