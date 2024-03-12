import { useState, useEffect, useContext } from "react"
import ClientCard from "../../components/ClientCard/ClientCard"
import clientServices from "../../services/client.services"
import PetCard from "../../components/PetCard/PetCard"
import './../../Pages/ClientProfilePage/ClientProfilePage.css'
import RequestsList from "../../components/RequestsList/RequestsList.jsx"
import { AuthContext } from "../../context/auth.context.jsx"

const ClientProfilePage = () => {

    const [client, setClient] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadClient()
    }, [])

    const loadClient = () => {
        clientServices
            .getClient(user._id)
            .then(({ data }) => setClient(data))
            .catch(err => console.log(err))
    }

    return (

        <div className="UserProfilePage">
            <div className="Section">
                <h1 className="profileTitle">Datos de tu perfil:</h1>
                <ClientCard {...client} />
            </div>
            <div className="Section">
                <h1 className="profileTitle">Datos de tu mascota:</h1>
                <PetCard {...client.pet} />
            </div>
            <div>
                <h1>Tus consultas</h1>
                <RequestsList clientId={user._id} />
            </div>
        </div>

    )
}

export default ClientProfilePage