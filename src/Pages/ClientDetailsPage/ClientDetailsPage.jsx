import { useParams } from 'react-router-dom'
import PetCard from '../../components/PetCard/PetCard'
import ClientCardDetails from '../../components/ClientCardDetails/ClientCardDetails'
import { Container, Row, Col } from 'react-bootstrap'
import clientServices from '../../services/client.services'
import { useState, useEffect } from 'react'

const ClientDetailsPage = () => {

    const [client, setClient] = useState([])

    useEffect(() => loadClient(), [])

    const { clientId } = useParams()


    const loadClient = () => {
        clientServices
            .getClient(clientId)
            .then(({ data }) => setClient(data))
            .catch(err => console.log(err))
    }


    return (

        <Container>
            <h1> {client.firstName}</h1>

            <Row >

                <Col md={{ span: 6 }}>
                    <ClientCardDetails {...client} />
                </Col>
                <Col md={4}>
                    <h1 className="profileTitle">Datos de tu mascota:</h1>
                    <PetCard {...client.pet} />
                </Col>

            </Row>
        </Container >

    )
}
export default ClientDetailsPage