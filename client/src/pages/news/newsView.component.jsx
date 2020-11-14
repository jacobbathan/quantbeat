import React from 'react';
import { Grid } from '@material-ui/core';
import * as newsServices from '../../services/news.services';
import './newsView.styles.scss';

class NewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount = () => {
    this.getNews();
  };

  getNews = () => {
    newsServices.getNews().then(this.getNewsSuccess).catch(this.getNewsError);
  };

  getNewsSuccess = (res) => {
    this.setState({ news: res });
  };

  getNewsError = (error) => {
    console.log(error);
  };

  render() {
    return this.state.news.map((news) => (
      <Grid container className="news" id={news.id}>
        <div className="category">{news.category} //</div>
        <Grid item xs={6}>
          <a href={news.url}>
            {news.headline} - {news.source}
          </a>
        </Grid>
        <Grid item xs={6}>
          <img className="newsImage" src={news.image} alt="img" />
        </Grid>
        <div>{news.summary}</div>
      </Grid>
    ));
  }
}

export default NewsView;
