import { Container, Button, Form, FloatingLabel, Col, Row } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import authServices from "../../services/auth.services"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './../../components/SignUpFormProfessional/SignUpFormProfessional.css'
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'



const SignUpFormProfessional = () => {

    const [professionalData, setProfessionalData] = useState({
        email: "",
        password: "",
        image: "",
        firstName: "",
        lastName: "",
        membershipNumber: "",
        phone: "",
        address: "",
        type: "",
        coordinates: [Number],
        schedule: "",
        specialty: "",
        emergencies: false,
        role: ""
    })

    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)
    const [addressValue, setAddressValue] = useState()

    useEffect(() => handleAutocomplete(), [addressValue])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        authServices
            .newProfessional(professionalData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setProfessionalData({ ...professionalData, [name]: value })

    }

    const handleAutocomplete = () => {
        if (!addressValue) return;

        geocodeByAddress(addressValue.label)
            .then(([addressDetails]) => {
                return getLatLng(addressDetails);
            })
            .then(({ lat, lng }) => {
                setProfessionalData(prevData => ({
                    ...prevData,
                    address: addressValue.label,
                    coordinates: [lng, lat]
                }));
            })
            .catch(error => console.error(error));
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
                <Form.Group as={Col} className="mb-3" controlId="image">
                    <Form.Label className="signUpFormLabel">Imagen:</Form.Label>
                    <Form.Control
                        className="signUpFormInput"
                        type="file"
                        onChange={handleFileUpload} />
                </Form.Group>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="signUpFormLabel"> Email:</Form.Label>
                        <Form.Control
                            className="signUpFormInput"
                            type="email"
                            placeholder="Introduce tu email"
                            onChange={handleInputChange}
                            value={professionalData.email}
                            name={"email"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="signUpFormLabel">Contraseña:</Form.Label>
                        <Form.Control
                            className="signUpFormInput"
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
                        <Form.Label className="signUpFormLabel">Nombre:</Form.Label>
                        <Form.Control
                            className="signUpFormInput"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleInputChange}
                            value={professionalData.firstName}
                            name={"firstName"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label className="signUpFormLabel">Apellidos:</Form.Label>
                        <Form.Control
                            className="signUpFormInput"
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
                        <Form.Label className="signUpFormLabel">Número de colegiado:</Form.Label>
                        <Form.Control
                            className="signUpFormInput"
                            type="text"
                            placeholder="Número de colegiado"
                            onChange={handleInputChange}
                            value={professionalData.membershipNumber}
                            name={"membershipNumber"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                        <Form.Label className="signUpFormLabel">Teléfono de contacto:</Form.Label>
                        <Form.Control
                            className="signUpFormInput"
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
                        <Form.Label className="signUpFormLabel">Nombre de la clínica:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de la clínica"
                            onChange={handleInputChange}
                            value={professionalData.name}
                            name={"name"}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddressclinic">
                        <Form.Label className="signUpFormLabel">Dirección de la clínica:</Form.Label>
                        <GooglePlacesAutocomplete
                            type="text"
                            selectProps={{
                                addressValue,
                                placeholder: "Dirección de la clínica",
                                onChange: setAddressValue
                            }}
                            apiKey="AIzaSyCgCmgUkBCrmjkztK0yqNkzvNNtJjd7mbI"
                        />

                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSpecialty">
                        <Form.Label className="signUpFormLabel">Especialidad:</Form.Label>
                        <Form.Select
                            type="text"
                            placeholder="Especialidad"
                            onChange={handleInputChange}
                            value={professionalData.specialty}
                            name={"specialty"}
                        >
                            <option>Selecciona</option>
                            <option>Domésticos</option>
                            <option>Exóticos</option>
                            <option>Ambos</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUrgencies">
                        <Form.Label className="signUpFormLabel">Urgencias:</Form.Label>
                        <Form.Select
                            onChange={handleInputChange}
                            type="text"
                            placeholder="urgencias"
                            value={professionalData.emergencies}
                            name={"emergencies"}
                        >
                            <option value={true}>Sí</option>
                            <option value={false}>No</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="He leído y acepto los términos y condiciones." required />
                </Form.Group>

                <Button className="signUpFormButton" disabled={loadingImage} type="submit">
                    {loadingImage ? 'Cargando imagen...' : 'Dar de alta'}
                </Button>

            </Form>
        </Container>
    );
}


export default SignUpFormProfessional
