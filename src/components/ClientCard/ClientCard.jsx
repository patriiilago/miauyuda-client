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
        <Card className='ClientCard h-80' >
            <Card.Img className='profilepic' variant="top" src={image} alt={`${firstName} ${lastName}`} />
            <Card.Body>
                <Card.Title className='ClientTitle'>
                    <h1>{firstName} {lastName}</h1>
                </Card.Title>
                <Card.Text>
                    <strong>Datos de contacto:</strong>
                    <br />
                    <strong>📞 Teléfono: </strong>{phone}
                    <br />
                    <strong>💻 Email: </strong>{email}
                    <br />
                    <strong>📍 Dirección: </strong> {`${address?.street}, ${address?.zipCode}, ${address?.city}, ${address?.country}`}
                </Card.Text>
                <Link to={`/petform`}>
                    <Button as={'span'}>Añadir mascota</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default ClientCard