import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import { createUseStyles } from 'react-jss';
import brand from '../../brand.json';

const useStyles = createUseStyles({

    '@keyframes slideRight': {
        from: {opacity: 0},
        to: {opacity: 1}
      },

    pane__box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid white',
        minHeight: 300,
        maxHeight: 300,
        height: 300,

        minWidth: 300,
        maxWidth: 300,
        width: 300,
        margin: 20,
        position: 'relative'
    },

    '@media (max-width: 700px)': {
        pane__box: {
            width: '100%',
            height: 200,

            marginBottom: 20,
        }
    }
})

function WobbleBox({ title, show, tellParent }) {

    const headerProps = useSpring({
        fontSize: 35,

        from: { fontSize: 0 }
    });

    const classes = useStyles();

    const [state, toggle] = useState(false);

    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });

    const handleClick = () => {
        toggle(!state);
        tellParent()
    }

    return (
        <div className={classes.pane__box} onClick={() => toggle(!state)}>
            <animated.div
                style={{
                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                }}>
                <animated.h2 style={headerProps}>{title}</animated.h2>
            </animated.div>
            { show && (
                <animated.div style={{ opacity: show ? 1 : 0 }}>
                    <h1>EXPANDED</h1>
                    <p>ipsum lorem and stuff and things and other things Monday to December. and stuff and things and other things Monday to December. and stuff and things and other things Monday to December</p>
                </animated.div>
            )}
        </div >
    )
}

export default WobbleBox;
