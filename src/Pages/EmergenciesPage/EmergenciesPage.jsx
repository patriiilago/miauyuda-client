import { Container } from "react-bootstrap"
import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"
import EmergenciesList from "../../components/EmergenciesList/EmergenciesList"
import './../../Pages/EmergenciesPage/EmergenciesPage.css'

const EmergenciesPage = () => {



    return (

        <Container>
            <div className="EmergenciesPage">

                <h1>Veterinarios de Urgencias:</h1>

                <EmergenciesList />

            </div>
        </Container>
    )
}

export default EmergenciesPage