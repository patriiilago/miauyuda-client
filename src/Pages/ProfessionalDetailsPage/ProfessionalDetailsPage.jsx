import { useParams } from 'react-router-dom'
import professionalServices from '../../services/professional.services'
import { useState, useEffect } from "react"
import ProfessionalCardDetails from '../../components/ProfessionalCardDetails/ProfessionalCardDetails'
import ProfessionalCard from '../../components/ProfessionalCard/ProfessionalCard'
import { Col, Row, Container } from "react-bootstrap"
import ClinicMap from '../../components/ClinicMap/ClinicMap'

const ProfessionalDetails = (professional_id) => {

    const [professional, setProfessionals] = useState([])

    useEffect(() => loadProfesional(), [])

    const { professionalId } = useParams()

    const loadProfesional = () => {
        professionalServices
            .getProfessional(professionalId)
            .then(({ data }) => setProfessionals(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <Col md={{ span: 6 }}>
                <ProfessionalCardDetails />
            </Col>

            <Col md={{ span: 6 }}>
                {professional.location && <ClinicMap coordinates={professional.location.coordinates} />}
            </Col>

        </Container>


    )
}
export default ProfessionalDetails