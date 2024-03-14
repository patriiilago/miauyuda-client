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

            <Row >

                <Col md={6}>
                    <h1 className='profileTitle'> Cliente:</h1>
                    <ClientCardDetails {...client} />
                </Col>
                <Col md={6}>
                    <h1 className="profileTitle">Mascota:</h1>
                    <PetCard {...client.pet} />
                </Col>

            </Row>
        </Container >

    )
}
export default ClientDetailsPage