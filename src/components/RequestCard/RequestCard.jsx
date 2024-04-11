import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'
import './RequestCard.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import ResponseForm from '../ResponseForm/ResponseForm'
import { Link } from 'react-router-dom'
import { useState } from 'react'
//testing
const RequestCard = ({ client, question, response, _id, loadRequests, image }) => {

    const [expanded, setExpanded] = useState(false);
    const { user } = useContext(AuthContext)
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Row className='RequestCard'>
                <Col md='6'>
                    <div className='profileClient'>
                        <img className='clientImage' type="file" src={client.image} />
                        <h1>{client.firstName}</h1>
                        <span>tiene una pregunta que hacerte</span>
                        <div >
                        </div>
                    </div>
                </Col>
                <Col md='6'>
                    <h3>Tu consulta:</h3>
                    <hr />
                    <span>{question}</span>
                    <img
                        className={`req-img ${expanded ? 'expanded' : ''}`}
                        src={image}
                        alt="Imagen"
                        onClick={toggleExpand}
                    />
                    <Link to={`/clients/${client._id}`} className="buttonProfile" >
                        Ver perfil
                    </Link>
                </Col>
            </Row>

            {/* <Card className='RequestCard'>

                <Card.Body className="RequestCardBody">
                    <h1>{client.firstName}</h1>
                    <div className='profileimage-button'>
                        <img className='requestImage' type="file" src={client.image} />
                        <div >
                            <Link to={`/clients/${client._id}`}>
                                <Button className="buttonProfile" ><strong>Ver perfil</strong> </Button>
                            </Link>
                        </div>
                    </div>
                    <Card.Title>
                        <h3>🗣️Tu consulta:</h3>
                        <br />
                    </Card.Title>
                    <Card.Text>{question}</Card.Text>
                    <Card.Img className='imgConsultation' variant="bottom" type="file" src={image} />




                    <ListGroup className="list-group-flush">
                        {
                            user.role === 'Professional' && response === '' &&
                            <>
                                <ResponseForm requestId={_id} loadRequests={loadRequests} />
                            </>
                        }

                        {
                            user.role === 'Professional' && response != '' &&
                            <>
                                <h3>✅​ Respuesta del experto: </h3>{response}
                            </>
                        }

                        {
                            user.role === 'Client' && response === '' &&
                            <>
                                <p><strong>⌛​​ Aún sin respuesta, en breve te contestará un profesional...</strong></p>
                            </>
                        }

                        {
                            user.role === 'Client' && response != '' &&
                            <>
                                <h3>✅​Respuesta del experto: </h3>{response}
                            </>
                        }
                    </ListGroup>
                </Card.Body>
            </Card> */}
        </>
    )
}



export default RequestCard