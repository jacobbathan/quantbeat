import React from 'react';
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
    const smallNews = res.slice(0, 10);
    this.setState({ news: smallNews });
  };

  getNewsError = (error) => {
    console.log(error);
  };

  randomColor = () => {
    return Math.floor(Math.random() * 256);
  };

  render() {
    return (
      <div className="mainNews">
        {this.state.news.length < 1 || this.state.news == undefined ? (
          <div>Loading...</div>
        ) : (
          this.state.news.map((news) => (
            <div className="news" id={news.id}>
              <div
                className="newsContainer"
                onClick={() => window.open(news.url)}
              >
                <img className="newsImage" src={news.image} alt="img" />
                <div className="text">
                  <div className="categoryContainer">
                    <div className="category category2">{news.source}</div>
                    <div className="category category1">{news.category}</div>
                  </div>
                  <a href="" className="headline">
                    {news.headline}
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default NewsView;
