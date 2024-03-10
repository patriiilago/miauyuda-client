import { Container } from "react-bootstrap"
import SignUpFormClient from '../../components/SignUpFormClient/SignUpFormClient'
import './../../Pages/SignUpCLientPage/SignupClientPage.css'



function SignupClientPage() {



    return (

        <Container className="SignupClientPage">
            <h1>Registrarse como cliente:</h1>

            <SignUpFormClient />

        </Container>

    )
}

export default SignupClientPage;