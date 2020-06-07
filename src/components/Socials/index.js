
import React, { useEffect, useState } from 'react';
import { Twitter, Facebook, Whatsapp, Pinterest } from 'react-social-sharing';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    socialsContainer: {
        height: 'auto',
        // padding: 5,
        border: '1px solid grey',
        display: 'flex',
        justifyContent: 'start',
    },

    '@media screen and (max-width: 425px)': {
        socialsContainer: {
            width: '100%',
            justifyContent: 'center',

            '& a': {
                fontSize: 12,
            }
        },
    }

})


function Socials(props) {

    const classes = useStyles();

    useEffect(() => {

    }, []);

    return (
        <div className={classes.socialsContainer}>
            <Facebook solidcircle large link="www.theguardian.com" />
            <Twitter solidcircle large link="www.theguardian.com" />
            <Whatsapp solidcircle large link="www.theguardian.com" />
            <Pinterest solidcircle large link="www.theguardian.com" />
        </div>
    );
}
export default Socials