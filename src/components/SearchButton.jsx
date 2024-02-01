import { useContext, useState } from "react";
import { DataContext } from './DataContext';
import DataTable from "./DataTable";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const SearchButton = () => { // funksjon for å vise tabellen og vise/skjule warning med useState via onClick
    const { kommuneCode, year } = useContext(DataContext); // henter ut kommuneCode og year fra DataContext
    const [showDataTable, setShowDataTable] = useState(false); // setter showDataTable til false som default
    const searchEnabled = kommuneCode && year; // sjekker om kommuneCode og year er satt
    const [showWarning, setShowWarning] = useState(false); // setter showWarning til false som default

    const handleButtonClick = () => { // if/else statement for å vise tabellen og vise warning
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
            <Button onClick={handleButtonClick}>Søk enhetsregisteret - kommune</Button>
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
