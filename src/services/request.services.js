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
        return this.axiosApp.post(`/api/requests/newRequest`, requestData)
    }
    getRequest = (requestData) => {
        return this.axiosApp.get(`/api/requests/requestId`, requestData)
    }
    getAllClientRequests = clientId => {
        return this.axiosApp.get(`/api/requests/client/${clientId}`)
    }
    getAllProfessionalRequests = professionalId => {
        return this.axiosApp.get(`/api/requests/professional/${professionalId}`)
    }
    editRequest = (requestId, requestData) => {
        return this.axiosApp.put(`/api/requests/${requestId}`, requestData)
    }
    deleteRequest = (requestData) => {
        return this.axiosApp.delete(`/api/requests/requestId`, requestData)
    }
}

export default new RequestServices()