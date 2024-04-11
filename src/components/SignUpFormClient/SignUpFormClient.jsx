import { Button, Form, Col, Row } from "react-bootstrap"
import '../../components/SignUpFormClient/SignUpFormClient.css'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import uploadServices from "../../services/upload.services"
import authServices from '../../services/auth.services'
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'


// TODO DAR MAS ESPACIO DEL BOTON DE DAR DE ALTA HASTA ABAJO

const SignUpFormClient = () => {

    const [clientData, setClientData] = useState({
        image: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        street: "",
        coordinates: [Number],
        city: "",
        country: "",
        zipCode: "",
        role: "client"
    })

    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)
    const [addressValue, setAddressValue] = useState()

    useEffect(() => {
        if (addressValue && addressValue.label) {
            handleAutocomplete(addressValue.label)
        }
    }, [addressValue])

    const handleFormSubmit = (event) => {
        event.preventDefault()

        authServices
            .newClient(clientData)
            .then(() => navigate('/?modalpopup=login')) //aqui
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setClientData({ ...clientData, [name]: value })

    }

    const handleAutocomplete = (label) => {
        geocodeByAddress(label)
            .then(([addressDetails]) => getLatLng(addressDetails))
            .then(({ lat, lng }) => {
                setClientData(prevData => ({
                    ...prevData,
                    address: label,
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
                setClientData({ ...clientData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }



    return (
        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label className="signUpFormClientLabel">Imagen:</Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleFileUpload}
                />
            </Form.Group>

            <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="signUpFormClientLabel">Email:</Form.Label>
                    <Form.Control
                        className="signUpFormClientInput"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Introduce tu email"
                        value={clientData.email}
                        name={"email"}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="signUpFormClientLabel">Contraseña:</Form.Label>
                    <Form.Control
                        className="signUpFormClientInput"
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Contraseña"
                        value={clientData.password}
                        name={"password"}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label className="signUpFormClientLabel">Nombre:</Form.Label>
                    <Form.Control
                        className="signUpFormClientInput"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Introduce tu nombre"
                        value={clientData.firstName}
                        name={"firstName"}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label className="signUpFormClientLabel">Apellidos:</Form.Label>
                    <Form.Control
                        className="signUpFormClientInput"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Introduce tus apellidos"
                        value={clientData.lastName}
                        name={"lastName"}
                    />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                    <Form.Label className="signUpFormClientLabel">Teléfono de contacto:</Form.Label>
                    <Form.Control
                        className="signUpFormClientInput"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Teléfono 1"
                        value={clientData.phone}
                        name={"phone"}
                    />
                </Form.Group>
            </Row>

            <Row >

                <Form.Group controlId="formGridAddress">
                    <Form.Label className="signUpFormLabel">Dirección del cliente:</Form.Label>
                    <GooglePlacesAutocomplete
                        selectProps={{
                            addressValue,
                            placeholder: "Dirección del cliente",
                            onChange: setAddressValue
                        }}
                        apiKey="AIzaSyCgCmgUkBCrmjkztK0yqNkzvNNtJjd7mbI"
                    />

                </Form.Group>

            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                    type="checkbox"
                    label="He leído y acepto los términos y condiciones."
                    required />
            </Form.Group>

            <Button disabled={loadingImage} className="signUpFormClientButton" type="submit">
                {loadingImage ? 'Cargando imagen...' : 'Dar de alta'}
            </Button>

        </Form>
    );
}




export default SignUpFormClient
