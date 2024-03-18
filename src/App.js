import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainRoute from "./views/routes/MainRoute";
import Home from "./views/main/home/Home";
import AuthRoute from "./views/routes/AuthRoute";
import Login from "./views/auth/photographer/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainRoute/>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route path="/auth" name="login" element={<AuthRoute/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
