import { useParams } from 'react-router-dom'
import PetCard from '../../components/PetCard/PetCard'
import ClientCardDetails from '../../components/ClientCardDetails/ClientCardDetails'
import { Container, Row, Col } from 'react-bootstrap'
import clientServices from '../../services/client.services'
import { useState, useEffect } from 'react'
import './../../Pages/ClientDetailsPage/ClientDetailsPage.css'

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
        <div className='clientDetailsPage'>
            <Container>
                <ClientCardDetails {...client} />
                <PetCard {...client.pet} />

            </Container >
        </div>
    )
}
export default ClientDetailsPage