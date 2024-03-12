import { Card, ListGroup } from 'react-bootstrap'
import './RequestCard.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

const RequestCard = ({ question, response }) => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="{requestData.image} " />
                <Card.Body>
                    <Card.Title>{question}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        {
                            user.role === 'Professional' &&
                            <>
                                {/* TODO: METER FORMULARIO PARA RESPUESTA */}
                                <h1>Formulario para responder</h1>
                            </>
                        }

                        {
                            user.role === 'Client' && response === '' &&
                            <>
                                {/* TODO: PONER ESTO DIGNO */}
                                <h1>Aún sin respuesta</h1>
                            </>
                        }

                        {
                            user.role === 'Client' && response != '' &&
                            <>
                                {/* TODO: PONER ESTO DIGNO */}
                                <h1>Respuesta del experto: {response}</h1>
                            </>
                        }
                    </ListGroup>


                </Card.Body>


            </Card>
        </div>
    )
}



export default RequestCard