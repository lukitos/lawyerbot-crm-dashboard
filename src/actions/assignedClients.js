import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchClients = (name) => {
  return ({
    type: 'ASSIGNMENT',
    payload: axios.get(`${API_URL}/api/contact/assign/${name}`)
  });
};
