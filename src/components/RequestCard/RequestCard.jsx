import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'
import './RequestCard.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import ResponseForm from '../ResponseForm/ResponseForm'
import { Link } from 'react-router-dom'
//testing
const RequestCard = ({ client, question, response, _id, loadRequests, image, professional }) => {

    const { user } = useContext(AuthContext)

    return (
        <>
            <Row className='RequestCard'>
                <Col md='6'>
                    <div className='profileClient'>
                        <img className='clientImage' type="file" src={client.image} />
                        <div>
                            <h1>{client.firstName}</h1>
                            <span>tiene una pregunta que hacerte</span>
                        </div>
                    </div>
                    <span className='questionResponseTitle'>Tu consulta:</span>
                    <hr className='questionrh' />
                    <span className='questionText'>{question}</span>
                    <img className='question-img' src={image} alt="Imagen" />
                    <Link to={`/clients/${client._id}`} className="buttonProfile" >
                        Ver perfil
                    </Link>
                </Col>
                <Col md='6'>
                    <div className='profileProfesional'>
                        <div>
                            <h1>{professional.firstName}</h1>
                            <span>tiene una pregunta que hacerte</span>
                        </div>
                        <img className='profesionalImage' type="file" src={professional.image} />
                    </div>
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
                                <span className='questionResponseTitle'><img className='imageResponse' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712791972/qud1rs4rl1sdhewd1yhw.png" alt="checked image" />​ Respuesta del experto: </span>{response}
                            </>
                        }

                        {
                            user.role === 'Client' && response === '' &&
                            <>
                                <p><strong><img className='imageResponse' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712791972/gztu5fqjt3xthqcnaal9.png" alt="clock image" />​​ Aún sin respuesta, en breve te contestará un profesional...</strong></p>
                            </>
                        }

                        {
                            user.role === 'Client' && response != '' &&
                            <>
                                <h3><img className='imageResponse' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712791972/qud1rs4rl1sdhewd1yhw.png" alt="checked image" />​Respuesta del experto: </h3>{response}
                            </>
                        }
                    </ListGroup>
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