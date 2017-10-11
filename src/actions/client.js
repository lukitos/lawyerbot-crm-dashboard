import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchClients = () => {
  return ({
    type: 'CLIENT',
    payload: axios.get(`${API_URL}/api/contact`)
  });
};

export const addClient = (client) => {
  return ({
    type: 'CLIENT_ADD',
    payload: axios.post(`${API_URL}/api/contact`, client)
  });
}

export const deleteClient = (id, client) => {
  return ({
    type: 'CLIENT_DELETE',
    payload: axios.delete(`${API_URL}/api/contact/${id}`, client)
  });
}

export const updateClient = (id, client) => {
  return ({
    type: 'CLIENT_UPDATE',
    payload: axios.patch(`${API_URL}/api/contact/${id}`, client)
  });
}
