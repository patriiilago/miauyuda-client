
import { Container, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './AboutPage.css'
import { Link } from 'react-router-dom'


const AboutUsPage = () => {



    return (
        <div className="AboutUsPage">
            <Container className='AboutPage'>

                <h1 className='title'>Gracias por entrar en.... ***NOMBRE****!</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum quam quidem rerum omnis fugit officia assumenda maiores! Esse nisi officiis natus commodi aliquid ut tempore similique tenetur, modi laborum.</p>
                <p>Teresa & Patri.</p>

                <div className="d-flex align-items-center">
                    <Image
                        className="aboutImage"
                        src="https://ca.slack-edge.com/T06BMN0R8BG-U06CH4KHM7F-502fcb046a1f-512"
                        rounded />
                    <Link to={"https://www.linkedin.com/in/teresa-arranz-carrasco-4336ba166/"}>
                        <Button variant="dark" > LinkedIn de Teresa  </Button>
                    </Link>
                </div>

                <div className="d-flex align-items-center">
                    <Image
                        className="aboutImage"
                        src="https://ca.slack-edge.com/T06BMN0R8BG-U06D8RF618Q-da5a6e471122-512"
                        rounded />

                    <Link to={"https://www.linkedin.com/in/patri-lago-b793242b1/"}>
                        <Button variant="dark" > LinkedIn de Patri </Button>
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <Image
                        className="aboutImage"
                        src="https://ca.slack-edge.com/T06BMN0R8BG-U06CYM4SNDP-bacb012ad24b-512"
                        rounded />

                    <Link to={"https://www.linkedin.com/in/oscar-gomez-diez-b967202a/"}>
                        <Button variant="dark" > LinkedIn de Oscar </Button>
                    </Link>
                </div>


                {" "}
                <p>AQUI VA EL QR</p>
                {" "}
                <p>aqui la recomendacion de compis</p>
                {" "}


                <Link to={"/"}>
                    <Button variant="dark" > 🔙 Volver al Inicio</Button>
                </Link>
                {" "}




            </Container>










        </div >
    )
}

export default AboutUsPage