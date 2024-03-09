
// import { Container, Button } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
// import './AboutPage.css'
// import { Link } from 'react-router-dom'


// const AboutUsPage = () => {



//     return (
//         <div className="AboutUsPage">
//             <Container className='AboutPage'>

//                 <h1 className='title'>Gracias por entrar en.... ***NOMBRE****!</h1>

//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla harum quam quidem rerum omnis fugit officia assumenda maiores! Esse nisi officiis natus commodi aliquid ut tempore similique tenetur, modi laborum.</p>
//                 <p>Teresa, Óscar & Patri.</p>

//                 <div className="d-flex align-items-center">
//                     <Image
//                         className="aboutImage"
//                         src="https://ca.slack-edge.com/T06BMN0R8BG-U06CH4KHM7F-502fcb046a1f-512"
//                         rounded />


//                     <Image
//                         className="aboutImage"
//                         src="https://ca.slack-edge.com/T06BMN0R8BG-U06D8RF618Q-da5a6e471122-512"
//                         rounded />



//                     <Image
//                         className="aboutImage"
//                         src="https://ca.slack-edge.com/T06BMN0R8BG-U06CYM4SNDP-bacb012ad24b-512"
//                         rounded />


//                 </div>

//                 <div>

//                     <Link to={"https://www.linkedin.com/in/teresa-arranz-carrasco-4336ba166/"}>
//                         <Button variant="dark" > LinkedIn de Teresa  </Button>
//                     </Link>
//                     {" "}
//                     <Link to={"https://www.linkedin.com/in/patri-lago-b793242b1/"}>
//                         <Button variant="dark" > LinkedIn de Patri </Button>
//                     </Link>
//                     {" "}
//                     <Link to={"https://www.linkedin.com/in/oscar-gomez-diez-b967202a/"}>
//                         <Button variant="dark" > LinkedIn de Oscar </Button>
//                     </Link>
//                 </div>


//                 {" "}
//                 <p>AQUI VA EL QR</p>
//                 {" "}
//                 <p>aqui la recomendacion de compis</p>
//                 {" "}


//                 <Link to={"/"}>
//                     <Button variant="dark" > 🔙 Volver al Inicio</Button>
//                 </Link>
//                 {" "}




//             </Container>










//         </div >
//     )
// }

// export default AboutUsPage

import Carousel from 'react-bootstrap/Carousel'
import './../../Pages/AboutUsPage/AboutUsPage.css'
import creadoresPhoto from './../../images/diapositiva1.jpg'
function AboutUsPage() {
    return (
        <Carousel fade>
            <Carousel.Item className='hola'>

                <img
                    className="carouselImg"
                    text="First slide"
                    src={creadoresPhoto}

                />

                <Carousel.Caption>

                    {/* <p>Teresa Arranz, Patri Lago y Óscar Diez</p> */}
                </Carousel.Caption>
                {/* </Carousel.Item>
            <Carousel.Item className='hola'>
                <img
                    // className="d-block w-35"
                    text="Second slide"
                    src=""

                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='hola'>
                <img
                    // className="d-block w-35"
                    text="Second slide"
                    src=""
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default AboutUsPage;
