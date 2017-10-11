import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getMetrics = () => {
  return ({
    type: 'METRICS',
    payload: axios.get(`${API_URL}/api/metrics`)
  });
};
