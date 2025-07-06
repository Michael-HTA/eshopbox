import { useState,createContext,useContext } from "react";

const NavContext = createContext();

export function NavProvider({children}){

    const [isOpen,setIsOpen] = useState(false);

    return(
        <NavContext.Provider value={{isOpen,setIsOpen}}>
            {children}
        </NavContext.Provider>
    )
}

export function useNavContext() {
  return useContext(NavContext);
}
