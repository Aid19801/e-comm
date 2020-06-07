import React from 'react';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

const useStyles = createUseStyles({
    jumboContainer: {
        width: '100%',
        height: 'auto',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '150px 0 150px 0',
        background: brand.color_superlight,
    },
    jumboImgContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    jumbotronImg: {
        border: '2px solid white',
        borderRadius: '127px 0 127px',
    },
    desktopJumboTronTextContainer: {
        position: 'absolute',
        left: '20%',
        '& h2': {
            fontSize: 40,
            color: 'white',
        }
    },
    mobileJumboTronTextContainer: {
        display: 'none',
    },
    mobileHeadline: {
        display: 'none',
    },
    mobileSubheading: {
        display: 'none',
        fontWeight: 100,
    },
    '@media screen and (max-width: 1800px)': {
        desktopJumboTronTextContainer: {
            left: '18%',
            // border: '3px solid green',
        },
    },
    '@media screen and (max-width: 1500px)': {
        desktopJumboTronTextContainer: {
            left: '14%',
            // border: '3px solid red',
        },
    },
    '@media screen and (max-width: 1356px)': {
        desktopJumboTronTextContainer: {
            left: '9%',
            // border: '3px solid blue',
        },
    },
    '@media screen and (max-width: 1250px)': {
        desktopJumboTronTextContainer: {
            left: '3%',
            // border: '3px solid yellow',
        },
    },
    '@media screen and (max-width: 1128px)': {
        desktopJumboTronTextContainer: {
            left: '36%',
            background: 'black',
            border: 'none',
            padding: 10,
        },
    },
    '@media screen and (max-width: 1000px)': {
        desktopJumboTronTextContainer: {
            left: '32%',
            // border: '3px solid pink',
            background: 'black',
            padding: 10,
        },
    },

    '@media screen and (max-width: 862px)': {
        desktopJumboTronTextContainer: {
            left: '35%',
            // border: '3px solid purple',
        },
    },
    
    '@media screen and (max-width: 800px)': {
        jumbotronImg: {
            width: '95%',
            border: '2px solid white',
        }
    },
    '@media screen and (max-width: 425px)': {
        jumboContainer: {
            borderRadius: '50px 0 150px 0',
            '& h2': {
                display: 'none',
            }
        },
        jumboImgContainer: {
            position: 'relative',
        },
        jumbotronImg: {
            border: '2px solid white',
            borderRadius: '48px 0 127px',
        },
        mobileJumboTronTextContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            top: '2%',
            left: '16%',
            padding: 10,
        },
        mobileHeadline: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 0,
            color: 'white',
            fontSize: 20,
            background: 'black',
        },
        mobileSubheading: {
            display: 'flex',
            marginBottom: 0,
            color: 'white',
            fontSize: 43,
        },
    }
});

function Jumbotron({ headline, subheading, imgSrc, imgAlt }) {

    const classes = useStyles();

    return (
        <Row className="w-100">


            <Col sm={12}>
                <Fade delay={300}>
                    <div className={classes.jumboContainer}>


                        <div className={classes.desktopJumboTronTextContainer}>
                            <h2>{headline}</h2>
                            <h2 style={{ fontWeight: 600 }}>{subheading}</h2>
                        </div>
                        <div className={classes.jumboImgContainer}>

                            <img className={classes.jumbotronImg} src={imgSrc} alt={imgAlt} />

                            <div className={classes.mobileJumboTronTextContainer}>
                                <p className={classes.mobileHeadline}>{headline}</p>
                                <p className={classes.mobileSubheading}>{subheading}</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Col>

        </Row>
    );
}
export default Jumbotron