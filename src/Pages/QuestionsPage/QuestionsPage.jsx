import { Container, Accordion, Row, Button } from "react-bootstrap"
import './QuestionsPage.css'


const QuestionsPage = () => {


    return (

        <div className="QestionsPage">

            <h1 className="faq">Consultas <span className="faqTitle">Frecuentes</span></h1> <br />
            <p className="presentation">¡Descubre respuestas a tus preguntas sobre el cuidado de mascotas en MiauAyuda! Desde alimentación hasta comportamiento, <br />¡estamos aquí para ayudarte!</p>

            <Container className="accordionFaq">

                <div className="faqButtonsContainer">
                    <a href="#generales" className="faqButtons">Generales</a>
                    <a href="#perros" className="faqButtons">Perros</a>
                    <a href="#gatos" className="faqButtons">Gatos</a>
                    <a href="#exoticos" className="faqButtons">Exóticos</a>
                </div>




                <h2 className="questionsH2">Preguntas <span className="animalsTypes">Generales</span> </h2>
                <div id="generales">
                    <Row>
                        <section className="generalQuestion" />
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cuanta cantidad de pienso al día debe comer?</Accordion.Header>
                                <Accordion.Body>
                                    Al igual que las cantidades de comida varían de persona a persona, también lo hacen de mascota a mascota. La mayoría del alimento seco ó húmedo, indicado para mascotas, presentan una guía de alimentación en el paquete para ayudarte a calcular la cantidad  más adecuada. Sin embargo, éstas guías, son sólo un punto de partida. Es fundamental para tú mascota un control de peso y de condición física en su veterinario habitual y de esta manera ir ajustando la cantidad, según sea necesario.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion"  >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cuando es recomendable la visita al veterinario?</Accordion.Header>
                                <Accordion.Body>
                                    Está muy claro que cuando observamos que nuestra mascota esta enferma o le ocurre algo nos planteamos la visita al veterinario, pero a veces consideramos que lo que le ocurre se le pasará y pueden pasar varios días y el problema se puede complicar,  por tanto es importante considerar que la información que los profesionales nos brindan en las situaciones de salud a veces no se deben hacer esperar.


                                    Las visitas programadas de prevención y reconocimiento de salud, vacunas, desparasitación y chequeos supone anticiparnos a potenciales enfermedades o problemas, por lo que no deben retrasarse. Son los momentos en los que debemos informar de situaciones anormales, cambios y dudas a nuestro veterinario para que se puedan realizar valoraciones preventivas o recomendaciones al  respecto.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué producto antiparasitario externo es mejor?</Accordion.Header>
                                <Accordion.Body>
                                    No existe un método único para evitar pulgas, garrapatas, mosquitos y otro parásitos. Nuestra recomendación es utilizar el producto que mejor se adapte a la situación o necesidad particular de su mascota. Dependiendo del lugar donde viva (en el exterior o el interior), si convive con otros animales y los hábitos del animal influyen considerablemente en la elección.


                                    En el mercado hay una extensa gama de estos productos, muy eficaces y seguros. Siempre se recomienda el uso de uno o la combinación de varios para que la protección sea más efectiva.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Es necesario vacunar a mi perro o gato?</Accordion.Header>
                                <Accordion.Body>
                                    No solo es necesario y recomendable vacunar a nuestras mascotas, también es obligatorio por ley vacunar de la rabia. Pero sobre todo es fundamental con el objetivo de asegurar la prevención de enfermedades graves y a veces mortales que puedan padecer a lo largo de sus vidas.


                                    Los programas de vacunación son variados pero hay que instaurarlos de forma individualizada de acuerdo a la edad, estados sanitarios, situaciones ambientales, factores de riesgo, enfermedades endémicas etc… De esta manera conseguiremos una inmunidad adecuada en cada etapa de vida del animal. El comienzo de la vacunación está entre las seis semanas y los seis meses. Posteriormente es recomendable revacunar periódicamente de forma annual, bianual etc.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Es normal que mi mascota se rasque tanto?</Accordion.Header>
                                <Accordion.Body>
                                    La pérdida excesiva de pelo o que tu mascota se rasque compulsivamente son situaciones que generan molestia a los propietarios: el suelo sucio, el sonido del rascado en la noche, la inquietud y lesiones en la piel de la mascota etc. Si tu perro o gato se rasca con más frecuencia de lo normal, de manera compulsiva y aparecen lesiones en la piel, debemos conocer la causa que puede estar detrás de picor porque puede tener un origen anormal: parásitos, alergias, infecciones y otras enfermedades de distinta naturaleza.


                                    Nuestra mascotas mudan su pelo dos veces al año, en primavera y otoño normalmente. Es recomendable el cepillado con la mayor frecuencia posible en la época de cambio, con los utensilios adecuados dependiendo de si tiene capas largas o cortas. La salud y el aspecto del pelo esta íntimamente relacionado con la calidad de la alimentación que le proporcionamos a nuestras mascota.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué vacunas debo darle?</Accordion.Header>
                                <Accordion.Body>
                                    El profesional te indicará el calendario de vacunación para tu peludo de acuerdo a su edad y a la región donde viva. Las vacunas que más comúnmente se aplican son las que previenen moquillo, parvovirus parainfluenza, hepatitis y leptospirosis, en el caso de los perros. Y panleucopenia, rinotraqueitis, calicivirosis y leucemia, en el caso de los gatos. La vacuna antirrábica es tanto para canes como para mininos.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Como es un botiquín de primeros auxilios para mascotas?</Accordion.Header>
                                <Accordion.Body>
                                    Los animales pueden sufrir distintos tipos de accidentes ya sea dentro de la casa o en el exterior, o resultar heridos tras una pelea. Por eso en un botiquín no deberían faltar desinfectantes, gasas, vendas, inductores del vómito, medicamentos para la diarrea, analgésicos y antiinflamatorios. Ten muy en cuenta que todos estos productos deben estar aprobados para uso veterinario.Describa el artículo o responda a la pregunta para que los visitantes que estén interesados obtengan más información. Puede resaltar este texto con viñetas, cursiva, negrita o añadiendo enlaces.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">Mis mascotas no salen de casa. ¿Necesitan desparasitación?</Accordion.Header>
                                <Accordion.Body>
                                    La respuesta es sí, siempre existe el riesgo de exposición a pulgas y garrapatas, incluso con animales domésticos. Tú mismo puedes ser portador de pulgas ó garrapatas en tú ropa, ó en accesorios tales como: mantas, toallas, bolsas de la compra, etc…
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </div>





                <h2 className="questionsH2">Sobre tus <span className="animalsTypes">perros</span> </h2>
                <div id="perros">
                    <Row className="dogQuestions">


                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">Tengo un cachorro, ¿Lo puedo sacar a la calle?</Accordion.Header>
                                <Accordion.Body>
                                    La razón principal que los propietarios de cachorros deben conocer antes de sacarlos a la calle por primera vez, es que el animal se encuentre correctamente protegido frente a las enfermedades infecciosas más comunes de ésa etapa. Recuerda  que su sistema inmunitario aún se está desarrollando y por tanto es fundamental que acuerdes el programa antiparasitario y vacunal más adecuado para él/ella en tú veterinario de confianza.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Es la esterilización una buena idea?</Accordion.Header>
                                <Accordion.Body>
                                    La esterilización de nuestras mascotas siempre va suponer un beneficio en el que todos saldremos ganando. Una vez has decidido que no quieres a tu animal como reproductor, debes esterilizarlo.


                                    La esterilización es un acto quirúrgico serio, con el que  se pueden evitar enfermedades graves tales como tumores mamarios, infecciones uterinas ó estrés  por embarazo psicológico  en las hembras; tumores testiculares, de próstata ó trastornos graves de comportamiento en el caso de los machos.


                                    Esterilizando, también contribuyes eficazmente en el control de camadas no deseadas, frenando el grave problema de superpoblación y evitando el sufrimiento por abandono.


                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">Quiero hacer una dieta para mi Perro/Gato. ¿Qué debo tener en cuenta?</Accordion.Header>
                                <Accordion.Body>
                                    Una dieta equilibrada hecha en casa debe incluir  siempre estos 3 componentes fundamentales:  proteínas, carbohidratos y grasas. Busca asesoramiento con un experto veterinario en nutrición que formule la dieta más adecuada para tú animal. Su alimentación diaria es la parte más importante para su bienestar, y debe adecuarse a su edad, estilo de vida ó a cualquier problema de salud  que desarrolle.


                                    Al comenzar una dieta casera, siempre es buena idea agregar un suplemento vitamínico  para completar cualquier brecha adicional  en dicha dieta, mientras se encuentra el equilibrio adecuado. Trabaja en conjunto con tu veterinario de confianza que te puede ayudar en el control de su peso y de su salud en general.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Necesita mi Perro una limpieza de boca?</Accordion.Header>
                                <Accordion.Body>
                                    La enfermedad periodontal, es uno de los procesos más comunes en perros y gatos adultos. El mal aliento, es uno de los primeros signos de que puede estar padeciendo enfermedad dental.


                                    Sin un tratamiento adecuado, como una higiene bucal, podemos encontrar problemas como abscesos de raíz, caries, e incluso incomodidad al comer. Además, esto puede provocar daños en otros órganos internos. El papel del veterinario es fundamental para detectar el problema a tiempo. Él revisará la cantidad de sarro ó gingivitis presente y planteará una higiene bucal adecuada, siempre bajo anestesia general.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Por qué mi perro come hierba?</Accordion.Header>
                                <Accordion.Body>
                                    Una de las teorías es  por  malestar estomacal. Tú perro puede estar comiendo hierba para irritar su sistema digestivo y de ésta manera inducir el vómito. Si éste comportamiento ocurre con frecuencia, consulta con tú veterinario para asegurarte que no hay ningún problema que cause enfermedad.


                                    Además, debes tener cuidado con la hierba, especialmente en áreas donde haya ganado, ya que puede albergar huevos de parásitos y desencadenar un cuadro de vómitos y diarreas
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cuál es la raza mas adecuada para mí?</Accordion.Header>
                                <Accordion.Body>
                                    Pedigrí, Cruce ó Mestizo. Cachorro ó Adulto. Hembra ó Macho. Son muchas  las dudas que se nos plantean cuando decidimos ampliar la familia.


                                    Aunque siempre te vamos a recomendar la adopción por encima de la compra, es cierto que escoger un perro de raza nos aporta un grado de predictibilidad acerca del tamaño, longitud, pelaje incluso algunas dolencias que puede padecer. La raza de perro más adecuada a tu caso, dependerá principalmente de tu estilo de vida. La presencia de niños en casa, el grado de actividad diaria, si viajas con frecuencia,  si eres una persona tranquila ó nerviosa…son factores que van a influir en el proceso de selección. Tú veterinario más cercano será el asesor principal que puedes encontrar antes de tomar la decisión. A continuación, si decides comprar, busca con calma un criador de confianza, y asegúrate que cumpla con todas las condiciones de bienestar animal posibles.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cada cuanto tiempo es recomendable bañar a mi perro?</Accordion.Header>
                                <Accordion.Body>
                                    Es importante no bañar a tu mascota más de una vez al mes en situaciones normales. Bien es verdad, que hay situaciones especiales en la que la frecuencia pueda o deba ser mayor. Para ello, los productos de higiene deben ser adecuados puesto que hay algunos que producen determinadas alergias al animal, por lo que debemos vigilarlo si el baño se lo damos en casa.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué señales indican que mi peludo no está bien?</Accordion.Header>
                                <Accordion.Body>
                                    Pídele al profesional que te explique cuáles son los signos que debes tener en cuenta para realizar una consulta médica más o menos urgente. Por ejemplo: apatía, diarrea, zonas sin pelo, vómitos, falta de apetito, pérdida o aumento de peso, fiebre, bultos, comportamientos extraños (perseguir su cola, ladrar a sombras, etc.).
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </div>



                <h2 className="questionsH2">Sobre tus <span className="animalsTypes">gatos</span> </h2>
                <div id="gatos">
                    <Row className="catQuestions">
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">Tengo un gatito por primera vez. ¿Cómo le puedo enseñar a usar la arena?</Accordion.Header>
                                <Accordion.Body>
                                    Puedes mostrarle la caja primero para que se acostumbre a su presencia. Después prueba a colocarlo allí al despertar y después de comer y beber. La caja de arena debe estar siempre alejada del lugar donde come y en un lugar silencioso y tranquilo, a veces incluso cubierta total ó parcialmente.


                                    Recuerda que siempre debes seguir ésta fórmula en casa para prevenir enfermedades frecuentes de tracto urinario:  tantas cajas de arena, como gatos que haya en la casa +1 y debes mantenerla limpia diariamente.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cual es la mejor raza de gato para personas alérgicas?</Accordion.Header>
                                <Accordion.Body>
                                    No existe un gato hipoalergénico como tal. Es más, debes estar seguro a qué tienes alergia exactamente.

                                    Si el pelo es un problema, evitaría cualquier raza de pelo largo. En este sentido Sphynx, es la única raza de gato sin pelo.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">He encontrado un gato y quiero quedarmelo, ¿tengo que llevarlo al veterinario?</Accordion.Header>
                                <Accordion.Body>
                                    Si. Cuando recogemos de la calle o nos dan un gato es imprescindible independientemente de su origen acudir a la clínica a la mayor brevedad posible.


                                    Comprobamos mediante una revisión completa que el animal goza de buena salud. Se realiza un análisis de heces de cara a individualizar el protocolo de desparasitación del gato y comenzar a vacunarlo cuando corresponda.


                                    Es necesario descartar mediante un test enfermedades víricas como la Leucemia y la Inmunodeficiencia. Estas recomendaciones son más importantes si cabe si ya tenemos otro gato en casa y pretendemos introducir uno nuevo.


                                    Esta primera visita es también una oportunidad para resolver cuantas dudas surjan, en especial a «padres primerizos».


                                    Si acabas de adoptar un gatito ponte en contacto con nosotros, estaremos encantados de que nos lo presentes 🙂
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Necesita mi Gato una limpieza de boca?</Accordion.Header>
                                <Accordion.Body>
                                    La enfermedad periodontal, es uno de los procesos más comunes en perros y gatos adultos. El mal aliento, es uno de los primeros signos de que puede estar padeciendo enfermedad dental.


                                    Sin un tratamiento adecuado, como una higiene bucal, podemos encontrar problemas como abscesos de raíz, caries, e incluso incomodidad al comer. Además, esto puede provocar daños en otros órganos internos. El papel del veterinario es fundamental para detectar el problema a tiempo. Él revisará la cantidad de sarro ó gingivitis presente y planteará una higiene bucal adecuada, siempre bajo anestesia general.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">Mi gato araña el mobiliario ¿cómo puedo evitarlo?</Accordion.Header>
                                <Accordion.Body>
                                    Un gato no tiene por qué rascar donde no debe. La clave es educarlo correctamente y que tenga acceso a un rascador adecuado. No solo en cuanto a tamaño sino a localización del mismo, generalmente zonas de paso o cerca de donde rasca. Puedes cubrir temporalmente esas zonas con materiales desagradables a su tacto mientras se acostumbra a su rascador. Ejemplos de estos materiales pueden ser el papel de aluminio o la cinta adhesiva de doble cara.


                                    Existen también en el mercado diversos productos que pueden ayudar a lograr que el gato rasque donde debe. Te invitamos a que te pases por la clínica, nos cuentes tu problema y así podamos orientarte. Te ayudaremos a solucionar el problema y tus muebles, tu gato y tu nos lo agradeceréis!! 🙂
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué plantas pueden ser tóxicas para mi gato?</Accordion.Header>
                                <Accordion.Body>
                                    Los gatos tienen por costumbre mordisquear diversos vegetales. El problema es que existen multitud de plantas que son tóxicas para ellos. Unas producen alteraciones gastrointestinales como la Flor de Pascua. Otras como las Lileáceas son altamente tóxicas y pueden causarles la muerte por fallo renal.


                                    Si tienes plantas y gatos en casa, asegúrate que éstas no son tóxicas para ellos. Comprueba el listado de plantas tóxicas en internet. Te recomendamos que las busques por su nombre científico.


                                    Si sospechas que tu gato ha podido ingerir alguna planta tóxica ponte en contacto con nosotros de forma urgente.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué puedo hacer para que mi gato no engorde?</Accordion.Header>
                                <Accordion.Body>
                                    La obesidad felina como ocurre en las personas es una enfermedad en aumento con graves repercusiones para su salud. No se trata simplemente de un tema estético. La vida sedentaria, la alimentación sin control, los «extras», etc… son importantes factores de riesgo para la obesidad de nuestro gato.


                                    Cuando esterilizamos a un gato es necesario adaptar su alimentación y controlar la cantidad diaria que come. De esta forma evitamos que el animal coja peso.


                                    Si nuestro gato ya tiene sobrepeso o esta obeso no vale simplemente con alimentarlo con un pienso «light». Se hace necesario diseñar un plan de adelgazamiento adaptado a cada gato. Es imprescindible conocer su peso actual y su peso ideal. Se prescribe la dieta adecuada, la cantidad diaria de la misma y el ejercicio/juego del animal.


                                    Si tienes un gato con sobrepeso u obeso visítanos y estaremos encantados de asesorarte y ayudarte a que tu gato recupere la forma. De este modo lograrás que tenga una mejor calidad y esperanza de vida.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué puedo hacer si mi gato orina o defeca fuera de la bandeja?</Accordion.Header>
                                <Accordion.Body>
                                    Es posible que sea por un problema de aversión con la bandeja o el sustrato (arena).


                                    Sin embargo puede que no sea un problema con la bandeja/arena y el gato padezca algún tipo de patología. Esto es más probable si vemos que tiene dificultad al orinar, va más veces a la bandeja, pasa más tiempo en ella o detectamos sangre en su orina.


                                    En estos casos es altamente recomendable acudir a la clínica para investigar la patología que padece el animal. Así evitamos que entre otras consecuencias el gato acabe obstruyéndose y se complique el problema.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </div>




                <h2 className="questionsH2">Sobre tus <span className="animalsTypes">animales exóticos</span> </h2>
                <div id="exoticos">
                    <Row className="exoticQuestions">
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cómo saber si mi pájaro está enfermo?</Accordion.Header>
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
                        </Accordion>
                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Cómo saber si mi hurón está enfermo?</Accordion.Header>
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
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Por qué mi pez nada de lado?</Accordion.Header>
                                <Accordion.Body>
                                    Una de las principales razones que explican por qué un pez nada de lado, tiene que ver con una posible enfermedad de la vejiga natatoria. Esta estructura es la que se encarga de que el pez pueda mantenerse a flote. Si esta no se encuentra bien, el pez no podrá controlar su natación, hasta el punto de que nadará de lado.


                                    Los problemas de la vejiga natatoria pueden venir derivados de la falta de cuidados en la pecera. Debes prestar especial atención al hecho de tener un filtro de agua adecuado y a la limpieza regular del agua. De lo contrario, el hábitat de los peces no será el más idóneo y tendrán problemas para sobrevivir.


                                    Pero también es un problema que se puede presentar motivado por una infección vírica o una bacteria, cambios bruscos en la temperatura del agua, una mala alimentación, etc. Afecciones que se harán más patentes en función de la especie del pez.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Está bien dar a mi tortuga comida para gatos o perros?</Accordion.Header>
                                <Accordion.Body>
                                    No. Las tortugas son herbívoros. Son vegetarianos y no comen carne o productos de origen animal. La comida para perros y gatos está hecha para carnívoros (carnívoros). Que los alimentos no contienen las cantidades adecuadas de grasa, fibra, carbohidratos, proteínas, vitaminas y minerales para las tortugas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion className="faqAccordion" >
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Que pájaros exóticos puedes tener en casa?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><span>Diamante mandarín:</span> Este lorito apenas supera los 12 centímetros. Su pico y sus patas son rojos y sus plumas claras. Son una de las aves exóticas más conocidas.</li>
                                        <li><span>Cacatúa:</span> Cualquiera de sus tipos está permitido. Las puedes encontrar de numerosos colores y pueden vivir hasta 30 años. Además, son muy inteligentes y puedes enseñarles hablar.</li>
                                        <li><span>Agapornis:</span> Uno de los loritos más conocidos. Es mucho mejor que vivan en pareja y son fácilmente domesticables. Su brillante colorido es no de sus grandes atractivos.</li>
                                        <li><span>Periquitos:</span> De las más comunes en los hogares. Su canto no deja indiferente a nadie, sin duda te alegrará el día.</li>
                                        <li><span>Loros:</span> El pájaro exótico más conocido de todos y uno de los más habituales para tener como mascota. Es el animal exótico que se puede tener como mascota más longeva, hasta 80 años.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué debo alimentar a mi tortuga?</Accordion.Header>
                                <Accordion.Body>
                                    Darle de comer un buen alimento de la tortuga, y un montón de hierbas y plantas nativas. No hay lechuga ni frutas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion">
                                <Accordion.Header className="textHeaderAccordion">¿Qué acuario necesita un goldfish para vivir?</Accordion.Header>
                                <Accordion.Body>
                                    Cada ejemplar de esta especie requiere como mínimo unos 40 litros de agua para satisfacer todas sus necesidades. Con un acuario de un tamaño de 50 cm de ancho x 40 de alto y 30 cm de fondo será suficiente para tener un único pez carpa. Intenta elegir el acuario de tamaño grande más compatible con tu espacio disponible, siempre teniendo en cuenta las medidas mínimas que requiere un solo ejemplar.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="faqAccordion">
                            <Accordion.Item eventKey="0" className="itemAccordion" style={{ marginBottom: '30px' }}>
                                <Accordion.Header className="textHeaderAccordion">¿Qué puedo hacer con un pájaro herido?</Accordion.Header>
                                <Accordion.Body>
                                    Cuando te encuentras a un pájaro herido, es muy común pensar que el animal necesita de tus cuidados y de tu protección para salir adelante. Ahora, hay que destacar que no siempre es así. De este modo, podrías poner en peligro la vida de este ser si lo mueves del lugar en el que te lo hayas encontrado. Por ello, lo primero que debes hacer es ponerte en contacto con un centro de recuperación de fauna silvestre. En el caso de que no conozcas ninguno, será tan sencillo como llamar al SEPRONA a través del número 112.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </div>
            </Container >
        </div >

    )
}


export default QuestionsPage