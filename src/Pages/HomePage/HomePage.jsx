import { Container, Row, Col, Card, Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"
import './HomePage.css'

const HomePage = () => {

    return (
        <div className="HomePage">
            <div className="imgContainer">
                <img className="picHomePage" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712570812/vwtgpy48uckirvhzkhnc.png' alt="homePage pic" />
            </div>
            <div className="introParagraph1">
                <p><span>Atención <br /> Veterinaria <span className="introParagraphstrong">de</span> </span><br /> <span className="introParagraphstrong" >Emergencia 24/7</span> </p>
                <p className="introParagraph2">Conectamos dueños de mascotas con veterinarios expertos en <br /> emergencias para brindarte tranquilidad cuando más la necesitas.</p>
            </div>

            <div className="textOfLove">
                <h2><span className="sharedlovetxt1">Compartimos tu </span><span className="sharedlovetxt2">amor por ellos</span></h2>
                <p className="sharedlovetxt3">Estos son nuestros valores con los clientes y los peluditos</p>
            </div>
            <Row className="RowOfLove">
                <Col md={3}>
                    <div className="tags">
                        <div>
                            <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712575091/fv2ptt3aexllvly27l1x.png' alt="icon service" className="itemsOfLove" />

                        </div>
                        <p><strong className="headertag">Servicio</strong><br />
                            Intentamos siempre dar un servicio personalizado y de confianza para vosotros y vuestros peques. </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="tags">
                        <div>
                            <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712575091/fv2ptt3aexllvly27l1x.png' alt="icon service" className="itemsOfLove" />

                        </div>
                        <p><strong className="headertag">Amor incondicional</strong><br />
                            El amor para los animales es lo que une a todos nosotros en la comunidad de Miauyuda. </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="tags">
                        <div>
                            <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712575091/fv2ptt3aexllvly27l1x.png' alt="icon service" className="itemsOfLove" />

                        </div>
                        <p><strong className="headertag">Centrado en el cliente</strong><br />
                            Pendientes de cualquier problema, para que vosotros y vuestras mascotas os sintáis en vuestra casa. </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="tags">
                        <div>
                            <img src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712575091/fv2ptt3aexllvly27l1x.png' alt="icon service" className="itemsOfLove" />

                        </div>
                        <p><strong className="headertag">Innovación</strong><br />
                            Siempre en búsqueda de veterinarios y voluntarios que puedan dar el mejor trato a tus peluditos. </p>
                    </div>
                </Col>
            </Row>

            <Row className="pug-row">
                <Col md='6' className="dogQuestions">
                    <p><span className="sharedlovetxt1">Sobre tus </span> <span className="sharedlovetxt2">perros</span></p>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Tengo un cachorro, ¿Lo puedo sacar a la calle?</Accordion.Header>
                                <Accordion.Body>
                                    La razón principal que los propietarios de cachorros deben conocer antes de sacarlos a la calle por primera vez, es que el animal se encuentre correctamente protegido frente a las enfermedades infecciosas más comunes de ésa etapa. Recuerda que su sistema inmunitario aún se está desarrollando y por tanto es fundamental que acuerdes el programa antiparasitario y vacunal más adecuado para él/ella en tú veterinario de confianza.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>¿Es la esterilización una buena idea?</Accordion.Header>
                                <Accordion.Body>
                                    La esterilización de nuestras mascotas siempre va suponer un beneficio en el que todos saldremos ganando. Una vez has decidido que no quieres a tu animal como reproductor, debes esterilizarlo. La esterilización es un acto quirúrgico serio, con el que se pueden evitar enfermedades graves tales como tumores mamarios, infecciones uterinas ó estrés por embarazo psicológico en las hembras; tumores testiculares, de próstata ó trastornos graves de comportamiento en el caso de los machos.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>¿Necesita mi perro una limpieza de boca?</Accordion.Header>
                                <Accordion.Body>
                                    La enfermedad periodontal, es uno de los procesos más comunes en perros y gatos adultos. El mal aliento, es uno de los primeros signos de que puede estar padeciendo enfermedad dental. Sin un tratamiento adecuado, podemos encontrar problemas como abscesos de raíz, caries, e incluso incomodidad al comer. El papel del veterinario es fundamental para detectar el problema a tiempo. Él revisará la cantidad de sarro ó gingivitis presente y planteará una higiene bucal adecuada, siempre bajo anestesia general.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>¿Cuál es la raza mas adecuada para mí?</Accordion.Header>
                                <Accordion.Body>
                                    Pedigrí, Cruce ó Mestizo. Cachorro ó Adulto. Hembra ó Macho. Son muchas las dudas que se nos plantean. Aunque siempre te vamos a recomendar la adopción por encima de la compra, es cierto que escoger un perro de raza nos aporta un grado de predictibilidad acerca del tamaño, longitud, pelaje incluso algunas dolencias que puede padecer. La raza de perro más adecuada a tu caso, dependerá principalmente de tu estilo de vida. Tú veterinario más cercano será el asesor principal que puedes encontrar antes de tomar la decisión.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Link> <p className="button-faqs">Saber mas</p></Link>
                    </div>
                </Col>
                <Col md='6'>
                    <img className="pug-img" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712579100/vcpbfa4crh0klorzqdsx.png' alt="dog-photo" />
                </Col>

            </Row>

            <Row className="cat-row">

                <Col md='6'>
                    <img className="cat-img" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712579117/mtwbjxihqcnabgc4znyu.png' alt="cat-photo" />
                </Col>
                <Col md='6' className="catQquestions">
                    <p><span className="sharedlovetxt1">Sobre tus </span> <span className="sharedlovetxt2">gatos</span></p>
                    <div>
                        <Accordion className="catAccordion" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Tengo un cachorro, ¿Lo puedo sacar a la calle?</Accordion.Header>
                                <Accordion.Body>
                                    La razón principal que los propietarios de cachorros deben conocer antes de sacarlos a la calle por primera vez, es que el animal se encuentre correctamente protegido frente a las enfermedades infecciosas más comunes de ésa etapa. Recuerda que su sistema inmunitario aún se está desarrollando y por tanto es fundamental que acuerdes el programa antiparasitario y vacunal más adecuado para él/ella en tú veterinario de confianza.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>¿Es la esterilización una buena idea?</Accordion.Header>
                                <Accordion.Body>
                                    La esterilización de nuestras mascotas siempre va suponer un beneficio en el que todos saldremos ganando. Una vez has decidido que no quieres a tu animal como reproductor, debes esterilizarlo. La esterilización es un acto quirúrgico serio, con el que se pueden evitar enfermedades graves tales como tumores mamarios, infecciones uterinas ó estrés por embarazo psicológico en las hembras; tumores testiculares, de próstata ó trastornos graves de comportamiento en el caso de los machos.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>¿Necesita mi perro una limpieza de boca?</Accordion.Header>
                                <Accordion.Body>
                                    La enfermedad periodontal, es uno de los procesos más comunes en perros y gatos adultos. El mal aliento, es uno de los primeros signos de que puede estar padeciendo enfermedad dental. Sin un tratamiento adecuado, podemos encontrar problemas como abscesos de raíz, caries, e incluso incomodidad al comer. El papel del veterinario es fundamental para detectar el problema a tiempo. Él revisará la cantidad de sarro ó gingivitis presente y planteará una higiene bucal adecuada, siempre bajo anestesia general.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>¿Cuál es la raza mas adecuada para mí?</Accordion.Header>
                                <Accordion.Body>
                                    Pedigrí, Cruce ó Mestizo. Cachorro ó Adulto. Hembra ó Macho. Son muchas las dudas que se nos plantean. Aunque siempre te vamos a recomendar la adopción por encima de la compra, es cierto que escoger un perro de raza nos aporta un grado de predictibilidad acerca del tamaño, longitud, pelaje incluso algunas dolencias que puede padecer. La raza de perro más adecuada a tu caso, dependerá principalmente de tu estilo de vida. Tú veterinario más cercano será el asesor principal que puedes encontrar antes de tomar la decisión.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Link> <p className="button-faqs">Saber mas</p></Link>
                    </div>
                </Col>
            </Row>

            <Row className="exotic-row">
                <Col md='6' className="exoticQuestions">
                    <p><span className="sharedlovetxt1">Sobre tus </span> <span className="sharedlovetxt2">animales exóticos</span></p>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>¿Que puedo hacer con un pájaro herido?</Accordion.Header>
                                <Accordion.Body>
                                    Cuando te encuentras a un pájaro herido, es muy común pensar que el animal necesita de tus cuidados y de tu protección para salir adelante. Ahora, hay que destacar que no siempre es así. De este modo, podrías poner en peligro la vida de este ser si lo mueves del lugar en el que te lo hayas encontrado. Por ello, lo primero que debes hacer es ponerte en contacto con un centro de recuperación de fauna silvestre. En el caso de que no conozcas ninguno, será tan sencillo como llamar al SEPRONA a través del número 112.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>¿Que acuario necesita un goldfish para vivir?</Accordion.Header>
                                <Accordion.Body>
                                    Cada ejemplar de esta especie requiere como mínimo unos 40 litros de agua para satisfacer todas sus necesidades. Con un acuario de un tamaño de 50 cm de ancho x 40 de alto y 30 cm de fondo será suficiente para tener un único pez carpa. Intenta elegir el acuario de tamaño grande más compatible con tu espacio disponible, siempre teniendo en cuenta las medidas mínimas que requiere un solo ejemplar.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>¿como saber si mi pájaro está enfermo?</Accordion.Header>
                                <Accordion.Body>
                                    La gran mayoría de especies exóticas tienen un metabolismo basal más acelerado del que estamos acostumbrados respecto a perros o gatos. Las aves son uno de esos grupos. Cuando un pájaro está enfermo hay ciertas características que son más fáciles de ver y que, en todo caso, siempre van a necesitar una atención inmediata por el veterinario especialista en Gwana Vet:

                                    <ul>
                                        <li>Lleva tiempo sin comer o selecciona la comida</li>
                                        <li>No se mueve de algún lugar de su jaula, ya sea en una percha o en el suelo</li>
                                        <li>Ahueca las plumas en postura “embolada” o tiene temblores</li>
                                        <li>Ha dejado de cantar o emitir sus sonidos habituales</li>
                                        <li>Respira de forma agitada o con el pico abierto</li>
                                        <li>Se mueve siempre con el mismo patrón repetitivo por la jaula</li>
                                        <li>Se pica las plumas o las patas con demasiada frecuencia</li>
                                        <li>Las heces son más blandas o han cambiado de color</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>¿Cómo saber si mi hurón está enfermo?</Accordion.Header>
                                <Accordion.Body>
                                    Este simpático y activo animal muestra los síntomas de enfermedad de manera muy aguda, por lo que deberás llamar o presentarte en el veterinario especialista cuanto antes. Los síntomas más fácilmente reconocibles son los siguientes:
                                    <ul>
                                        <li>Está inactivo y muy apático, apenas quiere salir de su escondite o de la hamaca</li>
                                        <li>Se queja cuando lo coges</li>
                                        <li>Arrastra la parte posterior del cuerpo al caminar</li>
                                        <li>No está comiendo</li>
                                        <li>Le cuesta defecar o sus heces son blandas</li>
                                        <li>Se rasca el cuerpo más de lo habitual</li>
                                        <li>Tiene náuseas, hace como que va a vomitar</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Link> <p className="button-faqs">Saber mas</p></Link>
                    </div>
                </Col>
                <Col md='6'>
                    <img className="exotic-img" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712579100/hcisbmbf3buvqv8tzeai.png' alt="exotic-animal-photo" />
                </Col>

            </Row>
            <div className="plansText">
                <h2><span className="sharedlovetxt1">Planes económicos </span><span className="sharedlovetxt2">para tus peluditos</span></h2>
                <p className="sharedlovetxt3">En miauyuda ofrecemos planes de seguros personalizados para mascotas de todas las edades, <br /> garantizando atención médica adecuada y asequible para cachorros, adultos y mascotas mayores.</p>
            </div>
            <Row className="plans">
                <Col md={4} className="puppies-col">
                    <Card style={{ width: '25rem' }} className="plans-card">
                        <Card.Title className="cardBody">
                            <div><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712595224/c57p3jotvw8kkrf8ck7m.png" alt="image of an animal pad" /></div>
                            <div>
                                <h2 className="plansCategories">Cachorros</h2>
                                <p>seguro para los mas peques</p>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardText">
                                <h3>179 € / 290 €</h3>
                                <ul>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de atención veterinaria básica</li>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de emergencias y accidentes</li>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de cuidados especializados</li>
                                </ul>
                            </Card.Text>
                            <Link to="/questions" className="button-plans">Leer mas</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="adults-col">
                    <Card style={{ width: '25rem' }} className="plans-card">
                        <Card.Title className="cardBody">
                            <div><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712595224/c57p3jotvw8kkrf8ck7m.png" alt="image of an animal pad" /></div>
                            <div>
                                <h2 className="plansCategories">Adultos</h2>
                                <p>El seguro para los <br />peludos de la casa</p>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardText">
                                <h3>210 € / 310 €</h3>
                                <ul>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de enfermedades crónicas</li>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de exámenes diagnósticos</li>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de cuidados preventivos avanzados</li>
                                </ul>
                            </Card.Text>
                            <Link to="/questions" className="button-plans">Leer mas</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="senior-col">
                    <Card style={{ width: '25rem' }} className="plans-card">
                        <Card.Title className="cardBody">
                            <div><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712595224/c57p3jotvw8kkrf8ck7m.png" alt="image of an animal pad" /></div>
                            <div>
                                <h2 className="plansCategories">Senior</h2>
                                <p>El seguro para los abueletes</p>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardText">
                                <h3>300 € / 410 €</h3>
                                <ul>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de medicamentos y terapias crónicas</li>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de exámenes de salud geriátricos</li>
                                    <li><img className="checkImg" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cobertura de cuidados paliativos y de final de vida</li>
                                </ul>
                            </Card.Text>
                            <Link to="/questions" className="button-plans">Leer mas</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div >
    )
}

export default HomePage