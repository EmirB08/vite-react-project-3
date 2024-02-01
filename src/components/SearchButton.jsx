import { useContext, useState } from "react";
import { DataContext } from './DataContext';
import DataTable from "./DataTable";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const SearchButton = () => {
    const { kommuneCode, year } = useContext(DataContext);
    const [showDataTable, setShowDataTable] = useState(false);
    const searchEnabled = kommuneCode && year;
    const [showWarning, setShowWarning] = useState(false);

    const handleButtonClick = () => {
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
