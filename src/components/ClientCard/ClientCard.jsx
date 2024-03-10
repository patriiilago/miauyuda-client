import { Button, Card, Container, CardGroup, Row, Col } from 'react-bootstrap'
import { useContext } from "react"
import './../../components/ClientCard/ClientCard.css'
import { AuthContext } from "../../context/auth.context"
import { useParams } from 'react-router-dom'



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

    const { user } = useContext(AuthContext)


    return (

        <CardGroup>
            <Row>

                <Col mb={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" alt={`${user.firstName} ${user.lastName}`} />
                        <Card.Body>

                            <Card.Title>
                                <h1>{user.firstName}</h1>
                                <br />
                                <h2>{user.lastName}</h2>
                            </Card.Title>

                            <Card.Text>
                                <strong>Datos de contacto:</strong>
                                <br />
                                <strong>Teléfono: </strong>{user.phone}
                                <br />
                                <strong>Email: </strong>{user.email}
                                <br />
                                <strong>Dirección: </strong>{user.street} {user.zipCode} {user.city} {user.country}

                            </Card.Text>
                            <Button variant="dark"><strong> Responder</strong> </Button>
                        </Card.Body>
                    </Card>

                </Col>


            </Row>

        </CardGroup>
    )
}
export default ClientCard