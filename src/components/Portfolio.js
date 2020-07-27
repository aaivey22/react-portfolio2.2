import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
    
} from '@material-ui/core'
import project1 from '../images/burger-meister-gif .gif';

const Portfolio = () => {
    return (
            <Box component="div">
                <Navbar />
            <Grid container justify="center" alignItems="center">

                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I'm baby seitan semiotics lyft fanny pack hella pour-over, lomo trust fund austin. 
                                    Wayfarers literally church-key jianbing heirloom organic everyday carry kitsch fixie man bun shaman. 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
            </Box>        
    )
}

export default Portfolio;