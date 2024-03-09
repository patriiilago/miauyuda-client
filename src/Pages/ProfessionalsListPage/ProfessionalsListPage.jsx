import { Container } from "react-bootstrap"
import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"



const ProfessionalsListPage = () => {

    return (
        <Container>
            <h1>Listado de veterinarios:</h1>

            <div className="ProfessionalsListPage">

                <ProfessionalList />

            </div>

        </Container>
    )
}

export default ProfessionalsListPage