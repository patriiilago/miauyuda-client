import { Card } from 'react-bootstrap'
import './../../components/ClientCard/ClientCard.css'


const ClientCardDetails = ({
    firstName,
    lastName,
    phone,
    email,
    image,
    address,

}) => {

    return (
        <Card className='ClientCard' >
            <Card.Img className='profilepic' variant="top" src={image} alt={`${firstName} ${lastName}`} />
            <Card.Body>
                <Card.Title className='ClientTitle'>
                    <h1>{firstName} {lastName}</h1>
                </Card.Title>
                <Card.Text>
                    <p className='clientData'><strong>Datos de contacto:</strong></p>
                    <p className='clientData'><strong>📞 Teléfono: </strong>{phone}</p>
                    <p className='clientData'><strong>💻 Email: </strong>{email}</p>
                    <p className='clientData'><strong>📍 Dirección: </strong>{address}</p>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}
export default ClientCardDetails