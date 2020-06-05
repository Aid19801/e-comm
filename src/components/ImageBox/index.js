import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Fade from 'react-reveal/Fade';
import brand from '../../brand.json';

const useStyles = createUseStyles({
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
    imageBoxText: {
        color: 'white',
        background: brand.color_superdark,
        position: 'absolute',
        top: '0%',
        left: '0%',
        fontFamily: 'lato',
        padding: '11%',
        fontSize: '83%'
    },
    
    '@keyframes swirl': {
        from: { boxShadow: `12px 13px 2px ${brand.color_boxshadow}` },
        to: { boxShadow: `12px 13px 32px ${brand.color_boxshadow}` }
    },
});

function ImageBox({ src, text }) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.eachBoxImage__img_and_text_container}>

                <img src={src} alt={Date.now()} className={classes.eachBoxImage} />

                <Fade delay={2500} right>
                    <p className={classes.imageBoxText}>{text}</p>
                </Fade>
            </div>
        </React.Fragment>
    )
}

export default ImageBox;