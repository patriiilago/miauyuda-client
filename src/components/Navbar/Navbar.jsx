import { Button, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { AuthContext } from "./../../context/auth.context";


function Navigation() {

    const { user, isLoggedIn, logout } = useContext(AuthContext)

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
                                </>
                            )
                        }

                        {
                            !isLoggedIn && (
                                <>

                                    <Link to={`/signup`}>
                                        <Button variant="dark" className='btn-signup'>Crear Cuenta</Button>
                                    </Link>

                                    <Link to={`/login`}>
                                        <Button variant="dark" className='btn-login'>Iniciar Sesión</Button>
                                    </Link>


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