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

        <Row>
            {professionals.map((professional, index) => (
                <Col key={index}>
                    <ProfessionalCard {...professional} />
                </Col>
            ))}
        </Row>

    )
}



export default EmergenciesList