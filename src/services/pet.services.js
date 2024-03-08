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

    getAllPets = () => {
        return this.axiosApp.get(`/api/pets`)
    }
    saveNewPet = () => {
        return this.axiosApp.post(`/api/pets/newPet`)
    }
    getPet = () => {
        return this.axiosApp.get(`/api/pets/PetId`)
    }
    editPet = () => {
        return this.axiosApp.put(`/api/pets/PetId`)
    }
    deletePet = () => {
        return this.axiosApp.delete(`/api/pets/PetId`)
    }

}

export default new PetServices()