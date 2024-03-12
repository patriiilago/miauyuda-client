import { Button, Card, Row, Col } from 'react-bootstrap'
import './../../components/ClientCard/ClientCard.css'
import { Link } from 'react-router-dom'

const ClientCard = ({
    firstName,
    lastName,
    phone,
    email,
    image,
    address,
    street,
    zipCode,
    city,
    country,

}) => {


    return (
        <Card className='ClientCard' >
            <Card.Img className='profilepic' variant="top" src={image} alt={`${firstName} ${lastName}`} />
            <Card.Body>
                <Card.Title>
                    <h1>{firstName} <br />
                        {lastName}</h1>
                </Card.Title>
                <Card.Text>
                    <strong>Datos de contacto:</strong>
                    <br />
                    <strong>📞 Teléfono: </strong>{phone}
                    <br />
                    <strong>💻 Email: </strong>{email}
                    <br />
                    <strong>📍 Dirección: </strong>{street}
                </Card.Text>
                <Link to={`/petform`}>
                    <Button as={'span'}>Añadir mascota</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default ClientCard