import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import phone from '../../assets/phone.jpeg';
import research from '../../assets/research.jpeg';
import stocks from '../../assets/stocks.jpg';
import './homepage.styles.scss';

const Homepage = () => (
  <div>
    <Typography variant="h2" className="header">
      Sign up today to get your pulse on the market.
    </Typography>
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
          purus quam. Nulla nec porta velit, et porta est. Pellentesque non diam
          quis neque egestas auctor. Pellentesque volutpat arcu in diam iaculis
          ultricies. Pellentesque egestas, ligula eu placerat lacinia, odio
          augue suscipit enim, id convallis mi urna nec mi. Aliquam justo erat,
          ullamcorper ac ligula eget, accumsan sollicitudin magna. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={phone} className="image" alt="phone" />
      </Grid>
      <Grid item xs={6}>
        <img src={research} className="image" alt="research" />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
          purus quam. Nulla nec porta velit, et porta est. Pellentesque non diam
          quis neque egestas auctor. Pellentesque volutpat arcu in diam iaculis
          ultricies. Pellentesque egestas, ligula eu placerat lacinia, odio
          augue suscipit enim, id convallis mi urna nec mi. Aliquam justo erat,
          ullamcorper ac ligula eget, accumsan sollicitudin magna. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
          purus quam. Nulla nec porta velit, et porta est. Pellentesque non diam
          quis neque egestas auctor. Pellentesque volutpat arcu in diam iaculis
          ultricies. Pellentesque egestas, ligula eu placerat lacinia, odio
          augue suscipit enim, id convallis mi urna nec mi. Aliquam justo erat,
          ullamcorper ac ligula eget, accumsan sollicitudin magna. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={stocks} className="image" alt="stocks" />
      </Grid>
    </Grid>
  </div>
);

export default Homepage;
