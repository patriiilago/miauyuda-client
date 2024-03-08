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
    login(clientData) {
        return this.axiosApp.post(`/api/auth/login`, clientData)
    }
    verify = () => {
        return this.axiosApp.get(`/api/auth/verify`)
    }
    postSignup = (professionalData) => {
        return this.axiosApp.post(`/api/auth/signupprofessional`, professionalData)
    }
}

export default new AuthServices()