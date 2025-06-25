import { useState,createContext,useContext } from "react";

const AppContext = createContext();

export function AppProvider({children}){

    const [isOpen,setIsOpen] = useState(false);

    return(
        <AppContext.Provider value={{isOpen,setIsOpen}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
  return useContext(AppContext);
}
