import { useState, useEffect } from "react"
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard"
import professionalServices from "../../services/professional.services"


const ProfessionalProfilePage = () => {


    const [professional, setProfesional] = useState([])


    useEffect(() => {
        loadProfessional()
    }, [])

    const loadProfessional = () => {
        professionalServices
            .getProfessional()
            .then(({ data }) => setProfesional(data))
            .catch(err => console.log(err))

    }


    return (


        <div className="ProfessionalProfilePage">
            <div className="Section">
                <h1 className="profileTitle">Datos de tu perfil:</h1>
                <ProfessionalCard {...professional} key={professional._id} />
            </div>
        </div>


    )
}

export default ProfessionalProfilePage