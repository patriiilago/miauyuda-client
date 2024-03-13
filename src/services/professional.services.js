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

    getAllProfessionals = (professionalData) => {
        return this.axiosApp.get(`/api/professionals`, professionalData)
    }
    // newProfessional = (professionalData) => {
    //     return this.axiosApp.post(`/api/professionals/newProfessional`, professionalData)
    // }
    getProfessional = (professional_id) => {
        return this.axiosApp.get(`/api/professionals/${professional_id}`)
    }
    editProfessional = (professionalData) => {
        return this.axiosApp.put(`/api/professionals/professionalId`, professionalData)
    }
    deleteProfessional = (professionalData) => {
        return this.axiosApp.delete(`/api/professionals/professionalId`, professionalData)
    }
}

export default new ProfessionalServices()