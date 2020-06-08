import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import brand from '../../brand.json';
// import { Button } from 'semantic-ui-react';

const useStyles = createUseStyles({
    
    '@keyframes slideRight': {
        from: {
            background: `-webkit-linear-gradient(45deg,#C0C0C1 0, lightgrey 50%, skyblue 20%)`,
        },
        to: {
            background: `-webkit-linear-gradient(45deg,#C0C0C1 0, lightgrey 50%, skyblue 20%)`,
        }
      },

    smallBannerRow: {
        background: 'linear-gradient(0.25turn, white 50%, grey)',
        width: '100% !important',
        padding: 20,
        position: 'relative',
    },
    smallBannerHeadline: {
        fontWeight: 'bold',
        fontSize: '362%',
        letterSpacing: 1,
        color: '#00deff',
        background: `-webkit-linear-gradient(45deg,${brand.color_superdark} 0, ${brand.color_dark} 50%, ${brand.color_light} 100%)`,
        '-webkitBackgroundClip': 'text',
        '-webkitTextFillColor': 'transparent',
        marginBottom: 40,

    },
    smallBannerSubheading: {
        color: 'black',
        fontWeight: '100',
    },
    smallBannerImage: {
        // position: 'absolute',
        top: 0,
        width: 300,
        height: 300,
    },
    buttonSpacing: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    boxShadow: {
        boxShadow: '0 4px 15px 0 grey',
    },
    responsive__img_and_buttons: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '@media screen and (max-width: 982px)': {
        buttonSpacing: {
            // border: '3px solid green',
        },
        smallBannerImage: {
            height: 200,
            width: 200,
        },
    },
    '@media screen and (max-width: 750px)': {
        responsive__img_and_buttons: {
            display: 'flex',
            flexDirection: 'column',
        },
        buttonSpacing: {
            display: 'flex',
            flexDirection: 'column',
            minWidth: 300,
        },
        // smallBannerImage: {
        //     height: 200,
        //     width: 200,
        // },
    },
    '@media screen and (max-width: 630px)': {
        responsive__img_and_buttons: {
            alignItems: 'start',
        }
    },
    '@media screen and (max-width: 575px)': {
        responsive__img_and_buttons: {
            height: 'auto',
        }
        
    },
    '@media screen and (max-width: 425px)': {
        smallBannerRow: {
            background: `linear-gradient(to top, ${brand.color_superdark} 45%, white 65%)`,
        },
        buttonSpacing: {
            marginBottom: 20,
        },

        smallBannerHeadline: {
            marginTop: '20px !important',
            fontWeight: 'bold',
            color: '#00deff',
            background: `-webkit-linear-gradient(45deg,#C0C0C1 0, lightgrey 50%, skyblue 20%)`,
            transition: '1s ease-in-out infinite',
            '-webkitBackgroundClip': 'text',
            '-webkitTextFillColor': 'transparent',
            marginBottom: 40,
            animation: '$slideRight 1s infinite',

        },
        smallBannerSubheading: {
            color: 'white',
            marginTop: '20px !important',
            fontWeight: 'inherit',
        },
    },
});

function SmallBanner({ headline, subheading, buttonOneText, buttonTwoText }) {

    const classes = useStyles();

    return (
        <React.Fragment>


            <Row className={classes.smallBannerRow}>



                <Col sm={7}>
                    <Row className="h-100 flex-center flex-row" className={classes.responsive__img_and_buttons}>
                        <Col sm={6}>
                            <img src={require('../Images/smallBannerImage.jpg')} className={classes.smallBannerImage} />
                        </Col>
                        <Col sm={4} className={classes.buttonSpacing}>
                            
                            <Button className={classes.boxShadow} variant="outline-info" size="lg">{buttonOneText}</Button>

                            <span style={{ marginBottom: 20 }}></span>

                            <Button className={classes.boxShadow} variant="outline-info" size="lg">{buttonTwoText}</Button>
                        </Col>

                    </Row>
                </Col>
                <Col sm={4} className="flex-center">
                    <Row>
                        <Col sm={12}>
                            <h2 className={classes.smallBannerHeadline}>{headline}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2 className={classes.smallBannerSubheading}>{subheading}</h2>
                        </Col>
                    </Row>
                </Col>

            </Row>


        </React.Fragment>
    );
}
export default SmallBanner