import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"
import './../../Pages/ProfessionalsListPage/ProfessionalsListPage.css'



const ProfessionalsListPage = () => {

    return (
        <div>

            <h1 className="ProfessionalsListPage">Listado de veterinarios:</h1>

            <div className="ProfessionalsListPage">

                <ProfessionalList />

            </div>
        </div>

    )
}

export default ProfessionalsListPage