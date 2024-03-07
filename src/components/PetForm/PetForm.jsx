import { Accordion, Button, Form, Col, Row } from "react-bootstrap"
import '../../components/PetForm/PetForm.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import uploadServices from "../../services/upload.services"


const VTE_SERVER_URL = "http://localhost:5005"


const PetForm = () => {

    const [petData, setPetData] = useState({
        name: "",
        chipOwner: "",
        type: "",
        weight: "",
        breed: "",
        birth: "",
        sex: "",
        chipNumber: "",
    })

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`${VTE_SERVER_URL}/api/auth/signup`, petData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setPetData({ ...petData, [name]: value })

    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setPetData({ ...petData, image: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    return (

        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header onSubmit={handleFormSubmit} variant="dark"><strong>Asegurar mascota:</strong> </Accordion.Header>
                <Accordion.Body>

                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetName">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                placeholder="Nombre de tu mascota"
                                onChange={handleInputChange}
                                value={petData.name}
                                name={"name"}
                            />
                        </Form.Group>

                        <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetOwner">
                            <Form.Label>Nombre propietari@:</Form.Label>
                            <Form.Control
                                placeholder="Titutar de la mascota"
                                onChange={handleInputChange}
                                value={petData.chipOwner}
                                name={"chipOwner"}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" controlId="formGridStateAnimals">
                            <Form.Label>Tipo de mascota:</Form.Label>
                            <Form.Select
                                onChange={handleInputChange}
                                value={petData.type}
                                name={"type"}
                            >
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
                            <Form.Control
                                type="number"
                                placeholder="Peso de la mascota"
                                onChange={handleInputChange}
                                value={petData.weight}
                                name={"weight"}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" controlId="formGridStatebreed ">
                            <Form.Label>Raza:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Raza de la mascota"
                                onChange={handleInputChange}
                                value={petData.breed}
                                name={"breed"}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBirth">
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control
                                type="date" placeholder="Fecha de nacimiento"
                                onChange={handleInputChange}
                                value={petData.birth}
                                name={"birth"}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} variant="dark" controlId="formGridStatePetSex">
                            <Form.Label>Sexo:</Form.Label>
                            <Form.Select
                                onChange={handleInputChange}
                                value={petData.sex}
                                name={"sex"}
                            >
                                <option>Macho</option>
                                <option>Hembra</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridChip">
                            <Form.Label>Número de Chip:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Peso de la mascota"
                                onChange={handleInputChange}
                                value={petData.chipNumber}
                                name={"chipNumber"}
                            />
                        </Form.Group>
                    </Row>


                    <Button
                        onClick={handleFormSubmit}
                        type="submit"
                        className="mt-2 mb-2"
                        variant="dark">
                        Guardar mascota
                    </Button>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default PetForm








