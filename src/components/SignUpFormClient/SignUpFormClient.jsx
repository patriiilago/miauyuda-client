import { Container, Button, Form, Col, Row } from "react-bootstrap"
import PetForm from "../PetForm/PetForm";
import '../../components/SignUpFormClient/SignUpFormClient.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const VTE_SERVER_URL = "http://localhost:5005"


const SignUpFormClient = () => {

    const [clientData, setClientData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        street: "",
        phone: "",
        city: "",
        country: "",
        zipCode: "",
    })

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`${VTE_SERVER_URL}/api/auth/signup`, clientData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setClientData({ ...clientData, [name]: value })

    }



    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Introduce tu email"
                            value={clientData.email}
                            name={"email"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Contraseña"
                            value={clientData.password}
                            name={"password"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Introduce tu nombre"
                            value={clientData.firstName}
                            name={"firstName"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Introduce tus apellidos"
                            value={clientData.lastName}
                            name={"lastName"}
                        />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Introduce tu dirección"
                            value={clientData.street}
                            name={"street"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                        <Form.Label>Teléfono de contacto:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Teléfono 1"
                            value={clientData.phone}
                            name={"phone"}
                        />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Ciudad"
                            value={clientData.city}
                            name={"city"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>País:</Form.Label>
                        <Form.Select
                            onChange={handleInputChange}
                            type="text"
                            value={clientData.country}
                            name={"country"}
                        >
                            <option>España</option>
                            <option>Portugal</option>
                            <option>Francia</option>
                            <option>Italia</option>
                            <option>Grecia</option>
                            <option>Mexico</option>
                            <option>Colombia</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>C.P.:</Form.Label>
                        <Form.Control
                            onChange={handleInputChange}
                            placeholder="Código Postal"
                            value={clientData.zipcode}
                            name={"zipCode"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <PetForm />
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="He leído y acepto los términos y condiciones." />
                </Form.Group>

                <Button onClick={handleFormSubmit} variant="dark mb-3" type="submit">
                    Dar de alta
                </Button>

            </Form>
        </Container>
    );
}




export default SignUpFormClient
