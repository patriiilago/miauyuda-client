import { useContext, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Container, Button, Form, Col, Row } from "react-bootstrap"
import requestServices from "../../services/request.services"
import uploadServices from "../../services/upload.services"
import { AuthContext } from "../../context/auth.context"
import './../../components/NewRequestForm/NewRequestForm.css'

const NewRequestForm = () => {

    const { profesionalId } = useParams()

    const { user } = useContext(AuthContext)

    const [requestData, setRequestData] = useState({
        client: user._id,
        professional: profesionalId,
        status: false,
        question: "",
        image: "",
    })

    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()

        requestServices
            .saveNewRequest(requestData)
            .then(() => navigate('/'))
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
        <div className="containerForm">
            <h1>
                Realiza tu consulta al especialista:
            </h1>
            <Container className="NewRequestForm">
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label className="NewRequestFormLabel">Imagen:</Form.Label>
                        <Form.Control
                            className="NewRequestFormSelect"
                            type="file"
                            onChange={handleFileUpload} />
                    </Form.Group>

                    <Row className="mb-3 mt-3">

                        <Form.Group as={Col} controlId="formGridQuestion">
                            <Form.Label className="NewRequestFormLabel">Consulta:</Form.Label>
                            <Form.Control
                                as="textarea"
                                className="NewRequestFormSelect"
                                type="text"
                                placeholder="Escribe aquí tu consulta..."
                                onChange={handleInputChange}
                                value={requestData.question}
                                name={"question"}
                            />
                        </Form.Group>
                    </Row>
                    <Link to={`/professionals`}>
                        <Button disabled={loadingImage} className="NewRequestFormButton" type="submit">
                            {loadingImage ? 'Cargando imagen...' : 'Enviar'}
                        </Button>
                    </Link>

                </Form>
            </Container >
        </div>
    )

}

export default NewRequestForm
