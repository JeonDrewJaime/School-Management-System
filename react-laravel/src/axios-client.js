import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

//interceptors
axiosClient.interceptors.request.use((config) => {
    const stud_token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${stud_token}`; //bearer token = gain access to API using token itself
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status == 401) {
            // 401 = error code for unauthorized action
            localStorage.removeItem('ACCESS_TOKEN');
        } //we can put else statement for other error codes such as 403 or forbidden response error code

        throw error;
    }
);

export default axiosClient;
