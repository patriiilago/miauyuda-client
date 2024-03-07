import { useContext, useState } from "react"
import { Link, useNavigate, } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import authServices from "../../services/auth.services"

const VITE_BASE_URL = "http://localhost:5005"

function LoginPage({ handleClose }) {
    const [clientData, setClientData] = useState({
        email: "",
        password: ""
    })

    const { errorMessage, setErrorMessage } = useState(undefined)
    const { storeToken, setStoreToken } = useContext(AuthContext)

    const navigate = useNavigate

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        authServices
            .login(clientData)
            .then((response) => {
                storeToken(response.data.authToken)
                autenticateUser()
                handleClose()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleImputChange = (event) => {
        const { value, name } = event.target
        setClientData({ ...clientData, [name]: value })
    }

    return (
        <Form onSubmit={handleLoginSubmit} >
            <Form.Group className="mb-3" controlId="FormLoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={clientData.email}
                    onChange={handleImputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormLoginPassword">
                <Form.Label>password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="contraseña"
                    value={clientData.password}
                    name='password'
                    onChange={handleImputChange}
                />

                <Button type="submit" variant="primary">Iniciar sesión</Button>


            </Form.Group>
        </Form>
    )

}
export default LoginPage