import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { Form, Button } from "react-bootstrap"
import AuthServices from "../../services/auth.services"
import './../../components/LoginForm/LoginForm.css'

function LoginForm({ handleClose, userType }) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })



    const navigate = useNavigate()



    const handleImputChange = (event) => {
        const { value, name } = event.target
        setFormData({ ...formData, [name]: value })
    }


    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (userType === 'client') {
            AuthServices
                .loginClient(formData)
                .then((response) => {
                    storeToken(response.data.authToken)
                    authenticateUser()
                    navigate('/')
                    handleClose()
                })
                .catch(err => console.log(err))
        }
        else if (userType === 'professional') {
            AuthServices
                .loginProfessional(formData)
                .then((response) => {
                    storeToken(response.data.authToken)
                    authenticateUser()
                    navigate('/')
                    handleClose()
                })
                .catch(err => console.log(err))
        }

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
                        value={formData.email}
                        onChange={handleImputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormLoginPassword">
                    <Form.Label className="textLabel">Contraseña:</Form.Label>
                    <Form.Control
                        className="green-border"
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        name='password'
                        onChange={handleImputChange}
                    />

                    <Button type="submit" variant="primary" className="login-button" onClick={handleClose}>Iniciar sesión</Button>

                </Form.Group>
            </Form>



            <p>¿No tienes una cuenta?</p>
            <Link className="signupLink" to={"/newClient"}> Regístrate como cliente <br /></Link>
            <Link className="signupLink" to={"/newProfessional"}> Regístrate como veterinario </Link>
        </div>
    )

}
export default LoginForm