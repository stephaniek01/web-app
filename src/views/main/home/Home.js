import React, {useState} from 'react';
import {WardTable} from "./components/table/table";
import PageHeader from "../components/header/pageHeader";

const Home = (props) => {

    return (
       <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
           <PageHeader title={"Ward"}/>
           <WardTable/>
       </div>
    )
}

export default Home;
