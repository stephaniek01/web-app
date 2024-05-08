import Axios from "../configs/axios.config";

export const getTeams = ()=> Axios.get("/teams")
export const createTeam = (data)=> Axios.post("/team", data)
