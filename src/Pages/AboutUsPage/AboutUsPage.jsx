import Carousel from 'react-bootstrap/Carousel'
import './../../Pages/AboutUsPage/AboutUsPage.css'
import creadoresPhoto from './../../images/diapositiva1.jpg'
import teresaPhoto from './../../images/teresa.jpg'
import patriPhoto from './../../images/patri.jpg'
import oscarPhoto from './../../images/oscar.jpg'
import turkaPhoto from './../../images/turka.jpg'
import QRphoto from './../../images/QRacordeon.jpg'
// TODO: GENERAR NUEVO QR Y AÑADIR A LA ULTIMA DIAPOSITIVA

function AboutUsPage() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="carouselImg"
                    text="First slide"
                    src={creadoresPhoto}
                />
            </Carousel.Item>

            <Carousel.Item>
                <a href="https://www.linkedin.com/in/teresa-arranz-carrasco/">
                    <img
                        className="carouselImg"
                        text="First slide"
                        src={teresaPhoto}
                    />
                </a>
            </Carousel.Item>

            <Carousel.Item>
                <a href="https://www.linkedin.com/in/patri-lago/">
                    <img
                        className="carouselImg"
                        text="slide 1"
                        src={patriPhoto}
                    />
                </a>
            </Carousel.Item>

            <Carousel.Item>
                <a href="https://www.linkedin.com/in/oscar-gomez-diez/">
                    <img
                        className="carouselImg"
                        text="slide 2"
                        src={oscarPhoto}
                    />
                </a>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="carouselImg"
                    text="slide 3"
                    src={turkaPhoto}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselImg"
                    text="slide 4"
                    src={QRphoto}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default AboutUsPage;
