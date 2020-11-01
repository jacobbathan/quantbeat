import * as helpers from './helpers.services';
import axios from 'axios';

const finnHubApiUrl = 'https://finnhub.io/api/v1/';
const finnHubApiKey = process.env.REACT_APP_API_KEY;

const getCompanyInfo = (data) => {
  const config = {
    method: 'GET',
    url: `${finnHubApiUrl}/stock/profile?symbol=${data}&token=${finnHubApiKey}`,
    crossdomain: true,
    headers: { 'Content-Type': 'Application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const getRecomendationTrend = (data) => {
  const config = {
    method: 'GET',
    url: `${finnHubApiUrl}/stock/recommendation?symbol=${data}&token=${finnHubApiKey}`,
    crossdomain: true,
    headers: { 'Content-Type': 'Application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const getCompanyNews = (data) => {
  let today = new Date().toISOString().slice(0, 10);
  let monthAgo = new Date();
  monthAgo.setDate(monthAgo.getDate() - 90);
  let monthAgoString = monthAgo.toISOString().slice(0, 10);

  const config = {
    method: 'GET',
    url: `${finnHubApiUrl}/company-news?symbol=${data}&from=${today}&to=${monthAgoString}&token=${finnHubApiKey}`,
    crossdomain: true,
    headers: { 'Content-Type': 'Application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export { getCompanyInfo, getRecomendationTrend, getCompanyNews };
