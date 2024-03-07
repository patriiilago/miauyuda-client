import { useContext } from "react"
import { AuthContext } from './../../context/auth.context'

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <h1>Este es tu perfil {user.name}</h1>
    )
}

export default UserProfilePage