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

    saveNewClient = () => {
        return this.axiosApp.post(`/api/clients/newClient`)
    }
    getClients = () => {
        return this.axiosApp.get(`/api/clients/CientId`)
    }
    editClient = () => {
        return this.axiosApp.put(`/api/clients/CientId`)
    }
    deleteClient = () => {
        return this.axiosApp.delete(`/api/clients/CientId`)
    }

}

export default new ClientServices()