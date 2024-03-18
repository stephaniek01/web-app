import React from 'react'
import {Outlet} from 'react-router-dom';

const MainRoute = () => {

    return (
        <div className="mainPage">
            <Outlet/>
        </div>
    )
};

export default MainRoute;
