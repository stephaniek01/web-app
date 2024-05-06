import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom';
import DefaultHeader from "../main/components/header/header";
import DefaultSidebar from "../main/components/sidebar/sidebar";

const MainRoute = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("authToken")){
            navigate("/auth/login")
        }
    },[])

    return (
        <div className="flex h-screen overflow-hidden">
            <DefaultSidebar/>
            <div className={"w-[calc(100%-280px)] bg-gray-50"}>
                <DefaultHeader/>
                <Outlet/>
            </div>
        </div>
    )
};

export default MainRoute;
