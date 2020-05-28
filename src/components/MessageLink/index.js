import React from 'react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

const useStyles = createUseStyles({
    
    message: {
        backgroundColor: `${brand.color_light} !important`,
        maxWidth: 350,
    },
    text: {
        color: `${brand.color_dark} !important`,
    },
    link: {
        color: 'darkgrey',
    }
  })

function MessageLink({ text, linkText, link }) {
    
    const classes = useStyles();

    return (
        <React.Fragment>
      
          <Message className={classes.message}>
            <p className={classes.text}>{text}
                <Link to={link} className={classes.link}>{linkText}</Link>
            </p>
          </Message>
      
        </React.Fragment>
      );
}

export default MessageLink;