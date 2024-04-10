import React from 'react'
import {Outlet} from 'react-router-dom';

const AuthRoute = ({}) => {
    return (
        <div className="w-full h-screen bg-red-100 banner flex justify-center items-center bg-after">
            <div className={"z-10"}>
                <Outlet/>
            </div>
        </div>
    )
};

export default AuthRoute;
