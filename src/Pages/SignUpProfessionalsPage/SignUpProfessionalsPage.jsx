import SignUpFormProfessional from '../../components/SignUpFormProfessional/SignUpFormProfessional'
import { Container } from "react-bootstrap"
import './../../Pages/SignUpProfessionalsPage/SignupProfessoinalsPage.css'

function SignUpFormProfessionalPage() {

    return (
        <div className="SignupProfessinalsPage">

            <Container>

                <h1 className="titleSignupProfessinalsPage">Regístrate como veterinario:</h1>

                <SignUpFormProfessional />

            </Container>

        </div>
    )
}

export default SignUpFormProfessionalPage