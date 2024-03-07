import { useContext } from "react"
import { AuthContext } from './../../context/auth.context'

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [professionals, setProfessionals] = useState([])

    useEffect(() => loadProfesional(), [])

    const loadProfesional = () => {
        ProfessionalServices
            .getAllProfessionals(professionals)
            .then(({ data }) => setProfessionals(data))
            .catch(err => console.log(err))

        return (
            <h1>Este es tu perfil {user.name}</h1>
        )
    }
}

export default UserProfilePage