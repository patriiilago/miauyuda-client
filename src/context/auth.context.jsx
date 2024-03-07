import React, { useState, useEffect } from "react"

const API_URL = 'http://localhost:5005'

const AuthContext = React.createContext();


function AuthProviderWrapper(props) {

    useEffect(() => authenticateUser(), [])

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // const storeToken = tokenValue => {
    //     localStorage.setItem('authToken', tokenValue)
    // }

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken');


        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser(data)
                    setIsLoading(false)
                })
                .catch(err => logout())
        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setUser(null)
        setIsLoading(false)
    }

    useEffect(() => {
        authenticateUser()
    }, [])



    return (
        <AuthContext.Provider value={{ authenticateUser, user, logout, setIsLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }