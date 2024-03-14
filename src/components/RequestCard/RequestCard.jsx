import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'
import './RequestCard.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import ResponseForm from '../ResponseForm/ResponseForm'
import { Link } from 'react-router-dom'

const RequestCard = ({ client, question, response, _id, loadRequests, image }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className='RequestCard'>

            <Card.Body className="RequestCardBody">
                <h1>{client.firstName}</h1>
                <Card.Img variant="bottom" type="file" src={client.image} />

                <div className="buttonContainer">
                    <Link to={`/clients/${client._id}`}>
                        <Button style={{ backgroundColor: '#609f69', color: 'white', border: 'none' }}><strong>Ver perfil</strong> </Button>
                    </Link>
                </div>
                <Card.Title>
                    <h3>🗣️Tu consulta:</h3>
                </Card.Title>
                <Card.Text>{question}</Card.Text>
                <Card.Img variant="bottom" type="file" src={image} />




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
        </Card>
    )
}



export default RequestCard