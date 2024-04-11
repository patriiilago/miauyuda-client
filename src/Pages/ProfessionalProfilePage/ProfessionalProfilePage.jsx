import { useState, useEffect, useContext } from "react"
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard"
import professionalServices from "../../services/professional.services"
import RequestList from './../../components/RequestsList/RequestsList'
import { AuthContext } from "../../context/auth.context"
import requestServices from "../../services/request.services"
import './ProfessionalProfilePage.css'
import { Container } from "react-bootstrap"

const ProfessionalProfilePage = () => {

    const [professional, setProfesional] = useState([])
    const [requests, setRequests] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadRequests()
        loadProfessional()
    }, [])

    const loadProfessional = () => {
        professionalServices
            .getProfessional(user._id)
            .then(({ data }) => setProfesional(data))
            .catch(err => console.log(err))
    }

    const loadRequests = () => {
        requestServices
            .getAllProfessionalRequests(user._id)
            .then(({ data }) => setRequests(data))
            .catch(err => console.log(err))

    }

    return (

        <Container>

            <h1 className="questionResponseTitle">Datos de tu perfil:</h1>
            <ProfessionalCard {...professional} />

            <h1 className="questionResponseTitle">Consultas recibidas:</h1>
            <RequestList requests={requests} />

        </Container>

    )
}

export default ProfessionalProfilePage