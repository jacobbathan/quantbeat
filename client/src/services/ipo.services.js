import * as helpers from './helpers.services';
import axios from 'axios';

const finnHubApiUrl = 'https://finnhub.io/api/v1/';
const finnHubApiKey = process.env.REACT_APP_API_KEY;

const getUpcomingIPO = () => {
  let today = new Date().toISOString().slice(0, 10);
  let monthAhead = new Date();
  monthAhead.setDate(monthAhead.getDate() + 365);
  let monthAheadString = monthAhead.toISOString().slice(0, 10);

  const config = {
    method: 'GET',
    url: `${finnHubApiUrl}/calendar/ipo?from=${today}&to=${monthAheadString}&token=${finnHubApiKey}`,
    crossdomain: true,
    headers: { 'Content-Type': 'Application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export { getUpcomingIPO };
