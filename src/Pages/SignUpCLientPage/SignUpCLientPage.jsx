import { Container } from "react-bootstrap"
import SignUpFormClient from '../../components/SignUpFormClient/SignUpFormClient'
import './../../Pages/SignUpCLientPage/SignupClientPage.css'



function SignupClientPage() {



    return (

        <Container className="signupClientPage">
            <span className="clientFormTitle">Registrarse como <span className="clientFormTitle1">cliente:</span></span>
            <div className="form">
                <SignUpFormClient />
            </div>
        </Container>

    )
}

export default SignupClientPage;