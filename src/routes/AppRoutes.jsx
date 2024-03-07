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
import PrivateRoute from "./PrivateRoute"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/professionals" element={<ProfessionalsListPage />} />
            <Route path="/emergencies" element={<EmergenciesPage />} />
            <Route path="/euthanasia" element={<EuthanasiaPage />} />
            <Route path="/editform" element={<EditFormPage />} />
            <Route path="/newrequest" element={<NewRequestPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/userprofile" element={<UserProfilePage />} />
            </Route>

            <Route path="/about" element={<AboutUsPage />} />
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes