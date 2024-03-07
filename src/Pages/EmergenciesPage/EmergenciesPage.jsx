import { Container } from "react-bootstrap"

const EmergenciesPage = () => {



    return (

        <Container>
            <div className="EmergenciesPage">

                <h1>Veterinarios de Urgencias</h1>

                <ProfessionalList />

            </div>
        </Container>
    )
}

export default EmergenciesPage