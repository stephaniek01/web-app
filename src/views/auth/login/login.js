import React from 'react'
import DefaultInput from "../../components/inputs/defaultInput";
import DefaultButton from "../../components/buttons/defaultButton";
import SelectInput from "../../components/inputs/selectInput";
import {Link} from "react-router-dom";


const types = [
    {value: 'patient', label: 'Patient'},
    {value: 'doctor', label: 'Doctor'},
    {value: 'other', label: 'Other'},
];
const Login = (props) => {
    return (
        <div className="flex bg-black/40 flex-col p-4 w-[400px] rounded-md gap-2">
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-col items-center gap-1"}>
                    <span className={"text-xl font-medium text-white"}>Welcome to Bristol Care</span>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <DefaultInput label={"Username/Email"} placeholder={"Enter username/email"}/>
                    <DefaultInput label={"Enter Password"} type={"password"} placeholder={"Enter Password"}/>
                    <SelectInput label={"Are you Patient/Doctor?"} options={types}/>
                    <DefaultButton name={"Sign In"} classnames={"mt-4"} ancher link={"/"}/>
                    <div className={"text-center text-white text-sm"}>
                        <span>Don't have an account? Signup with
                            <Link to={"/auth/patient"} className={"px-1 text-blue-600"}>Patient</Link>
                            /
                            <Link to={"/auth/doctor"} className={"pl-1 text-blue-600"}>Doctor</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Login;
