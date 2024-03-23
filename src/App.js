import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainRoute from "./views/routes/MainRoute";
import Home from "./views/main/home/Home";
import AuthRoute from "./views/routes/AuthRoute";
import CreateDoctor from "./views/auth/createPatient/Signup";
import CreatePatient from "./views/auth/createDoctor/signup";
import Login from "./views/auth/login/login";

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainRoute/>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route path="/auth" name="login" element={<AuthRoute/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/doctor" element={<CreateDoctor/>}/>
                    <Route path="/auth/patient" element={<CreatePatient/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
