import { createContext, useContext, useState } from "react";

export const drumPadContext = createContext()

export function useDrumPad() {
    const context = useContext(drumPadContext)
    return context
}

export function DrumPadProvider({ children }) {
    const [drumPad, setDrumPad] = useState()
    
    const value = {
        drumPad,
        setDrumPad
    }
    
    return <drumPadContext.Provider value={value}>{children}</drumPadContext.Provider>
}