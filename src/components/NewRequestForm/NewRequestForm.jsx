import { useState } from "react"
import { Container, Button, Form, Col, Row } from "react-bootstrap"
import requestServices from "../../services/request.services"

const NewRequestForm = () => {

    const [requestData, setRequestData] = useState({
        clients: "",
        professionals: "",
        pets: "",
        status: "",
        question: "",
        answer: "",
        image: "",
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()

        requestServices
            .saveNewRequest(requestData)
            .then(() => navigate('/request-list'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setRequestData({ ...requestData, [name]: value })

    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setRequestData({ ...requestData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileUpload} />
                </Form.Group>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Estado:</Form.Label>
                        <Form.Select
                            type="text"
                            placeholder="Cual es su estado"
                            onChange={handleInputChange}
                            value={requestData.status}
                            name={"status"}
                        >
                            <option>Pendiente</option>
                            <option>Resuelta</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridQuestion">
                        <Form.Label>Cuestión a tratar:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripción"
                            onChange={handleInputChange}
                            value={requestData.question}
                            name={"question"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Respuesta:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Respuesta"
                            onChange={handleInputChange}
                            value={requestData.firstName}
                            name={"Answers"}
                        />
                    </Form.Group>
                </Row>

                <Button disabled={loadingImage} variant="dark mb-3" type="submit">
                    {loadingImage ? 'Cargando imagen...' : 'Enviar'}
                </Button>

            </Form>
        </Container >
    )

}

export default NewRequestForm
