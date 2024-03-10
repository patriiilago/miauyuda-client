import './../../Pages/EuthanasiaPage/EuthanasiaPage.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import EuthImage from './../../images/despedida2.jpg'

const EuthanasiaPage = () => {

    return (
        <div className="EuthanasiaPage">
            <img className='ehthimage' src={EuthImage} alt="image of a cat in a landscape" />
            <Container>
                <Row>
                    <Col md='6'>
                        <h1 className='intro1'>Sentimos mucho que hayas tenido que llegar a esta página...🖤</h1>
                        <h2 className='intro2'>Sentimos mucho que hayas tenido que llegar a esta página...🖤</h2>

                        <p> Entendemos que el momento de despedirse de tu fiel compañero peludo es uno de los más difíciles que enfrentarás.
                            <br />En momentos como estos, la compasión y la empatía son fundamentales, y estamos aquí para acompañarte en este viaje emocional.</p>

                        <p> En nuestra práctica, entendemos el amor profundo que tienes por tu mascota. Sabemos que cada peludo amigo es único, con su propia personalidad y huella indeleble en tu corazón. <br />Es por eso que ofrecemos un servicio de eutanasia a domicilio, para que puedas despedirte de tu compañero en la comodidad y privacidad de tu hogar, rodeado de amor y recuerdos compartidos.</p>

                        <p> Nuestro equipo está compuesto por profesionales dedicados y comprensivos, que están aquí para brindarte apoyo en cada paso del proceso. <br />
                        </p>

                    </Col>
                    <Col md='6'>
                        <p>Desde la primera llamada hasta el último adiós, nos comprometemos a proporcionarte el respeto, la compasión y la atención que tanto tú como tu mascota merecen.
                            Somos conscientes de que esta decisión no es fácil, y queremos que sepas que estás tomando la mejor opción para aliviar el sufrimiento de tu amigo peludo.
                            Estamos aquí para responder a tus preguntas, escuchar tus preocupaciones y brindarte el consuelo que necesitas en este momento tan difícil.</p>
                        <p>  Permítenos acompañarte en este último acto de amor hacia tu mascota. <br /> En nuestra práctica, no solo ofrecemos un servicio, sino un hombro en el que apoyarte y un corazón que entiende tu dolor. <br /> Juntos, podemos honrar la vida de tu amigo peludo y despedirnos con dignidad y amor.</p>
                    </Col>
                    <Link className='info-button' to={"#"}>Pide Información</Link>
                    <p>Además, si sientes que necesitas más apoyo emocional durante este proceso de despedida, te recomendamos visitar la página web de nuestros compañeros, Lara Aguerre y Fran Pazos, quienes han creado <strong>MENTALIA</strong>. </p>
                    <p> <strong>MENTALIA</strong> es una red que conecta psicólogos con pacientes de manera online, brindando un espacio seguro y confidencial para explorar tus emociones <br /> y recibir el apoyo necesario durante este momento tan delicado. Puedes encontrar más información en su página web:</p>
                    <p> Nunca estás solo en tu camino hacia la sanación emocional.✨</p>
                    <Link className='mentalia-button' to={"#"}>👉🏽Mentalia</Link>
                    <br />
                </Row>
            </Container>
        </div>
    )
}

export default EuthanasiaPage