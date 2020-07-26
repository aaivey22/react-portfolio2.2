import React from 'react';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../images/avatar.png'

// CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#615ebd"
    },
    subtitle: {
        color: "#615ebd",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Angela Ivey"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Angela Ivey"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Design", "Web Development", "MERN Stack"]}
                typeSpeed={40} backSpeed={40} loop />
            </Typography>
        </Box>        
    )
};
 export default Header;