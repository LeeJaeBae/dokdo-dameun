import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.38.227.189:4000/dokdo',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
export default api;
