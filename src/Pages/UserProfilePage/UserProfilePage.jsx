import { useState, useEffect } from "react"
import ClientCard from "../../components/ClientCard/ClientCard"
import clientServices from "../../services/client.services"
import PetCard from "../../components/PetCard/PetCard"
import PetServices from "../../services/pet.services"


const UserProfilePage = () => {


    const [clients, setClients] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => loadClient(), [])
    useEffect(() => loadPet(), [])

    const loadClient = () => {
        clientServices
            .getClient(clients._id)
            .then(({ data }) => setClients(data))
            .catch(err => console.log(err))

    }
    const loadPet = () => {
        PetServices
            .getPet(pets._id)
            .then(({ data }) => setPets(data))
            .catch(err => console.log(err))
    }

    return (

        <>
            {clients.map(client => (
                <ClientCard {...client} key={client._id} />
            ))}
            {pets.map(pet => (
                <PetCard {...pet} key={pet._id} />
            ))}
        </>
    )
}

export default UserProfilePage