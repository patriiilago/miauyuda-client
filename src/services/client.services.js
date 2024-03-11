import axios from "axios"

class ClientServices {

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

    saveNewClient = (clientData) => {
        return this.axiosApp.post(`/api/clients/newClient`, clientData)
    }
    getClients = (clientData) => {
        return this.axiosApp.get(`/api/clients/:clientId`, clientData)
    }
    editClient = (clientData) => {
        return this.axiosApp.put(`/api/clients/CientId`, clientData)
    }
    deleteClient = (clientData) => {
        return this.axiosApp.delete(`/api/clients/CientId`, clientData)
    }

}

export default new ClientServices()