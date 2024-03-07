import { useEffect, useState } from "react"
import axios from 'axios'
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard'
import ProfessionalServices from "../../services/professional.services"

const professionalList = () => {

    const [professionals, setProfessionals] = useState([])

    useEffect(() => loadProfesional(), [])

    const loadProfesional = () => {
        ProfessionalServices
            .getAllProfessionals(professionals)
            .then(({ data }) => setProfessionals(data))
            .catch(err => console.log(err))
    }

    return (
        professionals.map(professional => {
            return (
                <ProfessionalCard  {...professional} key={professional._id} />
            )
        })
    )
}

export default professionalList