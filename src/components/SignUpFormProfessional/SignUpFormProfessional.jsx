import { Container, Button, Form, FloatingLabel, Col, Row } from "react-bootstrap"

import uploadServices from "../../services/upload.services"


const VITE_BASE_URL = "http://localhost:5005"



const SignUpFormProfessional = () => {

    const [professionalData, setProfessionalData] = useState({

        email: "",
        password: "",
        image: "",
        firstName: "",
        lastName: "",
        membershipNumber: 0,
        phone: "",
        street: "",
        zipCode: "",
        city: "",
        country: "",
        type: "",
        coordinates: [Number],
        schedule: "",
        emergencies: false,


    })

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`${VTE_SERVER_URL}/api/auth/signup`, professionalData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setProfessionalData({ ...professionalData, [name]: value })

    }


    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setProfessionalData({ ...professionalData, imageUrl: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))
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
                            placeholder="Nombre de tu clínica"
                            onChange={handleInputChange}
                            value={professionalData.clinic.name}
                            name={"name"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridStreet">
                        <Form.Label>Dirección de la clínica:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Calle, portal, piso, escalera"
                            onChange={handleInputChange}
                            value={professionalData.clinic.address.street}
                            name={"street"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>C.P.:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Código Postal"
                            onChange={handleInputChange}
                            value={professionalData.clinic.address.zipCode}
                            name={"zipCode"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ciudad"
                            onChange={handleInputChange}
                            value={professionalData.clinic.address.city}
                            name={"city"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>País:</Form.Label>
                        <Form.Select
                            onChange={handleInputChange}
                            type="text"
                            placeholder="País"
                            value={clientData.clinic.address.city}
                            name={"city"}
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
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSchedule">
                        <Form.Label>Especialidad:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Especialidad"
                            onchange={handleInputChange}
                            value={professionalData.schedule}
                            name={"schedule"}
                        />
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

                <Button variant="dark mb-3" type="submit">
                    Dar de alta
                </Button>

            </Form>
        </Container>
    );
}


export default SignUpFormProfessional
