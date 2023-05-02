import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

//interceptors for request and response

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;
    if(response.status == 401){ //401 = error code for authorization fail
        localStorage.removeItem('ACCESS_TOKEN');
    }
})

export default axiosClient