import { useEffect, useState } from "react"
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard'
import ProfessionalServices from "../../services/professional.services"
import { Container, Col, Row } from "react-bootstrap"

const EmergenciesList = () => {
    const [professionals, setProfessionals] = useState([])

    useEffect(() => {
        loadProfessional()
    }, []);

    const loadProfessional = () => {
        ProfessionalServices.getAllProfessionals()
            .then(({ data }) => {
                const emergencyProfessionals = data.filter(professional => professional.emergencies)
                setProfessionals(emergencyProfessionals)
            })
            .catch(err => console.error(err))
    }

    return (
        <Container>
            <Row>
                {professionals.map((professional, index) => (
                    <Col md={4} key={index}>
                        <ProfessionalCard {...professional} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}



export default EmergenciesList