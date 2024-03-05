import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import SignUpFormClient from './../../components/SignUpFormClient/SignUpFormClient'

const VITE_BASE_URL = "http://localhost:5005";

function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);



    const handleSignupSubmit = (e) => {

        e.preventDefault();

        const requestBody = { email, password, name };

        axios
            .post(`${VITE_BASE_URL}/api/auth/signup`, requestBody)
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };


    return (
        <div className="SignupPage">

            <SignUpFormClient />

        </div>
    )
}

export default SignupPage;