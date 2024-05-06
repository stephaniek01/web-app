import Axios from "../configs/axios.config";

export const getPatientsList = ()=> Axios.get("/patients")

export const getPatientsListByWard = (id)=> Axios.get(`/patients-by-ward/${id}`)

export const getPatientsListByTeam = (id)=> Axios.get(`/patients-by-team/${id}`)

export const createPatient = (data)=> Axios.post("/patient", data)

