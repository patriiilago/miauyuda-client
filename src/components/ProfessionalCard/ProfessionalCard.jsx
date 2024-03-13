import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../ProfessionalCard/ProfessionalCard.css'

const ProfessionalCard = ({
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
    street,
    zipCode,
    city,
    country,
    image
}) => {

    return (

        <Card className="professionalCard h-80" border="secondary" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" className="professionalCardImage" type="file" src={image} alt={`Foto de: ${firstName} ${lastName}`} />
            <Card.Body className="ProfessionalCardBody">

                <h3>{firstName} {lastName}</h3>
                <br />
                <strong>​​​📝​ Especialidad:</strong> {specialty}
                <br />
                <strong>​​🚑​ Urgencias?:</strong> {emergencies ? "Si" : "No"}
                <br />
                <strong>​🏥​ Clínica:</strong> {clinic?.name}
                <br />
                <strong>📍 Dónde encontrarme:</strong>  {clinic?.address?.street}, {clinic?.address?.zipCode}, {clinic?.address?.city}  {clinic?.address?.country}
                <br />
                <strong>​📞​ Teléfono:</strong> {phone}
                <br />
                <strong>💻​ Email:</strong> {email}
                <br />

                <div className="buttonContainer">
                    <Link to={`/newrequest/profesional/${_id}`}>
                        <Button className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}><strong>Consultar</strong> </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card >

    )
}

export default ProfessionalCard