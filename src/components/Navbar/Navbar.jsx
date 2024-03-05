import { Button, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';




function Navigation() {
    return (

        <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
            <Container>
                <Navbar.Brand >
                    <NavLink to={"#"}>
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
                        <Link className='nav-link' to={"#"}>HOME</Link>
                        <Link className='nav-link' to={"#"}>VETERINARIOS</Link>
                        <Link className='nav-link' to={"#"}>URGENCIAS</Link>
                        <Link className='nav-link' to={"#"}>ABOUT US</Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Button className='nav-link' to={"#"}>SingUp</Button>
                        <Button className='nav-link' to={"#"}>LogIn</Button>
                        <Button className='nav-link' to={"#"}>LogOut</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )

}
export default Navigation