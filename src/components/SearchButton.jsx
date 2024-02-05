import { useContext, useState } from "react";
import { UserContext } from './UserContext';
import DataTable from "./DataTable";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const SearchButton = () => { 
    const { kommuneCode, year } = useContext(UserContext); // tar inn kommuneCode og year fra UserContext med useContext hook
    const [showDataTable, setShowDataTable] = useState(false); // setter showDataTable til false som default
    const [showWarning, setShowWarning] = useState(false); // setter showWarning til false som default
    const searchEnabled = kommuneCode && year; // sjekker om kommuneCode og year er satt

    const buttonClick = () => { // if/else statement for toggle av showDataTable og showWarning
        if (searchEnabled) {
            setShowDataTable(true);
            setShowWarning(false);
        } else {
            setShowWarning(true);
        }
    };

    return (
    <div>
        <div className="search-button">
            <Button sx={{ mt: 1}} onClick={buttonClick}>Søk enhetsregisteret - kommune</Button>
            {showWarning && (
                <Typography sx={{ color: "#ff0000", fontWeight: "bold", fontSize: "12px"}}>
                    Vennligst velg både kommune og år!
                </Typography>
            )}
        </div>
        {showDataTable && <DataTable />}
        
    </div>
    );
};

export default SearchButton;
