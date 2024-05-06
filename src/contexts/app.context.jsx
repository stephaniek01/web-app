import { createContext, useState, useEffect } from "react";
export const AppContext = createContext({
  languages: [],
});

const INITIAL_STATE = {
  languages: [],
};

const initialState = () => {
  return INITIAL_STATE;
};

export const AppProvider = ({ children }) => {
  const [languages, setLanguages] = useState(initialState().languages);

  // const loadPublicData = () => {
  //   getPublicData().then((res) => {
  //     if (res && res.data.data) {
  //       // setCounties(res.data.data.counties);
  //       setLanguages(res.data.data.languages);
  //     }
  //   });
  // };

  useEffect(() => {
    // loadPublicData();
  }, []);

  return (
    <AppContext.Provider value={{ languages }}>{children}</AppContext.Provider>
  );
};
