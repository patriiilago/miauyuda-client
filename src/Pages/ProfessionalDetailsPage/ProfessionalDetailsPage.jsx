import { useParams } from 'react-router-dom'
import professionalServices from '../../services/professional.services'
import { useState, useEffect } from "react"
import ProfessionalCardDetails from '../../components/ProfessionalCardDetails/ProfessionalCardDetails'
import { Col, Row, Container } from "react-bootstrap"
import ClinicMap from '../../components/ClinicMap/ClinicMap'
import './ProfessionalDetailsPage.css'

const ProfessionalDetails = () => {

    const [professional, setProfessional] = useState([])

    useEffect(() => loadProfesional(), [])

    const { professionalId } = useParams()

    const loadProfesional = () => {
        professionalServices
            .getProfessional(professionalId)
            .then(({ data }) => setProfessional(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <h1 className="ProfessionalName">{`${professional.firstName} ${professional.lastName}`}</h1>

            <Row className='ProfessionalDetailsPage'>
                <Col md={{ span: 6 }}>
                    <ProfessionalCardDetails {...professional} />
                </Col>
                <Col md={{ span: 6 }}>
                    {professional.location && <ClinicMap coordinates={professional.location.coordinates} />}
                </Col>
            </Row>

        </Container>


    )
}
export default ProfessionalDetails