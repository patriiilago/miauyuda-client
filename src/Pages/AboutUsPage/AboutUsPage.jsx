import './../../Pages/AboutUsPage/AboutUsPage.css'
import { Row, Col } from "react-bootstrap"

function AboutUsPage() {
    return (
        <div className='aboutUs'>
            <div className='presentationAboutUs'>
                <h1 className='h1AboutUs'><span className="titleAboutUs">Conoce el</span> <span className="titleAboutUs2">proyecto</span></h1>
                <p className='pAboutUs' >
                    El proyecto Miauyuda® surgió de nuestra experiencia personal y nuestra pasión compartida por los animales. Los tres nos conocimos mientras estudiábamos desarrollo web en Ironhack y decidimos unir fuerzas para crear esta plataforma después de la pérdida de Turka, la gatita de Teresa, en diciembre de 2023. </p>
                <p className='pAboutUs' >Al ver la necesidad en el mercado y comprender la importancia de brindar acceso rápido a la atención veterinaria fuera del horario habitual, nos embarcamos en este proyecto juntos. Nuestro objetivo era ofrecer una solución que ayudara a otras mascotas y a sus dueños en situaciones similares a las que enfrentamos.</p>
                <p className='pAboutUs' >Con "Miauyuda", esperamos proporcionar una plataforma fácil de usar que permita a los dueños de mascotas conectarse con veterinarios cualificados en cualquier momento y lugar, garantizando así una atención médica rápida y conveniente para las mascotas que la necesiten. </p>
                <p className='pAboutUs' >Sigue leyendo y conoce más en profundidad a todos los miembros del <strong>equipo</strong>...</p>
            </div>


            <div className="aboutUsButtonsContainer">
                <a href="#oscar" className="aboutButton"><strong>Óscar</strong></a>
                <a href="#teresa" className="aboutButton"><strong>Teresa</strong> </a>
                <a href="#patri" className="aboutButton"><strong>Patri</strong> </a>
                <a href="#turka" className="aboutButton"><strong>Turka</strong> </a>
            </div>

            <Row className='aboutUsRow background-green'>
                <Col className="profileDetails">
                    <section id="oscar" />
                    <span className="detailsTitle">Óscar</span> <span className="detailsTitle2">Gómez</span>
                    <div className='text-profile-container'>
                        <h5 className='titlesAbout'>¿Quién es?</h5>
                        <p className='oscarText'>Óscar Gómez Díez es un desarrollador Full Stack con una sólida experiencia previa como fotógrafo de comercio electrónico, lo que le proporciona una valiosa perspectiva sobre la estética en el mundo digital.
                            Sus habilidades técnicas abarcan tecnologías como React, JavaScript, Node.js, MongoDB, Bootstrap, así como herramientas de diseño de la suite Adobe.</p>
                        <p className='oscarText'> Destaca por su capacidad para trabajar en equipo, liderar proyectos, su creatividad y su rápida adaptación a nuevas tecnologías. Además, su formación en fotografía ha cultivado habilidades creativas y de resolución de problemas que complementan su enfoque multidisciplinario.
                            Apasionado por el cine, la música y los juegos de mesa, Óscar encuentra inspiración en estos campos para su trabajo en desarrollo de software.</p>

                        <h5 className='titlesAbout'>¿Dónde contactar con él?</h5>
                        <p>
                            <img
                                className='linkedinIcon'
                                src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712750050/rdzbbvzz8znbjqyfzjxm.png"
                                alt="linkedin-icon" /> {" "}
                            <a
                                className='linkClass'
                                href="https://www.linkedin.com/in/oscar-gomez-diez/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Perfil de LinkedIn
                            </a>
                        </p>
                        <p>
                            <img
                                className='githubIcon'
                                src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712749492/ju2dtdtwesh0oiqhrc6n.png"
                                alt="gitHub-icon" /> {" "}
                            <a
                                className='linkClass'
                                href="https://github.com/OscarDev83"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repositorio GitHub
                            </a>
                        </p>
                    </div>
                </Col>
                <Col className="profileDetailsImage">
                    <img className="profileImg"
                        src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712766663/jizhd962zxg8di7lnc62.jpg'
                        alt="oscar-photo" />
                </Col>
            </Row>


            <Row className='aboutUsRow'>
                <Col className="profileDetailsImage">
                    <section id="teresa" />
                    <img className="profileImg"
                        src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712766623/ecsk7qvdbup6gdr5qwvi.jpg'
                        alt="teresa-photo" />
                </Col>
                <Col className="profileDetails">
                    <p><span className="detailsTitle">Teresa</span> <span className="detailsTitle2">Arranz</span></p>
                    <div className='text-profile-container'>
                        <h5 className='titlesAbout'>¿Quién es?</h5>
                        <p className='tereText'>Teresa es una desarrolladora Full Stack que recientemente completó un bootcamp intensivo en desarrollo web en Ironhack. Antes de su transición al campo de la tecnología, Teresa tenía más de 10 años de experiencia en recursos humanos, donde gestionó todo el proceso laboral para cientos de trabajadores en diferentes sectores y convenios colectivos.</p>
                        <p className='tereText'> La combinación de su experiencia previa en recursos humanos y su reciente formación en desarrollo web le brinda a Teresa una perspectiva única y valiosa en el mundo tecnológico. Está preparada para enfrentar los desafíos del desarrollo web con un enfoque orientado a resolver problemas y agregar valor a través de soluciones innovadoras. Su determinación, habilidades de adaptación y pasión por el aprendizaje continuo la hacen una adición invaluable a cualquier equipo de desarrollo.

                        </p>
                        <h5 className='titlesAbout'>¿Dónde contactar con ella?</h5>

                        <p>
                            <img
                                className='linkedinIcon'
                                src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712750050/rdzbbvzz8znbjqyfzjxm.png"
                                alt="linkedin-icon" /> {" "}
                            <a
                                className='linkClass'
                                href="https://www.linkedin.com/in/teresa-arranz-carrasco/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Perfil de LinkedIn
                            </a>
                        </p>
                        <p>
                            <img
                                className='githubIcon'
                                src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712749492/ju2dtdtwesh0oiqhrc6n.png"
                                alt="gitHub-icon" /> {" "}

                            <a
                                className='linkClass'
                                href="https://github.com/Tere1102"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repositorio GitHub
                            </a>
                        </p>

                    </div>
                </Col>
            </Row>


            <Row className='aboutUsRow background-green'>
                <Col className="profileDetails">
                    <section id="patri" />
                    <span className="detailsTitle">Patri</span> <span className="detailsTitle2">Lago</span>
                    <div className='text-profile-container'>
                        <h5 className='titlesAbout'>¿Quién es?</h5>
                        <p className='patriText'>Patri Lago es una desarrolladora Full Stack con un trasfondo en el sector de ventas, lo que le brinda una perspectiva única en el mundo del desarrollo web. Su experiencia previa en ventas y gestión de inventario le ha permitido perfeccionar habilidades en resolución de problemas, organización de proyectos y toma de decisiones estratégicas.  </p>
                        <p className='patriText'>La combinación de su experiencia en ventas y su reciente incursión en el desarrollo web la convierten en una adición valiosa a cualquier equipo. Está preparada para enfrentar los desafíos del desarrollo web con un enfoque orientado a la resolución de problemas y la innovación. <br /> Su dedicación, adaptabilidad y curiosidad constante la destacan como un activo fundamental en cualquier proyecto de desarrollo tecnológico.</p>

                        <h5 className='titlesAbout'>¿Dónde contactar con ella?</h5>

                        <p>
                            <img
                                className='linkedinIcon'
                                src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712750050/rdzbbvzz8znbjqyfzjxm.png"
                                alt="linkedin-icon" /> {" "}
                            <a
                                className='linkClass'
                                href="https://www.linkedin.com/in/patri-lago/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Perfil de LinkedIn
                            </a>
                        </p>
                        <p> <img
                            className='githubIcon'
                            src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712749492/ju2dtdtwesh0oiqhrc6n.png"
                            alt="gitHub-icon" /> {" "}
                            <a
                                className='linkClass'
                                href="https://github.com/patriiilago"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repositorio GitHub
                            </a>
                        </p>

                    </div>
                </Col>
                <Col className="profileDetailsImage">
                    <img className="profileImg"
                        src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712766905/qihc3jimoscunlwbrmqo.jpg'
                        alt="patri-photo" />
                </Col>
            </Row>

            <Row className='aboutUsRow'>
                <Col className="profileDetailsImage">
                    <img className="profileImg"
                        src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712766938/kk3738h5w7hzh6p1udj0.jpg'
                        alt="turka-photo" />
                </Col>
                <Col className="profileDetails">
                    <section id="turka" />
                    <p><span className="detailsTitle">Turka</span> <span className="detailsTitle2">Arranz</span></p>
                    <div className='text-profile-container'>
                        <h5 className='titlesAbout'>¿Quién es?</h5>
                        <p className='turkaText'>Turka es el motivo principal de este proyecto.
                            Tras 14 años de ronroneos tuvo que irse al arcoíris en diciembre de 2023, no sin antes enseñarnos la necesidad de crear una plataforma para que todas las mascotas del mundo reciban tanto amor como ellos nos regalan cada día.</p>
                        <p className='turkaText'> Turka hoy estará ronroneando feliz al comprobar que, desde ahora, todos tendrán la oportunidad de ser cuidados como lo que son, un miembro más en nuestras familias.</p>
                        <h5 className='titlesAbout'>¿Dónde contactar con ella?</h5>
                        <p>
                            <img className="arcoirisPhoto"
                                src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712750819/pbmpwpk3t7oc2oigp2ff.png'
                                alt="arcoiris-photo" />
                            <a className='linkClass' href="#">en el arcoíris <img className="arcoirisPhoto"
                                src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712750819/pbmpwpk3t7oc2oigp2ff.png'
                                alt="arcoiris-photo" /> </a></p>
                    </div>
                </Col>
            </Row>


            <Col md='12' className="footerAboutUs background-green">
                <div>
                    <p className='footerAboutUsText'>🖤 Miauyuda® App - Una dosis de amor para nuestros peludos 🖤</p>
                </div>
            </Col >
        </div >
    )
}
export default AboutUsPage;


