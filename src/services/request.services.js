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

    getAllRequests = (requestData) => {
        return this.axiosApp.get(`/api/Requests`, requestData)
    }
    newRequest = (requestData) => {
        return this.axiosApp.post(`/api/pets/newRequest`, requestData)
    }
    getRequest = (requestData) => {
        return this.axiosApp.get(`/api/pets/requestId`, requestData)
    }
    editRequest = (requestData) => {
        return this.axiosApp.put(`/api/pets/requestId`, requestData)
    }
    deleteRequest = (requestData) => {
        return this.axiosApp.delete(`/api/pets/requestId`, requestData)
    }
}

export default new RequestServices()