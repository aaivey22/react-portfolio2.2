import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    partCanvas: {
        position: "absolute",
        opacity: "0.6"
    }
})

const About = () => {
    const classes = useStyles()
    return (
        <>
          <Navbar />
          <div className="indexContainer">
          <Header />
        <Particles
        canvasClassName={classes.partCanvas}
            params={{
                particles: {
                    number: {
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 1,
                            color: "#615ebd"
                        }
                    },
                    size: {
                        value: 8,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 6,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    }
                }
            }}
        />
        </div>
        </>
    );
};

export default About;