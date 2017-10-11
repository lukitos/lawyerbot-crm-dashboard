import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const findClient = (id) => {
  return ({
    type: 'CLIENT_FIND',
    payload: axios.get(`${API_URL}/api/contact/${id}`)
  });
};
