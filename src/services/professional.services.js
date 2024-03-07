import axios from "axios"

class ProfessionalServices {

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

    getAllProfessionals = () => {
        return this.axiosApp.get(`/api/professionals`)
    }
    saveNewProfessional = () => {
        return this.axiosApp.post(`/api/professionals/newProfessional`)
    }
    getProfessional = () => {
        return this.axiosApp.get(`/api/professionals/professionalId`)
    }
    editProfessional = () => {
        return this.axiosApp.put(`/api/professionals/professionalId`)
    }
    deleteProfessional = () => {
        return this.axiosApp.delete(`/api/professionals/professionalId`)
    }
}

export default new ProfessionalServices()