import SignUpFormProfessional from '../../components/SignUpFormProfessional/SignUpFormProfessional'
import './../../Pages/SignUpProfessionalsPage/SignupProfessoinalsPage.css'
import { Container } from "react-bootstrap"

function SignUpFormProfessionalPage() {

    return (
        <Container className="SignupProfessinalsPage">
            <span className='profFormTitle'>Regístrate como <span className='profFormTitle1'>veterinario:</span></span>
            <div className="form">
                <SignUpFormProfessional />
            </div>
        </Container>
    )
}

export default SignUpFormProfessionalPage