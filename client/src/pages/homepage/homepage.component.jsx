import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import phone from '../../assets/phone.jpeg';
import research from '../../assets/research.jpeg';
import stocks from '../../assets/stocks.jpg';
import './homepage.styles.scss';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    marginBottom: '2vh',
    padding: '0vh 5vw',
  },
  bodyText: {
    margin: '5vh auto',
    fontWeight: '100',
    fontSize: '13pt',
    width: '400px',
  },
  image: {
    height: '300px',
    width: 'auto',
    marginTop: '5vh',
  },
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" className={classes.header}>
        Sign up today to get your pulse on the market.
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
            purus quam. Nulla nec porta velit, et porta est. Pellentesque non
            diam quis neque egestas auctor. Pellentesque volutpat arcu in diam
            iaculis ultricies. Pellentesque egestas, ligula eu placerat lacinia,
            odio augue suscipit enim, id convallis mi urna nec mi. Aliquam justo
            erat, ullamcorper ac ligula eget, accumsan sollicitudin magna. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={phone} className={classes.image} alt="phone" />
        </Grid>
        <Grid item xs={6}>
          <img src={research} className={classes.image} alt="research" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
            purus quam. Nulla nec porta velit, et porta est. Pellentesque non
            diam quis neque egestas auctor. Pellentesque volutpat arcu in diam
            iaculis ultricies. Pellentesque egestas, ligula eu placerat lacinia,
            odio augue suscipit enim, id convallis mi urna nec mi. Aliquam justo
            erat, ullamcorper ac ligula eget, accumsan sollicitudin magna. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
            purus quam. Nulla nec porta velit, et porta est. Pellentesque non
            diam quis neque egestas auctor. Pellentesque volutpat arcu in diam
            iaculis ultricies. Pellentesque egestas, ligula eu placerat lacinia,
            odio augue suscipit enim, id convallis mi urna nec mi. Aliquam justo
            erat, ullamcorper ac ligula eget, accumsan sollicitudin magna. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={stocks} className={classes.image} alt="stocks" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
