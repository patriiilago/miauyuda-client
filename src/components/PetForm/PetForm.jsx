import { Button, Form, Col, Row } from "react-bootstrap"
import '../../components/PetForm/PetForm.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import uploadServices from "../../services/upload.services"
import PetServices from "../../services/pet.services"


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
        image: ""
    })

    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()

        PetServices
            .saveNewPet(petData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setPetData({ ...petData, [name]: value })

    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setPetData({ ...petData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }


    return (



        <Form onSubmit={handleFormSubmit} className="petForm">

            <h1 className="h1Petform">Registra tu mascota</h1>

            <Form.Group className="mb-3 m-t3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetName">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre de tu mascota"
                        onChange={handleInputChange}
                        value={petData.name}
                        name={"name"}
                    />
                </Form.Group>

                <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetOwner">
                    <Form.Label>Nombre propietari@:</Form.Label>
                    <Form.Control
                        type="text"
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
                        type="text"
                        placeholder="Tipo de mascota"
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
                        type="date"
                        placeholder="Fecha de nacimiento"
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
                        type="text"
                        placeholder="Sexo de la mascota"
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
                        placeholder="Número de chip"
                        onChange={handleInputChange}
                        value={petData.chipNumber}
                        name={"chipNumber"}
                    />
                </Form.Group>
            </Row>


            <Button disabled={loadingImage} variant="dark mb-3" type="submit" className="mt-2 mb-2">
                {loadingImage ? 'Cargando imagen...' : 'Dar de alta'}
            </Button>
        </Form>

    )
}

export default PetForm








