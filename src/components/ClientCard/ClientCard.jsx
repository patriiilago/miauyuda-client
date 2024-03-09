import { Button, Card } from 'react-bootstrap'

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" alt={`${firstName} ${lastName}`} />
            <Card.Body>

                <Card.Title>
                    <h1>{firstName}</h1>
                    <br />
                    <h2>{lastName}</h2>
                </Card.Title>

                <Card.Text>
                    <strong>Datos de contacto:</strong>
                    <br />
                    <strong>Teléfono: </strong>{phone}
                    <br />
                    <strong>Email: </strong>{email}
                    <br />
                    <strong>Dirección: </strong>{street} {zipCode} {city} {country}

                </Card.Text>
                <Button variant="dark"><strong> Responder</strong> </Button>
            </Card.Body>
        </Card>

    )
}
export default ClientCard