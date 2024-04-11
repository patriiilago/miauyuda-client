import { Button, Card, Row, Col, Container } from 'react-bootstrap'
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
    rate,
    clinic,
    image,
    address

}) => {

    const { user } = useContext(AuthContext)


    return (



        // <Card className="professionalCard h-80" border="secondary" style={{ marginBottom: '20px' }}>
        //     <Card.Img variant="top" className="professionalCardImage" type="file" src={image} alt={`Foto de: ${firstName} ${lastName}`} />
        //     <Card.Body className="ProfessionalCardBody">
        //         <p className='professionalData'>
        //             <strong >​​​📝​ Especialidad:</strong> {specialty}
        //         </p>
        //         <p className='professionalData'>
        //             <strong >​​🚑​ Urgencias?:</strong> {emergencies ? "Si" : "No"}
        //         </p>
        //         <p className='professionalData'>
        //             <strong >​🏥​ Clínica:</strong> {clinic?.name}
        //         </p>
        //         <p className='professionalData'>
        //             <strong >📍 Dónde encontrarme:</strong>  {clinic?.address}
        //         </p >
        //         <p className='professionalData'>
        //             <strong >​📞​ Teléfono:</strong> {phone}
        //         </p >
        //         <p className='professionalData'>
        //             <strong >💻​ Email:</strong> {email}
        //         </p >


        // {user.role === 'Client' && (
        //     <div className="buttonContainer">
        //         <Link to={`/newrequest/profesional/${_id}`}>
        //             <Button className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}><strong>Consultar</strong> </Button>
        //         </Link>
        //     </div>
        // )}

        //     </Card.Body>
        // </Card>



        <Container>
            <Row>
                <Col >
                    <div >
                        <img className='vetImage' src={image} alt={`${firstName} ${lastName}`} style={{ maxWidth: '100%' }} />
                    </div>
                </Col>
                <Col md='4'>
                    <Row>
                        <Col >
                            <div className='professionalDetailsData'>
                                <h3>Datos personales</h3>

                                <span className='data'>Nombre</span>
                                <span className='holder'>{firstName}</span>
                                <span className='data'>Apellidos</span>
                                <span className='holder'>{lastName}</span>
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
                                    <div className="buttonContainer">
                                        <Link to={`/newrequest/profesional/${_id}`}>
                                            <Button className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}>
                                                <strong>Consultar</strong>
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