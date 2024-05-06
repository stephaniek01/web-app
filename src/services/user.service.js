import Axios from "../configs/axios.config";

export const authUser = (data) => Axios.post(`/auth/admin-login`, data);
export const fetchUserManagement = (data) =>
  Axios.post(`/user/list`, data);
export const fetchUserName = (data) => Axios.post(`user/name-list`, data);
export const getUserManagement = (id) => Axios.get(`/user/${id}`);
export const deleteUser = (id) => Axios.put(`/user/delete-user/${id}`);

export const getUserDetails = (id) => Axios.get(`/user/details/${id}`);

export const forgotPassword = (email) =>
  Axios.post(`/auth/forgot-password`, email);
export const resetPassword = (token, email) =>
  Axios.put(`/auth/reset-password/${token}`, email);
export const changeAdminPassword = (data) =>
  Axios.post(`/user/update-password`, data);
