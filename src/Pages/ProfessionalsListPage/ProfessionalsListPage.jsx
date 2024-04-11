import ProfessionalList from "../../components/ProfessionalsList/ProfessionalsList"
import './../../Pages/ProfessionalsListPage/ProfessionalsListPage.css'



const ProfessionalsListPage = () => {

    return (
        <div>


            <h1 className='h1AboutUs'><span className="titleAboutUs">Listado de</span> <span className="titleAboutUs2">Veterinarios</span></h1>

            <div className="ProfessionalsListPage">

                <ProfessionalList />

            </div>
        </div>

    )
}

export default ProfessionalsListPage