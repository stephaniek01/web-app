import Axios from "../configs/axios.config";

export const getGradeList = ()=> Axios.get("/grades")

