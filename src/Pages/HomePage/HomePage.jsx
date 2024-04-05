import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './HomePage.css'

const HomePage = () => {



    return (
        <div className="HomePage">
            <div className="imgContainer">
                <img className="picHomePage" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418806/p9u1rz5wu0n7bbx1awfb.jpg' alt="homePage pic" />
            </div>
            <div className="introParagraph1">
                <p>
                    ¡Bienvenido a Miauyuda, nos dedicamos a conectar a veterinarios expertos en atención de emergencia con dueños de mascotas preocupados. Entendemos que las emergencias con tus queridas mascotas pueden surgir en cualquier momento, y es por eso que estamos aquí para ofrecerte acceso rápido y confiable a atención veterinaria de calidad, las 24 horas del día, los 7 días de la semana. Nuestra misión es proporcionar tranquilidad y alivio en momentos de crisis, asegurando que tus compañeros peludos reciban la atención que merecen cuando más la necesitan. ¡Confía en nosotros para estar ahí cuando más nos necesites!</p>
            </div>
            <div className="introParagraph2" >
                <p>
                    ¡Bienvenido a Miauyuda, nos dedicamos a conectar a veterinarios expertos en atención de emergencia con dueños de mascotas preocupados. Entendemos que las emergencias con tus queridas mascotas pueden surgir en cualquier momento, y es por eso que estamos aquí para ofrecerte acceso rápido y confiable a atención veterinaria de calidad, las 24 horas del día, los 7 días de la semana. Nuestra misión es proporcionar tranquilidad y alivio en momentos de crisis, asegurando que tus compañeros peludos reciban la atención que merecen cuando más la necesitan. ¡Confía en nosotros para estar ahí cuando más nos necesites!</p>
            </div>
            <Container>
                <Row className="rowOfLove">
                    <h2>Compartimos tu amor por ellos</h2>
                    <Col md={4}>
                        <div className="tags">
                            <div>
                                <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418806/lwndcp6ae0rnsfthj3cp.png' alt="icon service" className="itemsOfLove" />
                            </div>

                            <p><strong>Servicio</strong><br />
                                Intentamos siempre dar un servicio personalizado y de confianza para vosotros y vuestros peques.</p>
                        </div>
                        <div className="tags">
                            <div>
                                <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418806/eeiu2n50l2tvwhwzu4ef.png' alt="icon innovation" className="itemsOfLove" />
                            </div>

                            <p><strong>Innovación</strong><br />
                                Siempre en búsqueda de veterinarios y voluntarios que puedan dar el mejor trato a tus peluditos.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="tags">
                            <div>
                                <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/hxd7k2ev2hrsfw4f6vtt.png' alt="icon love" className="itemsOfLove" />
                            </div>

                            <p><strong>Amor incondicional</strong><br />
                                El amor para los animales es lo que une a todos nosotros en la comunidad de NOMBRE NUESTRO. </p>
                        </div>
                        <div className="tags">
                            <div>
                                <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/i6ogi9w3ch2alpvikxuw.png' alt="icon fiability" className="itemsOfLove" />
                            </div>

                            <p><strong>Fiabilidad</strong><br />
                                Para cualquier duda, consejo o necesidad, nos rodeamos siempre de los mejores veterinarios.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="tags">
                            <div>
                                <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/ys5xblhm7aptyrbcah2j.png' alt="icon client" className="itemsOfLove" />
                            </div>

                            <p><strong>Centrado en el cliente</strong><br />
                                Pendientes de cualquier problema, para que vosotros y vuestras mascotas os sintáis en vuestra segunda casa.</p>
                        </div>
                        <div className="tags">
                            <div>
                                <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418804/fhkkk0pxibyxct88dufc.png' alt="icon actitude" className="itemsOfLove" />
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
                            <div className="container-exotic">
                                <div>
                                    <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/i0uc9z8s9fmc2pmfcbt5.png' alt="dog-photo" className="itemsOfFaq" />
                                </div>
                                <Col md='6'>
                                    <article><strong>Perros</strong><br />
                                        <ul>
                                            <li>¿Cuántos gramos de comida tengo que dara mi perro?</li>
                                            <li>¿Cómo saber si está malito?</li>
                                            <li>¿Cómo le enseño a mi perro lo que quiero que haga?</li>
                                        </ul>
                                    </article>
                                </Col>
                                <Link to="/questions" className="button-faqs">Leer mas</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="faqs">
                            <div className="container-exotic">
                                <div>
                                    <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/rzsni6e72gt403ditcgu.png' alt="cat-photo" className="itemsOfFaq" />
                                </div>
                                <Col md='6'>
                                    <article><strong>Gatos</strong><br />
                                        <ul>
                                            <li>¿Qué significa el ronroneo de un gato?</li>
                                            <li>¿Qué juguetes son los más adecuados?</li>
                                            <li>¿Se pueden adiestrar?</li>
                                        </ul>
                                    </article>
                                </Col>
                                <Link to="/questions" className="button-faqs">Leer mas</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="faqs">
                            <div className="container-exotic">
                                <div>
                                    <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/ucl6qcx9utc8jhdjp34d.png' alt="exotic-photo" className="itemsOfFaq" />
                                </div>
                                <Col md='6'>
                                    <article><strong>Exóticos</strong><br />
                                        <ul>
                                            <li>¿Cuál es el lugar más adecuado para tener a mi ave?</li>
                                            <li>¿Cuándo llevar a mi ave al veterinario?</li>
                                            <li>¿Qué tamaño del acuario es el adecuado para mi pez?</li>
                                        </ul>
                                    </article>
                                </Col>
                                <Link to="/questions" className="button-faqs">Leer mas</Link>
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row className="plans">
                    <h2 className="plansTitle" >Nuestros planes para los peluditos</h2>
                    <Col md={4} className="puppies-col">
                        <Card style={{ width: '25rem' }} className="puppiesCard">
                            <Card.Img variant="top" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/k9ctts8n0ay5we3fkrip.png' />
                            <Card.Body className="cardBody">
                                <h2 className="plansCategories">Cachorros</h2>
                                <Card.Text>
                                    <h3>199 € / 329 €</h3>
                                </Card.Text>
                                <Link to="/questions" className="button-plans">Leer mas</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="adults-col">
                        <Card style={{ width: '25rem' }} className="adultsCard">
                            <Card.Img variant="top" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418805/mf67lnkmzqgud0wr0wvl.png' />
                            <Card.Body className="cardBody">
                                <h2 className="plansCategories">Adultos</h2>
                                <Card.Text>
                                    <h3>179 € / 290 €</h3>
                                </Card.Text>
                                <Link to="/questions" className="button-plans">Leer mas</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="senior-col">
                        <Card style={{ width: '25rem' }} className="seniorCard">
                            <Card.Img variant="top" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1710418806/querkbhsr4um8cvy1t9a.webp' />
                            <Card.Body className="cardBody">
                                <h2 className="plansCategories">Senior</h2>
                                <Card.Text >
                                    <h3>219 € / 319 €</h3>
                                </Card.Text>
                                <Link to="/questions" className="button-plans">Leer mas</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomePage