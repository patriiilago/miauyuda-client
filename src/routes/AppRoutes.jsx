import { Routes, Route } from "react-router-dom"
import HomePage from "./../Pages/HomePage/HomePage"
import SignUpClientPage from '../Pages/SignUpCLientPage/SignUpCLientPage'
import ProfessionalsListPage from './../Pages/ProfessionalsListPage/ProfessionalsListPage'
import EmergenciesPage from './../Pages/EmergenciesPage/EmergenciesPage'
import EuthanasiaPage from './../Pages/EuthanasiaPage/EuthanasiaPage'
import EditFormPage from './../Pages/EditFormPage/EditFormPage'
import NewRequestPage from './../Pages/NewRequestPage/NewRequestPage'
import UserProfilePage from './../Pages/UserProfilePage/UserProfilePage'
import NotFoundPage from './../Pages/NotFoundPage/NotFoundPage'
import AboutUsPage from './../Pages/AboutUsPage/AboutUsPage'
import PrivateRoute from "./PrivateRoute"
import SignUpProfessionals from "./../Pages/SignUpProfessionalsPage/SignUpProfessionalsPage"
import PetFormPage from "../Pages/PetFormPage/PetFormPage"
import QuestionsPage from "../Pages/QuestionsPage/QuestionsPage"
import ProfessionalProfilePage from "./../Pages/ProfessionalProfilePage/ProfessionalProfilePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signupclient" element={<SignUpClientPage />} />
            <Route path="/signupprofessional" element={<SignUpProfessionals />} />
            <Route path="/euthanasia" element={<EuthanasiaPage />} />
            <Route path="/editform" element={<EditFormPage />} />
            <Route path="/newrequest" element={<NewRequestPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/petform" element={<PetFormPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/newrequest/profesional/:profesionalId" element={<NewRequestPage />} />
                <Route path="/userprofile" element={<UserProfilePage />} />
                <Route path="/professionalprofile/:professionalprofileId" element={<ProfessionalProfilePage />} />
                <Route path="/professionals" element={<ProfessionalsListPage />} />
                <Route path="/emergencies" element={<EmergenciesPage />} />

            </Route>

            <Route path="/about" element={<AboutUsPage />} />
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes