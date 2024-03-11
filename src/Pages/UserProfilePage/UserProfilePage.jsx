import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import ClientCard from "../../components/ClientCard/ClientCard"
import clientServices from "../../services/client.services"
import PetCard from "../../components/PetCard/PetCard"
import PetServices from "../../services/pet.services"
import './../../Pages/UserProfilePage/UserProfilePage.css'


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

        <div className="UserProfilePage">
            <div className="Section">
                <h1 className="profileTitle">Datos de tu perfil:</h1>
                <ClientCard {...client} key={client._id} />
            </div>
            <div className="Section">
                <h1 className="profileTitle">Datos de tu mascota:</h1>
                <PetCard {...pet} key={pet._id} />
            </div>
        </div>

    )
}

export default UserProfilePage