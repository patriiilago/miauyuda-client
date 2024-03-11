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
            .getProfesional()
            .then(({ data }) => setProfesional(data))
            .catch(err => console.log(err))

    }


    return (

        <>
            {clients.map(client => (
                <ProfessionalCard {...professional} key={professional._id} />
            ))}

        </>
    )
}

export default ProfessionalProfilePage