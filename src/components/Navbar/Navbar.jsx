import { Button, Nav, Navbar, Modal, Row, Col, Dropdown, Tab, Tabs } from 'react-bootstrap'
import { NavLink, Link, useSearchParams } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./../../context/auth.context"
import LoginForm from "./../../components/LoginForm/LoginForm"
import './Navbar.css'

function Navigation() {


    const { user, isLoggedIn, logout } = useContext(AuthContext)

    const [modalLogin, setModalLogin] = useState(false);
    const [modalSignup, setModalSignup] = useState(false)
    const [activeTab, setActiveTab] = useState('client')
    const [searchParams, setSearchParams] = useSearchParams()

    const [selectedButton, setSelectedButton] = useState(null);



    const handleTabChange = tab => setActiveTab(tab)

    const iconProfessionals = "https://res.cloudinary.com/dxfey6stw/image/upload/v1709829817/r0wwh8hxcfop9m9k2yw4.png"
    const iconClients = "https://res.cloudinary.com/dxfey6stw/image/upload/v1709829750/mbcmxqgxtjratuufzf6g.png"

    useEffect(() => {
        const shouldOpenModal = searchParams.get("modalpopup")
        shouldOpenModal === 'login' && setModalLogin(true)
        shouldOpenModal === 'signup' && setModalSignup(true)
    }, [searchParams])
    return (

        <Navbar expand="lg" className='drop-navbar'>
            <Navbar.Brand >
                <NavLink to={"/"}>
                    <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710414988/pkspogs15mcnglljvlfh.png' className="logo" alt="LOGO" />
                </NavLink>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-left" id="basic-navbar-nav">
                {isLoggedIn && (
                    <Nav>
                        <Link className='nav-link' to={"/"}>Inicio</Link>
                        <Link className='nav-link' to={"/professionals"}>Veterinarios</Link>
                        <Link className='nav-link' to={"/emergencies"}>Urgencias</Link>
                        <Link className='nav-link' to={"/euthanasia"}>Eutanasia</Link>
                        <Link className='nav-link' to={"/questions"}>Consultas frecuentes</Link>
                        <Link className='nav-link' to={"/about"}>Sobre nosotr@s</Link>
                    </Nav>
                )}
                {!isLoggedIn && (
                    <Nav>
                        <Link className='nav-link' to={"/"}>Inicio</Link>
                        <Link className='nav-link' to={"/euthanasia"}>Eutanasia</Link>
                        <Link className='nav-link' to={"/questions"}>Consultas frecuentes</Link>
                        <Link className='nav-link' to={"/about"}>Sobre nosotr@s</Link>
                    </Nav>
                )}

            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>

                    {isLoggedIn && (
                        <Dropdown className='profile-Drop' align="end">

                            <img className='imageProfile' src={user.image} alt="user image" />
                            <Dropdown.Toggle caret-width='1em'>

                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <p>¡Hola, {user.firstName}!</p>
                                <span className='roledd'>{user.role === 'Client' ? ("Cliente") : user.role === 'Professional' ? ("Veterinario") : null}</span>
                                <hr className='hrdrop' />
                                {user.role === 'Client' ? (
                                    <Link to={`/clientprofile`}>
                                        <Dropdown.Item className='profileButton' as={'span'}>
                                            <img className='profilePic' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712668387/m7mvtxkmzzma0nbpuvj9.png" alt="profile image" />Mi perfil
                                        </Dropdown.Item>
                                    </Link>
                                ) : user.role === 'Professional' ? (
                                    <Link to={`/professionalprofile`}>
                                        <Dropdown.Item className='profileButton' as={'span'}>
                                            <img className='profilePic' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712668387/m7mvtxkmzzma0nbpuvj9.png" alt="profile image" />Mi perfil
                                        </Dropdown.Item>
                                    </Link>
                                ) : null}
                                <Link to={`/`}>
                                    <Dropdown.Item className='logoutButton' onClick={logout} as={'span'}>
                                        <img className='logoutPic' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712668387/wiutu1tke247d0gujc7e.png" alt="logout image" />Cerrar sesión
                                    </Dropdown.Item>
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link className='btnSignup' onClick={() => setModalSignup(true)}>
                                Crear Cuenta
                            </Link>
                            <Link className='btnLogin' onClick={() => setModalLogin(true)}>
                                Iniciar Sesión
                            </Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>

            <Modal show={modalLogin} onHide={() => setModalLogin(false)} className="modal-container">

                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Inicia Sesión:</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">

                    <Tabs
                        transition={true}
                        className='modalMenu'
                        id="noanim-tab-example"
                        activeKey={activeTab} onSelect={handleTabChange}
                        style={{ flexDirection: 'row' }}>

                        <Tab eventKey="client" title="Soy cliente">
                            <LoginForm userType="client" handleClose={() => setModalLogin(false)} />
                        </Tab>

                        <Tab eventKey="professional" title="Soy veterinario">
                            <LoginForm userType="professional" handleClose={() => setModalLogin(false)} />
                        </Tab>

                    </Tabs>

                </Modal.Body>
            </Modal>


            <Modal
                show={modalSignup}
                onHide={() => setModalSignup(false)}
                className="modal-container"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex justify-content-between align-items-center w-100">
                        <span>Crear cuenta:</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Container>
                        <Row className="button-container">
                            <Col xs={9} md={6} className='colNewClient'>
                                <Link to={"/newClient"} onClick={() => setModalSignup(false)}>
                                    <Button variant="success" className="custom-button">
                                        <span className="button-text">Cliente</span>
                                    </Button>
                                </Link>
                            </Col>
                            <Col xs={9} md={6} className='colNewClient' onClick={() => setModalSignup(false)}>
                                <Link to={"/newProfessional"}>
                                    <Button variant="success" className="custom-button">
                                        <span className="button-text">Veterinario</span>
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <p className='footerText'>Miauyuda necesita la información de contacto que nos proporcionas para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. </p>
                </Modal.Footer>
            </Modal>


        </Navbar >
    )
}
export default Navigation