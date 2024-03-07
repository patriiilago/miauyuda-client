import SignUpFormClient from './../../components/SignUpFormClient/SignUpFormClient'
import { Container } from "react-bootstrap"

function SignupPage() {

    return (
        <div className="SignupPage">

            <Container>

                <h1>Signup</h1>

                <SignUpFormClient />

            </Container>

        </div>
    )
}

export default SignupPage;