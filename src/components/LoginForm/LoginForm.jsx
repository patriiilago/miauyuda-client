import { useContext, useState } from "react"
import { Link, useNavigate, } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { Form, Button } from "react-bootstrap"
import axios from "axios"

const VITE_BASE_URL = "http://localhost:5005"

function LoginPage() {
    const [clientData, setClientData] = useState({
        email: "",
        password: ""
    })

    const { errorMessage, setErrorMessage } = useState(undefined)
    const { storeToken, setStoreToken } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = clientData
        const requestBody = { email, password }

        axios
            .post(`${VITE_BASE_URL}/api/auth/login`, requestBody)
            .then((response) => {
                storeToken(response.data.authToken)
                autenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleImputChange = (event) => {
        const { value, name } = event.target
        setClientData({ ...clientData, [name]: value })
    }

    return (
        <Form>
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
                <Button type="submit" variant="primary" onClick={handleLoginSubmit}>
                    Iniciar sesión
                </Button>
            </Form.Group>
        </Form>
    )

}
export default LoginPage