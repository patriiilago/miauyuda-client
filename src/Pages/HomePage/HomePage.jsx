import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Footer from "../../components/Footer/Footer"
import homeImage from './../../../public/image-copyright-35.jpg'
import positiveActitude from './../../../public/actitud-positiva.png'
import inconditionalLove from './../../../public/amor-incondicional.png'
import clientCentered from './../../../public/centrado-cliente.png'
import fiability from './../../../public/fiabilidad.png'
import innovation from './../../../public/innovacion.png'
import service from './../../../public/servicio.png'
import faqCat from './../../../public/faq-gato.png'
import faqDog from './../../../public/faq-perro.png'
import faqExotic from './../../../public/faq-exotico.png'
import { Link } from "react-router-dom"
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
                <Row className="rowOfLove">
                    <h2>Compartimos tu amor por ellos</h2>
                    <Col md={4}>
                        <div className="tags">
                            <div>
                                <img src={service} alt="icon service" className="itemsOfLove" />
                            </div>

                            <p><strong>Servicio</strong><br />
                                Intentamos siempre dar un servicio personalizado y de confianza para vosotros y vuestros peques.</p>
                        </div>
                        <div className="tags">
                            <div>
                                <img src={innovation} alt="icon innovation" className="itemsOfLove" />
                            </div>

                            <p><strong>Innovación</strong><br />
                                Siempre en búsqueda de veterinarios y voluntarios que puedan dar el mejor trato a tus peluditos.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="tags">
                            <div>
                                <img src={inconditionalLove} alt="icon love" className="itemsOfLove" />
                            </div>

                            <p><strong>Amor incondicional</strong><br />
                                El amor para los animales es lo que une a todos nosotros en la comunidad de NOMBRE NUESTRO. </p>
                        </div>
                        <div className="tags">
                            <div>
                                <img src={fiability} alt="icon fiability" className="itemsOfLove" />
                            </div>

                            <p><strong>Fiabilidad</strong><br />
                                Para cualquier duda, consejo o necesidad, nos rodeamos siempre de los mejores veterinarios.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="tags">
                            <div>
                                <img src={clientCentered} alt="icon client" className="itemsOfLove" />
                            </div>

                            <p><strong>Centrado en el cliente</strong><br />
                                Pendientes de cualquier problema, para que vosotros y vuestras mascotas os sintáis en vuestra segunda casa.</p>
                        </div>
                        <div className="tags">
                            <div>
                                <img src={positiveActitude} alt="icon actitude" className="itemsOfLove" />
                            </div>

                            <p><strong>Actitud positiva</strong><br />
                                Para cualquier duda, consejo o necesidad, nos rodeamos siempre de los mejores veterinarios.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="faq-row">
                    <h2>Compartimos nuestro conocimiento por ellos</h2>
                    <Col>
                        <div className="faqs">
                            <div className="container-dog">
                                <div>
                                    <img src={faqDog} alt="Dog-photo" className="itemsOfFaq" />
                                </div>

                                <article><strong>Perros</strong><br />
                                    <ul>
                                        <li>¿Cuántos gramos de comida tengo que dar de comer a mi perro?</li>
                                        <li>¿Cómo saber si está malito?</li>
                                        <li>¿Cómo le enseño a mi perro lo que quiero que haga?</li>
                                    </ul>
                                    <Link to="/questions" className="button-faqs">Leer mas</Link>
                                </article>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="faqs">
                            <div className="container-cat">
                                <div>
                                    <img src={faqCat} alt="Cat-photo" className="itemsOfFaq" />
                                </div>

                                <article><strong>Gatos</strong><br />
                                    <ul>
                                        <li>¿Qué significa el ronroneo de un gato?</li>
                                        <li>¿Qué juguetes son los más adecuados?</li>
                                        <li>¿Se pueden adiestrar?</li>
                                    </ul>
                                    <Link to="/questions" className="button-faqs">Leer mas</Link>
                                </article>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="faqs">
                            <div className="container-exotic">
                                <div>
                                    <img src={faqExotic} alt="exotic-photo" className="itemsOfFaq" />
                                </div>

                                <article><strong>Exóticos</strong><br />
                                    <ul>
                                        <li>¿Cuál es el lugar más adecuado para tener a mi ave?</li>
                                        <li>¿Cuándo llevar a mi ave al veterinario?</li>
                                        <li>¿Qué tamaño del acuario es el adecuado para mi pez?</li>
                                    </ul>
                                    <Link to="/questions" className="button-faqs">Leer mas</Link>
                                </article>
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row className="tips">
                    <h2>Tips para cuidar mejor de tus peluditos</h2>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="">
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
                                <Card.Text >
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