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

    postSignup = () => {
        return this.axiosApp.post(`/api/auth/signup`)
    }
    login(clientData) {
        return this.axiosApp.post(`/api/auth/login`, clientData)
    }
    verify = () => {
        return this.axiosApp.get(`/api/auth/verify`)
    }
}

export default new AuthServices()