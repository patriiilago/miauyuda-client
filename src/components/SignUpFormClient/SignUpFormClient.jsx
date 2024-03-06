import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const VITE_BASE_URL = "http://localhost:5005"


// const navigate = useNavigate()

const handleFormSubmit = (event) => {
    event.preventDefault()
}
const SignUpFormClient = () => {

    return (



        <Container>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Introduce tu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="Introduce tu dirección" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Detalles dirección</Form.Label>
                    <Form.Control placeholder="Piso, estudio, apartamento..." />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>País</Form.Label>
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
                        <Form.Label>C.P.</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNumberPets">
                        <Form.Label>Número de mascotas</Form.Label>
                        <Form.Control type="number" placeholder="Número de mascotas" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStateAnimals">
                        <Form.Label>Tipo de mascota</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Perro</option>
                            <option>Gato</option>
                            <option>Conejo</option>
                            <option>Pájaro</option>
                            <option>Reptil</option>
                            <option>Hurón</option>
                            <option>Otros</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="He leído y acepto los términos y condiciones." />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}




export default SignUpFormClient
