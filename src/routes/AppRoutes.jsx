import { Routes, Route } from "react-router-dom"
import HomePage from "./../Pages/HomePage/HomePage"
import SignUpPage from './../Pages/SignUpPage/SignUpPage'
import ProfessionalsListPage from './../Pages/ProfessionalsListPage/ProfessionalsListPage'
import EmergenciesPage from './../Pages/EmergenciesPage/EmergenciesPage'
import EuthanasiaPage from './../Pages/EuthanasiaPage/EuthanasiaPage'
import EditFormPage from './../Pages/EditFormPage/EditFormPage'
import NewRequestPage from './../Pages/NewRequestPage/NewRequestPage'
import UserProfilePage from './../Pages/UserProfilePage/UserProfilePage'
import NotFoundPage from './../Pages/NotFoundPage/NotFoundPage'
import AboutUsPage from './../Pages/AboutUsPage/AboutUsPage'
import LoginPage from './../Pages/LoginPage/LoginPage'

const AppRoutes = () => {



    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/professionals" element={<ProfessionalsListPage />} />
            <Route path="/emergencies" element={<EmergenciesPage />} />
            <Route path="/euthanasia" element={<EuthanasiaPage />} />
            <Route path="/editform" element={<EditFormPage />} />
            <Route path="/newrequest" element={<NewRequestPage />} />
            <Route path="/userprofile" element={<UserProfilePage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/about" element={<AboutUsPage />} />

        </Routes>
    )
}

export default AppRoutes