import axios from "axios"

class RequestServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    getAllRequests = () => {
        return this.axiosApp.get(`/api/Requests`)
    }
    saveNewRequest = () => {
        return this.axiosApp.post(`/api/pets/newRequest`)
    }
    getRequest = () => {
        return this.axiosApp.get(`/api/pets/requestId`)
    }
    editRequest = () => {
        return this.axiosApp.put(`/api/pets/requestId`)
    }
    deleteRequest = () => {
        return this.axiosApp.delete(`/api/pets/requestId`)
    }
}

export default new RequestServices()