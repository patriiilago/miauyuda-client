import { Card, ListGroup, Row, Col } from 'react-bootstrap'
import './RequestCard.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import ResponseForm from '../ResponseForm/ResponseForm'

const RequestCard = ({ question, response, _id, loadRequests, image }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card className='RequestCard'>

            <Card.Body className="RequestCardBody">
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