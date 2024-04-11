import { useEffect, useState } from "react"
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard'
import ProfessionalServices from "../../services/professional.services"
import './../../components/ProfessionalsList/ProfessionalsList'
import { Col, Container, Row } from "react-bootstrap"
import '../../components/ProfessionalsList/ProfessionalsList.css'

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
        <div className="backgroundColorPage">
            <Container>
                <Row>
                    {professionals.map((professional, index) => (
                        <Col md={12} key={index}>
                            <ProfessionalCard {...professional} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default professionalList