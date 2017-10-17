import axios from 'axios';
import config from '../config';

// const API_URL = 'http://13.59.231.79:8000';
// const API_URL = 'http://localhost:8000';
const API_URL = config.API_URL;

export const fetchChartData = () => {
  return ({
    type: 'CHARTDATA',
    payload: axios.get(`${API_URL}/api/chartdata`)
  });
};
