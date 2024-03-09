import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../ProfessionalCard/ProfessionalCard.css'

const ProfessionalCard = ({
    _id,
    image,
    firstName,
    lastName,
    membershipNumber,
    phone,
    email,
    password,
    schedule,
    emergencies,
    rate,
    reviews,
    name,
    street,
    zipCode,
    city,
    country,
    longitude,
    latitude

}) => {


    return (

        <>

            <Col md={4}>

                <Card className="ProfessionalCard" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>
                            <h1>{firstName}</h1>
                            <br />
                            <h2>{lastName}</h2>
                        </Card.Title>
                        <Card.Text>
                            <strong>Especialidad:</strong> {schedule}
                            <br />
                            <strong>Urgencias?:</strong> {emergencies ? "Si" : "No"}
                            <br />
                            <strong>Clínica:</strong> {name}
                            <br />
                            <strong>Dónde encontrarme:</strong> {street} {zipCode} {city} {country}
                            <br />
                            <strong>Contacto:</strong> {phone}
                            <br />
                            {email}
                            <br />
                            <strong>Valoración:</strong> {rate}
                            <br />
                            <strong>Comentarios:</strong> {reviews}
                        </Card.Text>
                        <Link to={`/newrequest/profesional/${_id}`}>
                            <Button variant="dark"><strong>Consultar</strong> </Button>
                        </Link>
                    </Card.Body>
                </Card >
            </Col>
        </>

    )
}

export default ProfessionalCard