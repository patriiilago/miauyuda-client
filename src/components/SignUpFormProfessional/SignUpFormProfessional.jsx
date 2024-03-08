import { Container, Button, Form, FloatingLabel, Col, Row } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import authServices from "../../services/auth.services"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { COUNTRIES_LIST } from "../../consts/client.consts"

const SignUpFormProfessional = () => {

    const [professionalData, setProfessionalData] = useState({

        email: "",
        password: "",
        image: "",
        firstName: "",
        lastName: "",
        membershipNumber: "",
        phone: "",
        street: "",
        zipCode: "",
        city: "",
        country: "",
        type: "",
        coordinates: [Number],
        schedule: "",
        specialty: "",
        emergencies: false,


    })
    const noReload = ((evt) => {
        evt.preventDefault()
    })
    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()

        authServices
            .postSignup(professionalData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setProfessionalData({ ...professionalData, [name]: value })

    }


    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setProfessionalData({ ...professionalData, image: res.data.cloudinary_url })
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
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Introduce tu email"
                            onChange={handleInputChange}
                            value={professionalData.email}
                            name={"email"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInputChange}
                            value={professionalData.password}
                            name={"password"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            onChange={handleInputChange}
                            value={professionalData.firstName}
                            name={"firstName"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellidos"
                            onChange={handleInputChange}
                            value={professionalData.lastName}
                            name={"lastName"}
                        />
                    </Form.Group>

                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} className="mb-3" controlId="formGrid1MembershipNumber">
                        <Form.Label>Número de colegiado:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Número de colegiado"
                            onChange={handleInputChange}
                            value={professionalData.membershipNumber}
                            name={"membershipNumber"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                        <Form.Label>Teléfono de contacto:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Teléfono"
                            onChange={handleInputChange}
                            value={professionalData.phone}
                            name={"phone"}
                        />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridNameclinic">
                        <Form.Label>Nombre de la clínica:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de la clínica"
                            onChange={handleInputChange}
                            value={professionalData.name}
                            name={"name"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridStreet">
                        <Form.Label>Dirección de la clínica:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Calle"
                            onChange={handleInputChange}
                            value={professionalData.street}
                            name={"street"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>C.P.:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Código Postal"
                            onChange={handleInputChange}
                            value={professionalData.zipCode}
                            name={"zipCode"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ciudad"
                            onChange={handleInputChange}
                            value={professionalData.city}
                            name={"city"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>País:</Form.Label>
                        <Form.Select
                            onChange={handleInputChange}
                            type="text"
                            placeholder="País"
                            value={professionalData.country}
                            name={"country"}
                        >
                            {
                                COUNTRIES_LIST.map(elm => <option>{elm}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSpecialty">
                        <Form.Label>Especialidad:</Form.Label>
                        <Form.Select
                            type="text"
                            placeholder="Especialidad"
                            onChange={handleInputChange}
                            value={professionalData.specialty}
                            name={"specialty"}

                        >
                            <option>Domésticos</option>
                            <option>Exóticos</option>
                            <option>Ambos</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUrgencies">
                        <Form.Label>Urgencias:</Form.Label>
                        <Form.Select
                            defaultValue="Choose..."
                            onChange={handleInputChange}
                            type="text"
                            placeholder="urgencias"
                            value={professionalData.urgencies}
                            name={"urgencies"}
                        >
                            <option>Sí</option>
                            <option>No</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="He leído y acepto los términos y condiciones." />
                </Form.Group>

                <Button disabled={loadingImage} variant="dark mb-3" type="submit" noReload>
                    {loadingImage ? 'Cargando imagen...' : 'Dar de alta'}
                </Button>

            </Form>
        </Container>
    );
}


export default SignUpFormProfessional
