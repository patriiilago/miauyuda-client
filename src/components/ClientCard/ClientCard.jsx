import { Button, Card } from 'react-bootstrap'
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
                    <p className='clientData'><strong>Datos de contacto:</strong></p>
                    <p className='clientData'><strong>📞 Teléfono: </strong>{phone}</p>
                    <p className='clientData'><strong>💻 Email: </strong>{email}</p>
                    <p className='clientData'><strong>📍 Dirección: </strong> {`${address?.street}, ${address?.zipCode}, ${address?.city}, ${address?.country}`}</p>
                </Card.Text>
                <Link to={`/petform`}>
                    <Button as={'span'}>Añadir mascota</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default ClientCard