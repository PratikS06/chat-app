import axios from 'axios';

const api_url = 'http://localhost:3634/api';

const chatApi = axios.create({
    baseURL: api_url,
});

chatApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    };

    return config;
});

export default chatApi;
