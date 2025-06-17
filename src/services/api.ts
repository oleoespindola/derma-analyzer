import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:7860',
});

api.interceptors.request.use((config) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (apiKey && config.headers) {
        config.headers['api-key'] = apiKey;
    }

    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
})

export default api;