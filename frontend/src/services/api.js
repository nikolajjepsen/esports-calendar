import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://api.esports-calendar.localhost/',
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});

apiService.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401) {
            localStorage.removeItem('currentUser');
            window.location.reload();
        }
    }
);


export default apiService;