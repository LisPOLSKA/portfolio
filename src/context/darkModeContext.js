import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children, }) =>{
    const [darkMode, setDarkMode] = useState(
        true
    );

    const toggle = () =>{
        setDarkMode(true)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode", darkMode)
    },[darkMode])

    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}