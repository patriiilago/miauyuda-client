import { useState } from "react"
import { Container, Button, Form, Col, Row } from "react-bootstrap"
import requestServices from "../../services/request.services"
import './../../components/ResponseForm/ResponseForm.css'
import { useNavigate } from "react-router-dom"

const ResponseForm = ({ requestId, loadRequests }) => {

    const [responseData, setResponseData] = useState({
        response: ""
    })

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {

        event.preventDefault()

        requestServices
            .editRequest(requestId, responseData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setResponseData({ ...responseData, [name]: value })
    }

    return (
        <Container className="NewResponseForm">
            <h3>
                Responder a la consulta:
            </h3>
            <Row className="response-form">
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group as={Col} controlId="formGridQuestion">
                        <Form.Label className="ResponseFormLabel">Respuesta:</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="ResponseFormSelect"
                            type="text"
                            placeholder="Escribe aquí tu respuesta..."
                            onChange={handleInputChange}
                            value={responseData.response}
                            name={"response"}
                        />
                    </Form.Group>
                    <Button className="ResponseFormButton" type="submit">Enviar respuesta</Button>
                </Form>
            </Row>
        </Container >
    )

}

export default ResponseForm
