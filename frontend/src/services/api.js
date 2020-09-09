import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://api.esports-calendar.localhost/',
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});

export default apiClient;