import Axios from "../configs/axios.config";

export const getWards = ()=> Axios.get("/wards")
