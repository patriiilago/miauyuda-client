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
                <div className="professionalCardImage"><img src={image} alt={`Foto de: ${firstName} ${lastName}`} style={{ maxWidth: '100%' }} /></div>
            </Col>


            <Col md="7" >
                <div className='vetDataContainer'>

                    <span className='professionalName'>{`${firstName} ${lastName}`}</span>
                    <span className='professionalData'>
                        Especialidad: <strong>​​{specialty}</strong>
                    </span>
                    <span className='professionalData'>
                        Urgencias: <strong >​​​{emergencies ? "Sí" : "No"}</strong>
                    </span>
                    <span className='professionalData'>
                        Clínica: <strong >​​{clinic?.name}</strong>
                    </span>
                    <span className='professionalData'>
                        Dirección: <strong >{clinic?.address}</strong>
                    </span>
                    <span className='professionalData'>
                        Teléfono: <strong >​​{phone}</strong>
                    </span >
                    <span className='professionalData'>
                        Email: <strong >​{email}</strong>
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