import { Card, Row, Col } from 'react-bootstrap'
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

        <>
            <Row className='clientDetails'>
                <h2 className='headerProfile'>Mi Perfil</h2>
                <p className='headerProfile1'>Aquí puedes consultar todos tus datos personales</p>
                <Col md='5'>
                    <img className='userImage' src={image} alt={`${firstName} ${lastName}`} />
                </Col>
                <Col className='personalData' md='7'>
                    <h3>Datos personales</h3>
                    <span className='data'>Nombre</span>
                    <span className='holder'>{firstName}</span>
                    <span className='data'>Apellidos</span>
                    <span className='holder'>{lastName}</span>

                </Col>
            </Row >
            <Row className='contactData'>
                <Col className='personalData' md='12'>
                    <h3>Datos de contacto</h3>
                    <span className='data'>Email</span>
                    <span className='holder'>{email}</span>
                    <span className='data'>Teléfono</span>
                    <span className='holder'>{phone}</span>
                    <span className='data'>Dirección</span>
                    <span className='holder'>{address}</span>
                </Col>
            </Row >
        </>

        // <Card className='ClientCard' >
        //     <Card.Img className='profilepic' variant="top" src={image} alt={`${firstName} ${lastName}`} />
        //     <Card.Body>
        //         <Card.Title className='ClientTitle'>
        //             <h1>{firstName} {lastName}</h1>
        //         </Card.Title>
        //         <Card.Text>
        //             <p className='clientData'><strong>Datos de contacto:</strong></p>
        //             <p className='clientData'><strong>📞 Teléfono: </strong>{phone}</p>
        //             <p className='clientData'><strong>💻 Email: </strong>{email}</p>
        //             <p className='clientData'><strong>📍 Dirección: </strong>{address}</p>
        //         </Card.Text>

        //     </Card.Body>
        // </Card>
    )
}
export default ClientCardDetails