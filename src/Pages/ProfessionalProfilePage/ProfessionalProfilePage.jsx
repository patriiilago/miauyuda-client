import { useState, useEffect } from "react"
import ClientCard from "../../components/ClientCard/ClientCard"
import clientServices from "../../services/client.services"



const ProfessionalProfilePage = () => {


    const [clients, setClients] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        loadClients()
        loadPets()
    }, [])

    const loadClients = () => {
        clientServices
            .getClients()
            .then(({ data }) => setClients(data))
            .catch(err => console.log(err))

    }
    const loadPets = () => {
        PetServices
            .getPets()
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

export default ProfessionalProfilePage