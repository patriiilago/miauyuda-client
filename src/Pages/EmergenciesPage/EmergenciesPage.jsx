import { Container } from "react-bootstrap"
import EmergenciesList from "../../components/EmergenciesList/EmergenciesList"
import './../../Pages/EmergenciesPage/EmergenciesPage.css'

const EmergenciesPage = () => {



    return (
        <div className="backgroundColorEmergenciesPage">
            <Container>

                <h1 className='h1Emergencies'><span className="titleEmergencies">Veterinarios de</span> <span className="titleEmergencies2">urgencias</span></h1>

                <EmergenciesList />

            </Container>
        </div >

    )
}

export default EmergenciesPage