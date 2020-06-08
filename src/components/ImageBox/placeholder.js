import React from 'react';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

const useStyles = createUseStyles({
    eachBoxContainer: {
        width: '100%',
        height: '100%',
        minHeight: '100%',
        minWidth: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        padding: 20,
    },
    eachImgContainerOuter: {
        padding: '3%',
        background: 'beige',
        transform: 'skewY(2deg)',
    },
    eachImgContainerInner: {
        width: '100%',
        background: brand.color_light,
        transform: 'skewY(-2deg)',
        borderRadius: 5,
        height: '100%',
        minHeight: '100%',
        minWidth: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        padding: '9%',
        transition: '.2s ease',

        '&:hover': {
            background: brand.color_superlight,
            transform: 'skewY(0deg)',
            border: '1px solid grey',
        },
    },
    eachBoxImage__img_and_text_container: {
        // border: '1px solid red',
        position: 'relative',
    },
    eachBoxImage: {
        height: '100%',
        width: '100%',
        boxShadow: `12px 13px 38px ${brand.color_boxshadow}`,
        animation: '3s linear .1s $swirl',
    },
    '@keyframes swirl': {
        from: { boxShadow: `12px 13px 2px ${brand.color_boxshadow}` },
        to: { boxShadow: `12px 13px 32px ${brand.color_boxshadow}` }
    },

    '@media screen and (min-width: 1300px)': {
        imageBoxText: {
            fontSize: '131%',
            padding: 17,
        },
    },

    '@media screen and (max-width: 650px)': {
        imageBoxText: {
            top: '122%',
            width: '250%',
            left: -43,
            fontSize: '101%',
        },
    },

    '@media screen and (max-width: 573px)': {
        imageBoxText: {
            top: 0,
            left: 0,
            fontSize: '153%',
            textAlign: 'start',
            width: '67%',
        },
    },

    '@media screen and (max-width: 425px)': {
        imageBoxText: {
            fontSize: '153%',
            padding: 5,
        },
    }

});

function PlaceholderImageBox() {

    const classes = useStyles();

    return (
        <div className={classes.eachBoxContainer}>
            <div className={classes.eachImgContainerOuter}>
                <div className={classes.eachImgContainerInner}>
                    <div className={classes.eachBoxImage__img_and_text_container}>
                        <span className={classes.eachBoxImage}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlaceholderImageBox;