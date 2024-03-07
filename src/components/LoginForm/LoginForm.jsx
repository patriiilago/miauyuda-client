import { useContext, useState } from "react"
import { useNavigate, } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { Form, Button } from "react-bootstrap"
import AuthServices from "../../services/auth.services"

function LoginForm({ handleClose }) {

    const [clientData, setClientData] = useState({
        email: "",
        password: ""
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        AuthServices
            .login(clientData)
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser()
                navigate('/')
                handleClose()
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

                <Button type="submit" variant="primary" onSubmit={handleClose}>Iniciar sesión</Button>

            </Form.Group>
        </Form>
    )

}
export default LoginForm