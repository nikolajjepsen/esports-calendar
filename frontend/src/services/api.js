import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://api.esports-calendar.localhost/',
    withCredentials: true,
});

export default apiClient;