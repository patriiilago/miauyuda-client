import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"
import './../../Pages/ProfessionalsListPage/ProfessionalsListPage.css'



const ProfessionalsListPage = () => {

    return (
        <div className="backgroundColorPage">


            <h1 className='h1VetList'><span className="titleVetList">Listado de</span> <span className="titleVetList2">Veterinarios</span></h1>

            <div className="ProfessionalsListPage">

                <ProfessionalList />

            </div>
        </div>

    )
}

export default ProfessionalsListPage