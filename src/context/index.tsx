import React, { createContext, useEffect, useState, ReactNode } from "react";
import { apis, USER_OBJECT } from "../services";

interface InitialState {
  user: Object,
  setUser: React.Dispatch<any>
}

const initialState: InitialState = {
  user: {},
  setUser: () => { }
}

type props = {
  children: ReactNode
}
export const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_OBJECT) || "{}"));

  return (
    <AppContext.Provider
      value={{
        user,
        setUser
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
