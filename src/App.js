import React from 'react';
import './App.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainRoute from "./views/routes/MainRoute";
import Home from "./views/main/home/Home";
import AuthRoute from "./views/routes/AuthRoute";
import LoginPage from "./views/auth/login/login";
import SignupPage from "./views/auth/signup/signup";
import Teams from "./views/main/team/teams";
import TeamDetail from "./views/main/team/innerScreens/teamDetail";
import Doctor from "./views/main/doctor/doctor";
import DoctorDetail from "./views/main/doctor/innerScreens/doctorDetail";
import AllPatients from "./views/main/patients/patientPages/allPatients/allPatients";
import WardPatients from "./views/main/patients/patientPages/wardPatients/wardPatients";
import TeamPatients from "./views/main/patients/patientPages/teamPatients/teamPatients";
import PatientsDetail from "./views/main/patients/patientPages/detailScreens/patientsDetail";

const App = (props) => {
    return (
        <BrowserRouter>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<MainRoute/>}>
                    <Route index element={<Home/>}/>

                    <Route path={"/teams"} element={<Teams/>}/>
                    <Route path={"/teams/detail"} element={<TeamDetail/>}/>

                    <Route path={"/doctor"} element={<Doctor/>}/>
                    <Route path={"/doctor/detail"} element={<DoctorDetail/>}/>

                    <Route path={"/all-patients"} element={<AllPatients/>}/>
                    <Route path={"/all-patients/detail"} element={<PatientsDetail/>}/>

                    <Route path={"/ward-patients"} element={<WardPatients/>}/>

                    <Route path={"/team-patients"} element={<TeamPatients/>}/>
                </Route>
                <Route path="/auth" name="login" element={<AuthRoute/>}>
                    <Route path="/auth/login" element={<LoginPage/>}/>
                    <Route path="/auth/signup" element={<SignupPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
