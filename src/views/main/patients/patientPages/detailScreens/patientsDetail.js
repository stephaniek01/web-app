import React, {useState} from 'react';
import PageHeader from "../../../components/header/pageHeader";
import {AddHistoryModal} from "../../../components/modals/addHistoryModal";
import {DetailTable} from "./components/table/table";
import {AddTransferModal} from "../../../components/modals/addDischargeModal";
import {AddDischargeModal} from "../../../components/modals/addTransferModal";

const PatientsDetail = (props) => {
    const [openHistory, setOpenHistory] = React.useState(false);
    const [openTransfer, setOpenTransfer] = React.useState(false);
    const [openDischarge, setOpenDischarge] = React.useState(false);
    const handleOpenHistory = () => setOpenHistory(!openHistory);
    const handleOpenTransfer = () => setOpenTransfer(!openTransfer);
    const handleOpenDischarge = () => setOpenDischarge(!openTransfer);


    return (
        <div className={"bg-gray-100 w-full h-[calc(100vh-100px)] overflow-y-auto p-4"}>
            <PageHeader title={"Ethan Thompson"}/>
            <DetailContent/>
            <PageHeader title={"Care History"} open={openHistory} handleOpen={handleOpenHistory}/>

            <div className={"mt-4"}>
                <DetailTable/>
                <div className={"mt-4 flex gap-4"}>
                    <button className={"bg-themeColor text-white px-4 h-10 rounded-md "}
                    onClick={handleOpenTransfer}>
                        Transfer Ward
                    </button>
                    <button className={"bg-share text-white px-4 h-10 rounded-md "}
                    onClick={handleOpenDischarge}>
                        Discharge
                    </button>
                </div>
            </div>

            <AddHistoryModal open={openHistory} handleOpen={handleOpenHistory}/>
            <AddTransferModal open={openTransfer} handleOpen={handleOpenTransfer}/>
            <AddDischargeModal open={openDischarge} handleOpen={handleOpenDischarge}/>
        </div>
    )
}

const DetailContent = ({currentWard, consultant}) => {
    return (
        <div className={"flex flex-col gap-2"}>
            <span>Current Ward: {currentWard}</span>
            <span>Consultant Doctor: {consultant}</span>
        </div>
    )
}

export default PatientsDetail;
