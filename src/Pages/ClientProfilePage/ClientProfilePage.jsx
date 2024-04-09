import { useState, useEffect, useContext } from "react"
import ClientCard from "../../components/ClientCard/ClientCard"
import clientServices from "../../services/client.services"
import PetCard from "../../components/PetCard/PetCard"
import './ClientProfilePage.css'
import RequestsList from "../../components/RequestsList/RequestsList.jsx"
import { AuthContext } from "../../context/auth.context.jsx"
import requestServices from "../../services/request.services.js"
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ClientProfilePage = () => {

    const [client, setClient] = useState([])
    const [requests, setRequests] = useState([])
    const { user } = useContext(AuthContext)
    const [selectedCard, setSelectedCard] = useState('profile')

    useEffect(() => {
        loadClient()
        loadRequests()
    }, [])

    const loadClient = () => {
        clientServices
            .getClient(user._id)
            .then(({ data }) => setClient(data))
            .catch(err => console.log(err))
    }

    const loadRequests = () => {
        requestServices
            .getAllClientRequests(user._id)
            .then(({ data }) => setRequests(data))
            .catch(err => console.log(err))
    }
    const handleSidebarButtonClick = (cardType) => {
        setSelectedCard(cardType)
    }
    return (
        <Row className="UserProfilePage">
            <Col className="sideBar" md='3'>
                <h2 className="sideBarTitle">Mi cuenta</h2>
                <hr />
                <Link className="buttonSideBar" onClick={() => handleSidebarButtonClick('profile')}><img className="imageProfile" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712680681/ziqu6bt6fswnlwvq814c.png" alt="profile image" />Mi perfil</Link>
                <Link className="buttonSideBar" onClick={() => handleSidebarButtonClick('pets')}> <img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712680681/ugaynodhmypjeifobqxo.svg" alt="pet image" />Mis mascotas</Link>
                <Link className="buttonSideBar" onClick={() => handleSidebarButtonClick('requests')}><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712680681/uwyluzpg2cdajvm7ffyo.svg" alt="notification image" />Mis consultas</Link>
            </Col>
            <Col md='8'>
                {selectedCard === 'profile' && <ClientCard {...client} />}
                {selectedCard === 'pets' && <PetCard {...client.pet} />}
                {selectedCard === 'requests' && <RequestsList requests={requests} loadRequests={loadRequests} />}
            </Col>
        </Row>

    )
}

export default ClientProfilePage