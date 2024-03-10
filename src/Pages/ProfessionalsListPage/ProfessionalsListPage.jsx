import { Container } from "react-bootstrap"
import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"
import './../../Pages/ProfessionalsListPage/ProfessionalsListPage.css'



const ProfessionalsListPage = () => {

    return (
        <div>

            <h1 className="mb-5 mt-5">Listado de veterinarios:</h1>

            <div className="ProfessionalsListPage">

                <ProfessionalList />

            </div>
        </div>

    )
}

export default ProfessionalsListPage