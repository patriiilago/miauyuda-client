import { Card, ListGroup, Row, Col } from 'react-bootstrap'
import './RequestCard.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import ResponseForm from '../ResponseForm/ResponseForm'

const RequestCard = ({ question, response, _id, loadRequests, image }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className='RequestCard'>
            <Card.Img variant="top" type="file" src={image} />
            <Card.Body className="RequestCardBody">
                <Card.Title>
                    <h1>Tu consulta:</h1>
                </Card.Title>
                <Card.Text>{question}</Card.Text>
                <ListGroup className="list-group-flush">
                    {
                        user.role === 'Professional' && response === '' &&
                        <>
                            <h1>Responder al cliente: </h1>
                            <ResponseForm requestId={_id} loadRequests={loadRequests} />
                        </>
                    }

                    {
                        user.role === 'Professional' && response != '' &&
                        <>
                            <h1>🗣️​ Respuesta del experto: {response}</h1>
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
                            <h1>✅​Respuesta del experto: {response}</h1>
                        </>
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    )
}



export default RequestCard