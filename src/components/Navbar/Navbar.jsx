import { Button, Nav, Navbar, Modal, Form } from 'react-bootstrap'
import { NavLink, Link, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { useContext, useState } from "react";
import { AuthContext } from "./../../context/auth.context";
import LoginForm from "./../../components/LoginForm/LoginForm"


const VITE_BASE_URL = 'http://localhost:5005'

function Navigation(handleLoginSubmit) {
    const { user, isLoggedIn, logout } = useContext(AuthContext)

    const [show, setShow] = useState(false);
    // const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
            <Container>
                <Navbar.Brand >
                    <NavLink to={"/"}>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/005/893/586/non_2x/stethoscope-and-animal-footprint-veterinary-concept-silhouette-icon-veterinarian-medicine-equipment-glyph-pictogram-pet-dog-cat-health-care-service-icon-isolated-illustration-vector.jpg"
                            width="50"
                            height="50"
                            alt="LOGO"
                        />
                    </NavLink>
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-left" id="basic-navbar-nav">
                    <Nav>
                        <Link className='nav-link' to={"/"}>INICIO</Link>
                        <Link className='nav-link' to={"/professionals"}>VETERINARIOS</Link>
                        <Link className='nav-link' to={"/emergencies"}>URGENCIAS</Link>
                        <Link className='nav-link' to={"/about"}>SOBRE NOSOTR@S</Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>

                        {
                            isLoggedIn && (
                                <>


                                    <Button onClick={logout} className='nav-link' to={"/"}>Salir</Button>

                                    <p>¡Hola, {user.name}!</p>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Mi perfil
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Link to={`/userprofile`}>
                                                <Dropdown.Item href="#/action-1">Mi perfil</Dropdown.Item>
                                            </Link>
                                            <Link to={`/`}>
                                                <Dropdown.Item href="#/action-2">Cerrar sesión</Dropdown.Item>
                                            </Link>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </>
                            )
                        }

                        {
                            !isLoggedIn && (
                                <>

                                    <Link to={`/signup`}>
                                        <Button variant="dark" className='btn-signup' >Crear Cuenta</Button>
                                    </Link>

                                    <Link to={`/login`}>
                                        <Button variant="dark" className='btn-login' onClick={handleShow}>Iniciar Sesión</Button>
                                    </Link>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Inicia Sesión</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <LoginForm />
                                        </Modal.Body>


                                    </Modal>

                                </>
                            )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )

}
export default Navigation