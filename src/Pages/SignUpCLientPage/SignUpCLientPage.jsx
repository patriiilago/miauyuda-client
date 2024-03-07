import SignUpFormClient from '../../components/SignUpFormClient/SignUpFormClient'
import { Container } from "react-bootstrap"

function SignupClientPage() {

    return (
        <div className="SignupClientPage">

            <Container>

                <h1>Signup</h1>

                <SignUpFormClient />

            </Container>

        </div>
    )
}

export default SignupClientPage;