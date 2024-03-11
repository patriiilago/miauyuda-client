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
    password,
    schedule,
    emergencies,
    rate,
    reviews,
    name,
    street,
    zipCode,
    city,
    country,
    longitude,
    latitude,
    image,
    specialty,
    clinic

}) => {


    return (

        <Card className="professionalCard" border="secondary" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" className="professionalCardImage" src="holder.js/100px180?text=Image cap" alt={`Foto de: ${firstName} ${lastName}`} />
            <Card.Body className="ProfessionalCardBody">

                <h3>{firstName} {lastName}</h3>
                <br />

                <strong> 📘 Especialidad:</strong> {specialty}
                <br />
                <strong> 🚑 Urgencias?:</strong> {emergencies ? "Si" : "No"}
                <br />
                <strong> 🏥 Clínica:</strong> {name}
                <br />
                <strong> 📍 Dónde encontrarme:</strong> {street} {zipCode} {city} {country}
                <br />
                <strong> 📞 Contacto:</strong> {phone}
                <br />
                <strong> ⭐ Valoración:</strong> {rate}
                <br />
                <strong> 🗣️ Comentarios:</strong> {reviews}

                <div className="buttonContainer">
                    <Link to={`/newrequest/profesional/${_id}`}>

                        <Button className="professionalCardButton"><strong>Consultar</strong> </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card >

    )
}

export default ProfessionalCard