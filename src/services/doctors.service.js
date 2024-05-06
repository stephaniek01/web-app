import Axios from "../configs/axios.config";

export const getDoctorsList = ()=> Axios.get("/specialty/doctors")

export const createDoctor = (data)=>Axios.post("/doctor", data)

