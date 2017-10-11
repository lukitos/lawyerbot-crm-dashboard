import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchChartData = () => {
  return ({
    type: 'CHARTDATA',
    payload: axios.get(`${API_URL}/api/chartdata`)
  });
};
