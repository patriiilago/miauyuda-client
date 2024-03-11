import axios from "axios"

class AuthServices {

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

    postSignUpClient = (clientData) => {
        return this.axiosApp.post(`/api/auth/signupclient`, clientData)
    }
    loginClient(clientData) {
        return this.axiosApp.post(`/api/auth/login/client`, clientData)
    }
    loginProfessional(professionalData) {
        return this.axiosApp.post(`/api/auth/login/professional`, professionalData)
    }
    verify = () => {
        return this.axiosApp.get(`/api/auth/verify`)
    }
    newProfessional = (professionalData) => {
        return this.axiosApp.post(`/api/auth/newProfessional`, professionalData)
    }
}

export default new AuthServices()