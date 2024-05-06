import Axios from "../configs/axios.config";

export const getSpecialityList = ()=> Axios.get("/specialties")

