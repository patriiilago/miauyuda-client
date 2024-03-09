import { Container, Row, Col } from "react-bootstrap"
import Footer from "../../components/Footer/Footer"
import homeImage from './../../../public/image-copyright-35.jpg'
import './HomePage.css'

const HomePage = () => {



    return (
        <div className="HomePage">
            <div className="imgContainer">
                <img className="picHomePage" src={homeImage} alt="homePage pic" />
            </div>
            <div className="introParagraph">
                <p>
                    ¡Bienvenido a PONER NOMBRE, nos dedicamos a conectar a veterinarios expertos en atención de emergencia con dueños de mascotas preocupados. Entendemos que las emergencias con tus queridas mascotas pueden surgir en cualquier momento, y es por eso que estamos aquí para ofrecerte acceso rápido y confiable a atención veterinaria de calidad, las 24 horas del día, los 7 días de la semana. Nuestra misión es proporcionar tranquilidad y alivio en momentos de crisis, asegurando que tus compañeros peludos reciban la atención que merecen cuando más la necesitan. ¡Confía en nosotros para estar ahí cuando más nos necesites!</p>
            </div>
            <Container>
                <h2>Compartimos tu amor por ellos</h2>
                <Row className="tags">
                    <Col md={4}>
                        <div>
                            <h6>Servicio</h6>
                            <p>Cada usuario que confía en nosotros forma parte de nuestra familia. Servicio personalizado y de confianza para vosotros y vuestros peques.</p>
                        </div>
                        <div>
                            <h6>Innovación</h6>
                            <p>Siempre en búsqueda de veterinarios y voluntarios que puedan dar el mejor trato a tus peluditos.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <h6>Amor incondicional</h6>
                            <p>El amor para los animales es lo que une a todos nosotros en la comunidad de NOMBRE NUESTRO. </p>
                        </div>
                        <div>
                            <h6>Fiabilidad</h6>
                            <p>Para cualquier duda, consejo o necesidad, nos rodeamos siempre de los mejores veterinarios.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <h6>Centrado en el cliente</h6>
                            <p>Para que vosotros y vuestras mascotas os sintáis en vuestra segunda casa. Siempre estamos detrás de todo lo que pasa y hacemos de mediadores para cualquier problema que surja. </p>
                        </div>
                        <div>
                            <h6>Actitud positiva</h6>
                            <p>Para cualquier duda, consejo o necesidad, nos rodeamos siempre de los mejores veterinarios.</p>
                        </div>
                    </Col>
                </Row>


            </Container>
            <Footer />

        </div >
    )
}

export default HomePage