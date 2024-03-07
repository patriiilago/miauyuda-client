import { Button, Nav, Navbar, Modal, Row, Col } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { useContext, useState } from "react";
import { AuthContext } from "./../../context/auth.context";
import LoginForm from "./../../components/LoginForm/LoginForm"


function Navigation(handleLoginSubmit) {
    const { user, isLoggedIn, logout } = useContext(AuthContext)

    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false)
    // const navigate = useNavigate()

    const handleModalShow = () => setModalShow(true)
    const handleModalClose = () => setModalShow(false)
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

                                    <Link>
                                        <Button variant="dark" className='btn-signup' onClick={handleModalShow}>Crear Cuenta</Button>
                                    </Link>

                                    <Link to={`/login`}>
                                        <Button variant="dark" className='btn-login' onClick={handleShow}>Iniciar Sesión</Button>
                                    </Link>

                                </>
                            )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicia Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm handleClose={() => setShow(false)} />
                </Modal.Body>
            </Modal>


            <Modal show={modalShow}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Darte de alta como:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <img src="https://asset.cloudinary.com/dxfey6stw/f2f2aacc880a3d6ea9c644b69cdb219f" alt="imagen cliente" />
                            </Col>
                            <Col xs={9} md={6}>
                                <img src="https://asset.cloudinary.com/dxfey6stw/b3db1282fa24e6a8acaaf9ffad8f9079" alt="imagen profesional" />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>



        </Navbar >
    )

}
export default Navigation