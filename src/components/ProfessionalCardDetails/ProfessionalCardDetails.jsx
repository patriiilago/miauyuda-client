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
        <Container>
            <Row>
                <Col md='5'>
                    <div className='profContImage'>
                        <img className='profImage' src={image} alt={`${firstName} ${lastName}`} />
                    </div>
                </Col>
                <Col className='DataCol' md='7'>
                    <h3>Datos del profesional</h3>
                    <span className='profData'>Nombre</span>
                    <span className='profHolder'>{firstName}</span>
                    <span className='profData'>Apellidos</span>
                    <span className='profHolder'>{lastName}</span>
                    {user.role === 'Client' && (
                        <div className="buttonContainerVet">
                            <Link to={`/newrequest/profesional/${_id}`}>
                                <Button className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}>
                                    <strong>Realizar Consulta</strong>
                                </Button>
                            </Link>
                        </div>
                    )}
                </Col>
            </Row>
            <Row>
                <Col className='DataCol' md='12'>
                    <span className='profData'>Especialidad</span>
                    <span className='profHolder'>{specialty}</span>
                    <span className='profData'>Urgencias:</span>
                    <span className='profHolder'>{emergencies ? "Sí" : "No"}</span>
                    <span className='profData'>Email</span>
                    <span className='profHolder'>{email}</span>
                    <span className='profData'>Teléfono</span>
                    <span className='profHolder'>{phone}</span>
                    <span className='profData'>Clínica</span>
                    <span className='profHolder'>{clinic?.name}</span>
                    <span className='profData'>Dirección</span>
                    <span className='profHolder'>{clinic?.address}</span>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfessionalCardDetails

{/* 
              <>
            <Row>
                <h2 className='headerProfile'>Mi Perfil</h2>
                <p className='headerProfile1'>Aquí puedes consultar todos tus datos personales</p>
                <Col md='5'>
                    <img className='userImage' src={image} alt={`${firstName} ${lastName}`} />
                </Col>
                <Col className='personalData' md='7'>
                    <h3>Datos personales</h3>
                    <span className='data'>Nombre</span>
                    <span className='profHolder'>{firstName}</span>
                    <span className='data'>Apellidos</span>
                    <span className='profHolder'>{lastName}</span>

                </Col>
            </Row >
            <Row className='contactData'>
                <Col className='personalData' md='12'>
                    <h3>Datos de contacto</h3>
                    <span className='data'>Email</span>
                    <span className='profHolder'>{email}</span>
                    <span className='data'>Teléfono</span>
                    <span className='profHolder'>{phone}</span>
                    <span className='data'>Dirección</span>
                    <span className='profHolder'>{address}</span>
                </Col>
            </Row >
        </>
            
            
            <Container >
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
                                    <h3>{firstName} {lastName}</h3>

                                    <span className='data'>Nombre Completo</span>
                                    <span className='profHolder'>{firstName} {lastName}</span>

                                    <span className='data'>Especialidad</span>
                                    <span className='profHolder'>{specialty}</span>
                                    <span className='data'>Urgencias:</span>
                                    <span className='profHolder'>{emergencies ? "Sí" : "No"}</span>
                                    <span className='data'>Email</span>
                                    <span className='profHolder'>{email}</span>
                                    <span className='data'>Teléfono</span>
                                    <span className='profHolder'>{phone}</span>
                                    <span className='data'>Clínica</span>
                                    <span className='profHolder'>{clinic?.name}</span>
                                    <span className='data'>Dirección</span>
                                    <span className='profHolder'>{clinic?.address}</span>
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
            </Container> */}