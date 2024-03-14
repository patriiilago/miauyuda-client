import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./professionalCardDetails.css"

const ProfessionalCardDetails = ({
    _id,
    firstName,
    lastName,
    membershipNumber,
    phone,
    email,
    specialty,
    emergencies,
    rate,
    clinic,
    address,
    name,
    coordinates,
    street,
    zipCode,
    city,
    country,
    image,

}) => {

    return (

        <Card className="professionalCard h-80" border="secondary" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" className="professionalCardImage" type="file" src={image} alt={`Foto de: ${firstName} ${lastName}`} />
            <Card.Body className="ProfessionalCardBody">
                <p className='professionalData'>
                    <strong >​​​📝​ Especialidad:</strong> {specialty}
                </p>
                <p className='professionalData'>
                    <strong >​​🚑​ Urgencias?:</strong> {emergencies ? "Si" : "No"}
                </p>
                <p className='professionalData'>
                    <strong >​🏥​ Clínica:</strong> {clinic?.name}
                </p>
                <p className='professionalData'>
                    <strong >📍 Dónde encontrarme:</strong>  {clinic?.address?.street}, {clinic?.address?.zipCode}, {clinic?.address?.city}  {clinic?.address?.country}
                </p >
                <p className='professionalData'>
                    <strong >​📞​ Teléfono:</strong> {phone}
                </p >
                <p className='professionalData'>
                    <strong >💻​ Email:</strong> {email}
                </p >

                <div className="buttonContainer">

                    <Link to={`/newrequest/profesional/${_id}`}>
                        <Button className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}><strong>Consultar</strong> </Button>
                    </Link>

                </div>
            </Card.Body>
        </Card >

    )
}

export default ProfessionalCardDetails