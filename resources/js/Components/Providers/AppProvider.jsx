import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

    const [stateOrRegion, setStateOrRegion] = useState('');
    const [cityOrTown, setCityOrTown] = useState('');
    const [category, setCategory] = useState('');
    const [madeIn, setMadeIn] = useState('');
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [date, setDate] = useState('');


    return (
        <AppContext.Provider value={{ stateOrRegion, setStateOrRegion, cityOrTown, setCityOrTown, category, setCategory, madeIn, setMadeIn, maxPrice, setMaxPrice, minPrice, setMinPrice, searchTerm, setSearchTerm, date, setDate }}>
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContext() {
    return useContext(AppContext)
}

