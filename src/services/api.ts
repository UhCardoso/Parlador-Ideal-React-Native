import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.166:8989',
})

export default api;