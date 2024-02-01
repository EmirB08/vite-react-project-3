import { useContext, useState } from "react";
import { DataContext } from "./DataContext";
import DataTable from "./DataTable";
import Button from "@mui/joy/Button";

const SearchButton = () => {
    const { kommuneCode, year } = useContext(DataContext);
    const [showDataTable, setShowDataTable] = useState(false);

    const handleButtonClick = () => {
        console.log(kommuneCode, year);
        setShowDataTable(true);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Søk enhetsregisteret - kommune</Button>
            {showDataTable && <DataTable />}
        </div>
    );
};

export default SearchButton;
