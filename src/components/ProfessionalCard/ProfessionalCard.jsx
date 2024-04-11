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
            <Col md="5" >
                <div className="professionalCardImage">   <img src={image} alt={`Foto de: ${firstName} ${lastName}`} style={{ maxWidth: '100%' }} /></div>


            </Col>


            <Col md="7" >

                <div className='vetDataContainer'>


                    <span as="h3" className='professionalName'>{`${firstName} ${lastName}`}</span>
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
                        Mi teléfono de contacto es <strong >​​{phone}</strong>
                    </span >
                    <span className='professionalData'>
                        Y mi correo electrónico es <strong >​{email}</strong>
                    </span >
                    <div>
                        <Link className="professionalButtonContainer" to={`/professionals/${_id}`}>
                            <Button onClick={handleOnClick}
                                className="professionalCardButton"
                                style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}>
                                <strong>Ver detalles</strong>
                            </Button>
                        </Link>
                    </div>
                </div>

            </Col >

        </Row>

    )
}

export default ProfessionalCard