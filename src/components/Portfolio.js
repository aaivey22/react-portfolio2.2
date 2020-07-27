import React from 'react';
import Navbar from './Navbar';
import project1 from '../images/burger-meister-gif.gif';
import project2 from '../images/jotter.gif';
import project3 from '../images/inspirit.JPG';
import project4 from '../images/read.gif';
import project5 from '../images/overYonder.gif';
import project6 from '../images/myFamiliar.png';
import avatar from '../images/avatar.png';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        margin: "5rem auto",
        backgroundColor: '#fbe9e7',

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    content: {
        padding: 24,
    },
    avatar: {
        width: 50,
        height: 50,
        border: '2px solid #fff',
        margin: '-48px 32px 0 auto',
      '& > img': {
        margin: 0,
        }
    }
}));

const Portfolio = React.memo(function PostCard() {
    
      const cardStyles = useStyles();
      const mediaStyles = useSlopeCardMediaStyles();
      const shadowStyles = useSoftRiseShadowStyles();
      const textCardContentStyles = useN01TextInfoContentStyles();

      return (
        <Box component="div">
        <Navbar />
        <Grid container justify="center">

        <Grid spacing={2} item xs={12} sm={8} md={6}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={project3}
          />
          <Avatar className={cardStyles.avatar} src={avatar} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'Inspirit'}
              body={
                'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
              }
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={project1}
          />
          <Avatar className={cardStyles.avatar} src={avatar} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'The Burger-Meister'}
              body={
                'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
              }
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={project2}
          />
          <Avatar className={cardStyles.avatar} src={avatar} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'Jotter'}
              body={
                'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
              }
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={project5}
          />
          <Avatar className={cardStyles.avatar} src={avatar} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'Over Yonder'}
              body={
                'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
              }
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={project6}
          />
          <Avatar className={cardStyles.avatar} src={avatar} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'My Familiar'}
              body={
                'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
              }
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={project4}
          />
          <Avatar className={cardStyles.avatar} src={avatar} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'Read-O-Matic'}
              body={
                'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
              }
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Card>
        </Grid>

        </Grid>
        </Box>
      );
    });
    

export default Portfolio;