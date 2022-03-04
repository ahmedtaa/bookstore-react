import axios from 'axios';

const apiClient = () => {
  axios.create({
    baseURL:
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hU7hRqGMmMkUTHelAE4I/',
    responseType: 'json',
  });
};

export default apiClient;
