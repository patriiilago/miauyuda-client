import axios from "axios"

class PetServices {

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

    getAllPets = (petData) => {
        return this.axiosApp.get(`/api/pets`, petData)
    }
    saveNewPet = (petData) => {
        return this.axiosApp.post(`/api/pets/newPet`, petData)
    }
    getPets = (petData) => {
        return this.axiosApp.get(`/api/pets/petId`, petData)
    }
    editPet = (petId) => {
        return this.axiosApp.put(`/api/pets/${petId}`)
    }
    deletePet = (petId) => {
        return this.axiosApp.delete(`/api/pets/${petId}`)
    }

}

export default new PetServices()