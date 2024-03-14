import { Card } from 'react-bootstrap'
import './../../components/ClientCard/ClientCard.css'


const ClientCardDetails = ({
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

            </Card.Body>
        </Card>
    )
}
export default ClientCardDetails