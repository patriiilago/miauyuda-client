import SignUpFormProfessional from '../../components/SignUpFormProfessional/SignUpFormProfessional'
import { Container } from "react-bootstrap"

function SignUpFormProfessionalPage() {

    return (
        <div className="SignupProfessinalsPage">

            <Container>

                <h1>Signup</h1>

                <SignUpFormProfessional />

            </Container>

        </div>
    )
}

export default SignUpFormProfessionalPage;