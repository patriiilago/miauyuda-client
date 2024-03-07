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
    postlogin = () => {
        return this.axiosApp.post(`/api/auth/login`)
    }
    getVerify = () => {
        return this.axiosApp.get(`/api/auth/verify`)
    }
}

export default new AuthServices()