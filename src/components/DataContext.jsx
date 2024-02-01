import { createContext, useState } from "react";
import PropTypes from "prop-types"; 

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [kommuneCode, setKommuneCode] = useState(null);
    const [year, setYear] = useState(null);

    const value = { // verdier som skal være tilgjengelig i context
        kommuneCode,
        setKommuneCode,
        year,
        setYear,
    };

    return ( // wrapper children til å få tilgang til context
        <DataContext.Provider value={value}> 
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


