import { Container, Button, Form, Col, Row } from "react-bootstrap"
import PetForm from "../PetForm/PetForm";
import '../../components/SignUpFormClient/SignUpFormClient.css'


const SignUpFormClient = () => {

    return (
        <Container>
            <Form>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Introduce tu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control type="text" placeholder="Contraseña" />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control placeholder="Introduce tu dirección" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Detalles dirección:</Form.Label>
                        <Form.Control placeholder="Portal, piso, escalera..." />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                        <Form.Label>Teléfono de contacto:</Form.Label>
                        <Form.Control placeholder="Teléfono 1" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridPhone2">
                        <Form.Label>Otro teléfono:</Form.Label>
                        <Form.Control placeholder="Teléfono 2" />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control placeholder="Ciudad" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>País:</Form.Label>
                        <Form.Select defaultValue="Choose...">
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
                        <Form.Control placeholder="Código Postal" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <PetForm />
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="He leído y acepto los términos y condiciones." />
                </Form.Group>

                <Button variant="dark mb-3" type="submit">
                    Dar de alta
                </Button>

            </Form>
        </Container>
    );
}




export default SignUpFormClient
