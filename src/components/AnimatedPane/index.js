import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import { createUseStyles } from 'react-jss';
import WobbleBox from '../WobbleBox';

const useStyles = createUseStyles({
    pane__boxes__container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        // padding: 20,
    },
    pane__boxes__container_outer: {
        display: 'flex',
        flexDirection: 'row',
    },
    pane__boxes__container_inner: {
        display: 'flex',
        flexDirection: 'row',
    },


    '@media (max-width: 1500px)': {
        pane__boxes__container: {
            flexDirection: 'row',
            alignItems: 'start',
        },
        pane__boxes__container_outer: {
            flexDirection: 'row',
        },
        pane__boxes__container_inner: {
            flexDirection: 'row',
        }
    },
    '@media (max-width: 700px)': {
        pane__boxes__container: {
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
            padding: 20,
        },
    },
})

function AnimatedPane({ items }) {
    const props = useSpring({
        display: 'flex',
        alignItems: 'baseline',
        width: '90%',
        height: 'auto',
        border: '1px solid white',
        borderRadius: 25,
        padding: 20,
        background: 'rgba(0, 0, 0, 0.2)',

        from: { width: '0%', height: '0vh' },


    });

    const classes = useStyles();

    const [activePane, setPane] = useState(0);



    return (
        <animated.div style={props}>
            <div className={classes.pane__boxes__container}>


            <div className={classes.pane__boxes__container_outer}>
            
                <div className={classes.pane__boxes__container_inner}>
                    { "Foo Bar".split(' ').map((each) => {
                        return <WobbleBox key={each} title={each} setPane={setPane} activePane={activePane} />
                    })}
                </div>

                <div className={classes.pane__boxes__container_inner}>
                    { "Lorem Ipsum".split(' ').map((each) => {
                        return <WobbleBox key={each} title={each} setPane={setPane} activePane={activePane} />
                    })}
                </div>
            
            </div>

            <div className={classes.pane__boxes__container_outer}>
            
                <div className={classes.pane__boxes__container_inner}>
                    { "Foo Bar".split(' ').map((each) => {
                        return <WobbleBox key={each} title={each} setPane={setPane} activePane={activePane} />
                    })}
                </div>

                <div className={classes.pane__boxes__container_inner}>
                    { "Lorem Ipsum".split(' ').map((each) => {
                        return <WobbleBox key={each} title={each} setPane={setPane} activePane={activePane} />
                    })}
                </div>
            
            </div>


            </div>
        </animated.div>
    )
}

export default AnimatedPane;
