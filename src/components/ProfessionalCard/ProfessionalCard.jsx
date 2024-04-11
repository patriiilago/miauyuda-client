import { Button, Row, Col } from 'react-bootstrap'
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

        <Row>
            <Col md="5">

                <img className="professionalCardImage" src={image} alt={`Foto de: ${firstName} ${lastName}`} />

            </Col>


            <Col md="7" className='professionalData' >

                <div className='vetDataContainer'>


                    <span as="h3" className='vetName'>{`${firstName} ${lastName}`}</span>
                    <span className='professionalData'>
                        Mi especialidad son los animales <strong>​​​​ {specialty}</strong>
                    </span>
                    <span className='professionalData'>
                        <strong >​​​ {emergencies ? "Sí" : "No"}</strong> realizo urgencias
                    </span>
                    <span className='professionalData'>
                        Trabajo en  <strong >​​{clinic?.name}</strong>
                    </span>
                    <span className='professionalData'>
                        La dirección de la clínica es <strong >{clinic?.address}</strong>
                    </span>
                    <span className='professionalData'>
                        📞 Mi teléfono de contacto es <strong >​​{phone}</strong>
                    </span >
                    <span className='professionalData'>
                        💻 Y mi correo electrónico es <strong >​{email}</strong>
                    </span >

                    <Link className="professionalButtonContainer" to={`/professionals/${_id}`}>
                        <Button onClick={handleOnClick}
                            className="professionalCardButton"
                            style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}>
                            <strong>Ver detalles</strong>
                        </Button>
                    </Link>
                </div>
            </Col >
        </Row>

    )
}

export default ProfessionalCard