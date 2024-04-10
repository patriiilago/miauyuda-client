import './../../Pages/EuthanasiaPage/EuthanasiaPage.css'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'

const EuthanasiaPage = () => {

    return (
        <div >

            <Row>
                <div className="imgEuthaContainer">
                    <img className="euthaImage" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712570812/vwtgpy48uckirvhzkhnc.png' alt="homePage pic" />
                </div>
                <div className="euthaParagraph1">
                    <p><span>Servicio <br /> Eutanasia <span className="introParagraphstrong"></span> </span><br /> <span className="euthaParagraphstrong" >24 horas</span> </p>
                    <p className="euthaParagraph2">Ofrecemos un servicio compasivo y respetuoso de eutanasia. Brindándote <br /> apoyo y comprensión en este difícil momento.</p>

                </div>
            </Row>

            <div className="servText">
                <h2><span className="servicetxt1">Servicios especializados </span> <br /> <span className="servicetxt2">de eutanasia compasiva</span></h2>
                <p className="servicetxt3"> En Miauyuda proporcionamos servicios de eutanasia para mascotas de todas las edades, asegurando atención médica <br /> apropiada y asequible tanto para cachorros, adultos como para mascotas mayores.</p>
            </div>


            <Row className="services">
                <Col md={6} className="services-col">
                    <Card style={{ width: '29rem' }} className="services-card">
                        <Card.Title className="servicesBody">
                            <div><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712595224/c57p3jotvw8kkrf8ck7m.png" alt="image of an animal pad" /></div>
                            <div>
                                <h2 className="plansCategories">Eutanasia en clínica</h2>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardservicesText">
                                <ul>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Servicio de despedida personalizado</li>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Servicio de cremación o entierro digno</li>
                                </ul>
                            </Card.Text>
                            <Link className="button-plans" to="/professionals">Leer mas</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="services-col">
                    <Card style={{ width: '29rem' }} className="services-card">
                        <Card.Title className="servicesBody">
                            <div><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712595224/c57p3jotvw8kkrf8ck7m.png" alt="image of an animal pad" /></div>
                            <div>
                                <h2 className="plansCategories">Eutanasia a domicilio</h2>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardservicesText">
                                <ul>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cuidado paliativo previo a la eutanasia</li>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Plantación de árboles conmemorativos</li>
                                </ul>
                            </Card.Text>
                            <Link className="button-services" to="/professionals">Leer mas</Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>




            <Row className="psico-row">

                <Col md='6'>
                    <img className="psico-icon" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712742211/chvjfe0yo3odun7pcojv.png' alt="psico-icon" />
                </Col>
                <Col md='6' className='textPsico' >
                    <div>
                        <p><span className="rowTextPsico">Nunca estás solo en tu camino hacia la </span> <span className="rowTextPsico2">sanación emocional.✨</span></p>
                        <p>Si sientes que necesitas más apoyo emocional durante este proceso de despedida, te recomendamos visitar la página web de nuestros compañeros, Lara Aguerre y Fran Pazos, quienes han creado Mentalia.</p>
                        <div>
                            <Link className='mentalia-button' to="https://mentalia.netlify.app">Saber mas</Link>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* <p> <strong>MENTALIA</strong> es una red que conecta psicólogos con pacientes de manera online, brindando un espacio seguro y confidencial para explorar tus emociones <br /> y recibir el apoyo necesario durante este momento tan delicado. Puedes encontrar más información en su página web:</p>
                <p> Nunca estás solo en tu camino hacia la sanación emocional.✨</p>

                <br /> */}



        </div>
    )
}

export default EuthanasiaPage