import { Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./professionalCardDetails.css"
import { useContext } from "react"
import { AuthContext } from "./../../context/auth.context"

const ProfessionalCardDetails = ({
    _id,
    firstName,
    lastName,
    phone,
    email,
    specialty,
    emergencies,
    clinic,
    image,

}) => {

    const { user } = useContext(AuthContext)


    return (

        <Container className='professionalCardDetailsContainer'>
            <Row>
                <Col>
                    <div >
                        <img className='vetImage' src={image} style={{ maxWidth: '100%' }} />
                    </div>
                </Col>
                <Col md='4'>
                    <Row>
                        <Col >
                            <div className='professionalDetailsData'>
                                <h3>Datos personales de {firstName} {lastName}</h3>

                                <span className='data'>Nombre Completo</span>
                                <span className='holder'>{firstName} {lastName}</span>

                                <span className='data'>Especialidad</span>
                                <span className='holder'>{specialty}</span>
                                <span className='data'>Urgencias:</span>
                                <span className='holder'>{emergencies ? "Sí" : "No"}</span>
                                <span className='data'>Email</span>
                                <span className='holder'>{email}</span>
                                <span className='data'>Teléfono</span>
                                <span className='holder'>{phone}</span>
                                <span className='data'>Clínica</span>
                                <span className='holder'>{clinic?.name}</span>
                                <span className='data'>Dirección</span>
                                <span className='holder'>{clinic?.address}</span>
                                {user.role === 'Client' && (
                                    <div className="buttonContainerVet">
                                        <Link to={`/newrequest/profesional/${_id}`}>
                                            <Button className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}>
                                                <strong>Realizar Consulta</strong>
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
};

export default ProfessionalCardDetails