import { createContext, useState } from "react";
import localStorage from "../common/utils/localStorage";

export const UserContext = createContext({
  user: {
    token: null,
    isAuthenticated: true,
  },
  login: (data, type) => {},
  logout: () => {},
});

const INITIAL_STATE = {
  token: null,
  isAuthenticated: true,
};

const initialState = () => {
  const token ="";
    // sessionStorage.getItem("token") || localStorage.getItem("token");
  return INITIAL_STATE;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const login = (data, type) => {
    if (type) {
      // sessionStorage.setItem('user', data.user);

      sessionStorage.setItem("token", data.token);
      // const decoded: any = jwt_decode(data.token);

    } else {
      // localStorage.setItem('user', data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "username",
      );
    }
    setUser({
      token: data.token,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setUser({ ...INITIAL_STATE });
  };

  return (
    <UserContext.Provider value={{ user, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};
