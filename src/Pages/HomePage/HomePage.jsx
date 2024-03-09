import { Container, Row, Col, Card, Button } from "react-bootstrap"
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
                <h2>Tips para cuidar mejor de tus peluditos</h2>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Perros</Card.Title>
                                <Card.Text>
                                    Entra para ver los problemas y preguntas más frecuentes con respecto a los perros:
                                    <>
                                        <ul>
                                            <li>¿Cuántos gramos de comida tengo que dar de comer a mi perro?</li>
                                            <li>¿Cómo saber si está malito?</li>
                                            <li>¿Cómo le enseño a mi perro lo que quiero que haga?</li>
                                        </ul>
                                    </>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Gatos</Card.Title>
                                <Card.Text>
                                    Entra para ver los problemas y preguntas más frecuentes con respecto a los gatos:
                                    <>
                                        <ul>
                                            <li>¿Qué significa el ronroneo de un gato?</li>
                                            <li>¿Qué juguetes son los más adecuados?</li>
                                            <li>¿Se pueden adiestrar?</li>
                                        </ul>
                                    </>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Exóticos</Card.Title>
                                <Card.Text>
                                    Entra para ver los problemas y preguntas más frecuentes con respecto a los animales exóticos:
                                    <>
                                        <ul>
                                            <li>¿Cuál es el lugar más adecuado para tener a mi ave?</li>
                                            <li>¿Cuándo llevar a mi ave al veterinario?</li>
                                            <li>¿Qué tamaño del acuario es el adecuado para mi pez?</li>
                                        </ul>
                                    </>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Footer />

        </div >
    )
}

export default HomePage