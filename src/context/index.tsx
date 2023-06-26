import React, { createContext, useState } from "react";
import { apis, USER_OBJECT } from "../services";

interface InitialState {
  user: Object,
  setUser: React.Dispatch<any>
}

const initialState: InitialState = {
  user: {},
  setUser: () => { }
}

export const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
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
