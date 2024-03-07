import { Container } from "react-bootstrap"
import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"

const ProfessionalsListPage = () => {

    return (
        <Container>

            <div className="ProfessionalsListPage">

                <ProfessionalList />

            </div>

        </Container>
    )
}

export default ProfessionalsListPage