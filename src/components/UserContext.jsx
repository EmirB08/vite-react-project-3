import { createContext, useState } from "react";
import PropTypes from "prop-types"; 

export const UserContext = createContext();

/**
 * React context for å dele state mellom komponenter.
 * Verdier kan bli oppdaterert fra UserContext for alle komponenter under UserInput fra app.jsx
 * inneholder foreløpig kommuneCode og year.
 * Alle oppdateringer til values via setKommuneCode og setYear blir delt med alle komponenter som har tilgang til UserContext.
 * 
 * @param {Object} props - props for komponenten
 * @param {ReactNode} props.children - komponenter som skal ha tilgang til context values
 */

export const UserInput = ({ children }) => {
    const [kommuneCode, setKommuneCode] = useState(null);
    const [year, setYear] = useState(null);

    const value = { // konstruer et objekt med alle values og funksjoner som skal deles
        kommuneCode,
        setKommuneCode,
        year,
        setYear,
    };

    return ( 
        <UserContext.Provider value={value}> 
            {children}
        </UserContext.Provider>
    );
};

UserInput.propTypes = {
    children: PropTypes.node.isRequired,
};


