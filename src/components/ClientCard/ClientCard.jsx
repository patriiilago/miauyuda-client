import { Button, Card, Container, CardGroup, Row, Col } from 'react-bootstrap'
import './../../components/ClientCard/ClientCard.css'
import { Link } from 'react-router-dom'

const ClientCard = ({
    firstName,
    lastName,
    phone,
    email,
    password,
    image,
    address,
    street,
    zipCode,
    city,
    country,
    location,
    coordinates,
    longitude,
    latitude

}) => {


    return (
        <CardGroup>
            <Row>
                <Col mb={4}>
                    <Card
                        className='ClientCard h-100' >
                        <Card.Img variant="top" src={image} alt={`${firstName} ${lastName}`} />
                        <Card.Body>
                            <Card.Title>
                                <h1>{firstName}</h1>
                                <br />
                                <h2>{lastName}</h2>
                            </Card.Title>
                            <Card.Text>
                                <strong>Datos de contacto:</strong>
                                <h1>{firstName}</h1>
                                <br />
                                <h2>{lastName}</h2>
                                <br />
                                <strong>📞 Teléfono: </strong>{phone}
                                <br />
                                <strong>💻 Email: </strong>{email}
                                <br />
                                <strong>📍 Dirección: </strong>{street} {zipCode} {city} {country}
                            </Card.Text>
                            <Button variant="dark"><strong> Responder</strong> </Button>

                            <Link to={`/petform`}>
                                <Button as={'span'}>Añadir mascota</Button>
                            </Link>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>


        </CardGroup>



    )
}
export default ClientCard