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

export { getCompanyInfo };
