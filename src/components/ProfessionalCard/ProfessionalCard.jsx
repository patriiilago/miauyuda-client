import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProfessionalCard.css'


const ProfessionalCard = ({
    _id,
    firstName,
    lastName,
    phone,
    email,
    specialty,
    emergencies,
    rate,
    clinic,
    coordinates,
    image,

}) => {
    const handleOnClick = () => {
        console.log({ professional: { _id, firstName, lastName } })
    };

    return (


        <Card className="professionalCard h-80" border="secondary" style={{ marginBottom: '20px' }}>

            <Card.Img variant="top" className="professionalCardImage" type="file" src={image} alt={`Foto de: ${firstName} ${lastName}`} />
            <Card.Body className="ProfessionalCardBody">

                <h3>{`${firstName} ${lastName}`}</h3>
                <br />
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
                    <strong >📍 Dónde encontrarme:</strong>  {clinic?.address}
                </p>
                <p className='professionalData'>
                    <strong >​📞​ Teléfono:</strong> {phone}
                </p >
                <p className='professionalData'>
                    <strong >💻​ Email:</strong> {email}
                </p >

                <div className="buttonContainer">
                    <Link to={`/professionals/${_id}`}>
                        <Button onClick={handleOnClick} className="professionalCardButton" style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}><strong>Ver detalles</strong> </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card >

    )
}

export default ProfessionalCard