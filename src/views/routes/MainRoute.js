import React from 'react'
import {Outlet} from 'react-router-dom';
import DefaultHeader from "../main/components/header/header";
import DefaultSidebar from "../main/components/sidebar/sidebar";

const MainRoute = () => {

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
