import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { Form, Button } from "react-bootstrap"
import AuthServices from "../../services/auth.services"
import './../../components/LoginForm/LoginForm.css'

function LoginForm({ handleClose }) {

    const [clientData, setClientData] = useState({
        email: "",
        password: ""
    })



    const navigate = useNavigate()



    const handleImputChange = (event) => {
        const { value, name } = event.target
        setClientData({ ...clientData, [name]: value })
    }


    const { storeToken, authenticateUser } = useContext(AuthContext)

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

    return (
        <div className="login-form-container">
            <Form onSubmit={handleLoginSubmit} >
                <Form.Group className="mb-3" controlId="FormLoginEmail">
                    <Form.Label className="textLabel">Email:</Form.Label>
                    <Form.Control
                        className="green-border"
                        type="email"
                        placeholder="Introduce tu email"
                        name="email"
                        value={clientData.email}
                        onChange={handleImputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormLoginPassword">
                    <Form.Label className="textLabel">Contraseña:</Form.Label>
                    <Form.Control
                        className="green-border"
                        type="password"
                        placeholder="Contraseña"
                        value={clientData.password}
                        name='password'
                        onChange={handleImputChange}
                    />

                    <Button type="submit" variant="primary" className="login-button" onClick={handleClose}>Iniciar sesión</Button>

                </Form.Group>
            </Form>



            <p>¿No tienes una cuenta?</p>
            <Link className="signupLink" to={"/signupclient"}> Regístrate como cliente <br /></Link>
            <Link className="signupLink" to={"/signupprofessional"}> Regístrate como veterinario </Link>
        </div>
    )

}
export default LoginForm