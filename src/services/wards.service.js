import Axios from "../configs/axios.config";

export const getWards = ()=> Axios.get("/specialty/wards")
export const getWardList = ()=> Axios.get("/wards")
