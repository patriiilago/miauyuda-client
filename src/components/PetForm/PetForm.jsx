import { Accordion, Button, Form, Col, Row } from "react-bootstrap"
import '../../components/PetForm/PetForm.css'


const PetForm = () => {

    return (

        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header variant="dark"><strong>Asegurar mascota:</strong> </Accordion.Header>
                <Accordion.Body>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetName">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control placeholder="Nombre de tu mascota" />
                        </Form.Group>

                        <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetOwner">
                            <Form.Label>Nombre propietari@:</Form.Label>
                            <Form.Control placeholder="Titutar de la mascota" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" controlId="formGridStateAnimals">
                            <Form.Label>Tipo de mascota:</Form.Label>
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

                        <Form.Group as={Col} controlId="formGridWeight">
                            <Form.Label>Peso en Kg:</Form.Label>
                            <Form.Control type="number" placeholder="Peso de la mascota" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" controlId="formGridStatebreed ">
                            <Form.Label>Raza:</Form.Label>
                            <Form.Control type="text" placeholder="Raza de la mascota" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBirth">
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control type="date" placeholder="Fecha de nacimiento" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" controlId="formGridStatePetSex">
                            <Form.Label>Sexo:</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Macho</option>
                                <option>Hembra</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridChip">
                            <Form.Label>Número de Chip:</Form.Label>
                            <Form.Control type="number" placeholder="Peso de la mascota" />
                        </Form.Group>
                    </Row>


                    <Button type="submit" className="mt-2 mb-2" variant="dark">Guardar mascota</Button>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default PetForm








