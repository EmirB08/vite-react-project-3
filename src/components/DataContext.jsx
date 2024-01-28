import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [kommuneCode, setKommuneCode] = useState('');
    const [year, setYear] = useState('');

    const value = {
        kommuneCode,
        setKommuneCode,
        year,
        setYear,
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};


