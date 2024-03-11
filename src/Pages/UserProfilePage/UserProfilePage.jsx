import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"

import ClientCard from "../../components/ClientCard/ClientCard"
import clientServices from "../../services/client.services"
import PetCard from "../../components/PetCard/PetCard"
import PetServices from "../../services/pet.services"



const UserProfilePage = () => {


    const [client, setClient] = useState([])
    const [pet, setPet] = useState([])

    // useEffect(() => {
    //     loadClients()
    //     loadPets()
    // }, [])

    // const loadClients = () => {
    //     clientServices
    //         .getClients()
    //         .then(({ data }) => setClient(data))
    //         .catch(err => console.log(err))

    // }
    // const loadPets = () => {
    //     PetServices
    //         .getPets()
    //         .then(({ data }) => setPet(data))
    //         .catch(err => console.log(err))
    // }

    return (

        <Container>
            <ClientCard {...client} key={client._id} />
            <PetCard {...pet} key={pet._id} />
        </Container>

    )
}

export default UserProfilePage