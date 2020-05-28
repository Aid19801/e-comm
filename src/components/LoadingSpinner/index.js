import React from "react";
import { BarLoader } from "react-spinners";
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

const useStyles = createUseStyles({
    loadingSpinner: {
        height: '100%',
        position: 'fixed',
        width: '100%',
        zIndex: '100',
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, .9)',
        height: '100%',
        left: 0,
        opacity: '.7',
        position: 'fixed',
        top: 0,
        width: '100%',
    },
    spinner: {
        backgroundClip: 'padding-box',
        backgroundColor: brand.color_dark,
        height: 6,
        left: '50%',
        marginLeft: '-75.5px',
        marginTop: '-3px',
        overflow: 'hidden',
        position: 'fixed',
        top: '50%',
        width: 150,

        '& > div': {
            height: 6,
            width: 150,
        },
        '& > div > div': {
            backgroundColor: brand.color_light,
            height: 6,
        }
    }
})

const LoadingSpinner = () => {

    const classes = useStyles();

    return (
        <div className={classes.loadingSpinner}>
            <div className={classes.background} />
            <div className={classes.spinner}>
                <BarLoader loading={true} />
            </div>
        </div>
    );
};

export default LoadingSpinner;
