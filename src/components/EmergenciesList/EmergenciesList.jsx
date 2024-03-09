import { useEffect, useState } from "react"
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard'
import ProfessionalServices from "../../services/professional.services"

const EmergenciesList = () => {
    const [professionals, setProfessionals] = useState([])

    useEffect(() => {
        loadProfessional()
    }, []);

    const loadProfessional = () => {
        ProfessionalServices.getAllProfessionals()
            .then(({ data }) => {
                const emergencyProfessionals = data.filter(professional => professional.emergencies)
                setProfessionals(emergencyProfessionals)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            {professionals.map(professional => (
                <ProfessionalCard {...professional} key={professional._id} />
            ))}
        </>
    )
}



export default EmergenciesList