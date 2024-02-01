import { createContext, useState } from "react";
import PropTypes from "prop-types"; 

export const UserContext = createContext();

/**
 * UserInput komponent gir context  som holder delte values for applikasjonen
 * verdier kan bli satt og hentet fra UserContext for alle komponenter under UserInput fra app.jsx
 * inneholder foreløpig kommuneCode og year.
 * 
 * @param {Object} props - props for komponenten
 * @param {ReactNode} props.children - komponenter under UserInput i komponenttreet deler values fra UserContext
 */

export const UserInput = ({ children }) => {
    const [kommuneCode, setKommuneCode] = useState(null);
    const [year, setYear] = useState(null);

    const value = { // lager et value object med props som skal bli delt med alle komponenter
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


