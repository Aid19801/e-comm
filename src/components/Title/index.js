import React from 'react';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

const useStyles = createUseStyles({
    title: {
        color: `${brand.color_superlight}`,
        fontFamily: `${brand.fontFamily}`,
    }
});

function Title({ text }) {

    const classes = useStyles();

    return (
        <h1 className={classes.title}>{text}</h1>
    );
}
export default Title
