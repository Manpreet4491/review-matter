import axios from 'axios';

export default axios.create({
    baseURL:'movies-production-ab74.up.railway.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});