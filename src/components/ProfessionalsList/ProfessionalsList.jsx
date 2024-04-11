import { useEffect, useState } from "react"
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard'
import ProfessionalServices from "../../services/professional.services"
import './../../components/ProfessionalsList/ProfessionalsList'
import { Col, Container, Row } from "react-bootstrap"

const professionalList = () => {

    const [professionals, setProfessionals] = useState([])

    useEffect(() => loadProfesional(), [])

    const loadProfesional = () => {
        ProfessionalServices
            .getAllProfessionals(professionals)
            .then(({ data }) => setProfessionals(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                {professionals.map((professional, index) => (
                    <Col md={12} key={index}>
                        <ProfessionalCard {...professional} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default professionalList