import { useEffect, useState } from "react"
import axios from 'axios'
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard'

const VITE_SERVER_URL = "http://localhost:5005"


const professionalList = () => {

    const [professionals, setProfessionals] = useState([])

    useEffect(() => loadProfesional(), [])

    const loadProfesional = () => {
        axios
            .get(`${VITE_SERVER_URL}/api/professionals`)
            .then(({ data }) => setProfessionals(data))
            .catch(err => console.log(err))
    }

    return (
        professionals.map((professional, index) => {
            return (
                <ProfessionalCard  {...professional} key={index} />
            )
        })
    )


}
export default professionalList
