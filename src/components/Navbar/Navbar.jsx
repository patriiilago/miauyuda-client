import { Button, Nav, Navbar, Modal, Row, Col, Dropdown, Tab, Tabs } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import { useContext, useState } from "react"
import { AuthContext } from "./../../context/auth.context"
import LoginForm from "./../../components/LoginForm/LoginForm"
import './Navbar.css'
import logo from './../../../src/images/logo.png'

function Navigation() {
    const { user, isLoggedIn, logout } = useContext(AuthContext)

    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false)
    const [activeTab, setActiveTab] = useState('client')


    const handleModalShow = () => setModalShow(true)
    const handleModalClose = () => setModalShow(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTabChange = (tab) => { setActiveTab(tab) }

    const iconProfessionals = "https://res.cloudinary.com/dxfey6stw/image/upload/v1709829817/r0wwh8hxcfop9m9k2yw4.png"
    const iconClients = "https://res.cloudinary.com/dxfey6stw/image/upload/v1709829750/mbcmxqgxtjratuufzf6g.png"

    console.log(user)
    return (

        <Navbar className='navbarStyle'>

            <Navbar.Brand className='navbarStyle' >
                <NavLink to={"/"}>
                    <img src={logo} className="logo" alt="LOGO" />
                </NavLink>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-left" id="basic-navbar-nav">
                <Nav>
                    <Link className='nav-link' to={"/"}>INICIO</Link>
                    <Link className='nav-link' to={"/professionals"}>VETERINARIOS</Link>
                    <Link className='nav-link' to={"/emergencies"}>URGENCIAS</Link>
                    <Link className='nav-link' to={"/euthanasia"}>EUTANASIA A DOMICILIO</Link>
                    <Link className='nav-link' to={"/questions"}>PREGUNTAS FRECUENTES</Link>
                    <Link className='nav-link' to={"/about"}>SOBRE NOSOTR@S</Link>
                </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    {
                        isLoggedIn && (
                            <>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Mi perfil
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <p>¡Hola, {user.firstName}!</p>
                                        <Link to={`/userprofile`}>
                                            <Dropdown.Item as={'span'}>Mi perfil</Dropdown.Item>
                                        </Link>
                                        <Link to={`/`}>
                                            <Dropdown.Item onClick={logout} as={'span'}>Cerrar sesión</Dropdown.Item>
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
                                    <Button className='btn-signup' onClick={handleModalShow}>Crear Cuenta</Button>
                                </Link>
                                <Link>
                                    <Button className='btn-login' onClick={handleShow}>Iniciar Sesión</Button>
                                </Link>
                            </>
                        )
                    }

                </Nav>
            </Navbar.Collapse>
            <Modal show={show} onHide={handleClose} className="modal-container">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Inicia Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Tabs
                        className="tab-style"
                        id="justify-tab-example"
                        justify
                        activeKey={activeTab} onSelect={handleTabChange}>
                        <Tab eventKey="client" title="Cliente">
                            <LoginForm userType="client" handleClose={() => setShow(false)} />
                        </Tab>
                        <Tab eventKey="professional" title="Veterinario">
                            <LoginForm userType="professional" handleClose={() => setShow(false)} />
                        </Tab>
                    </Tabs>

                </Modal.Body>
            </Modal>


            <Modal show={modalShow} onHide={handleModalClose} className="modal-container">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                        Darte de alta como:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <Link to={"/signupclient"} onClick={handleModalClose}>
                                    <img
                                        src={iconClients}
                                        alt="imagen cliente"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Link>
                                <p className='userType'>Cliente</p>
                            </Col>
                            <Col xs={9} md={6} onClick={handleModalClose}>
                                <Link to={"/signupprofessional"}>
                                    <img
                                        src={iconProfessionals}
                                        alt="imagen profesional"
                                        style={{ maxWidth: '100%', height: 'auto' }} />
                                </Link>
                                <p className='userType'>Veterinario</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button onClick={handleModalClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>



        </Navbar >
    )

}
export default Navigation