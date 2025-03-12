import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import DataTable from "./DataTable";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const SearchButton = () => {
  const { kommuneCode, year, setKommuneCode, setYear } =
    useContext(UserContext); // tar inn kommuneCode og year fra UserContext med useContext hook
  const [showDataTable, setShowDataTable] = useState(false); // setter showDataTable til false som default
  const [showWarning, setShowWarning] = useState(false); // setter showWarning til false som default
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  // Track active search parameters (the ones actually being used for search)
  const [activeKommuneCode, setActiveKommuneCode] = useState(null);
  const [activeYear, setActiveYear] = useState(null);

  const searchEnabled = kommuneCode && year; // sjekker om kommuneCode og year er satt

  // On initial page load, show data for Bergen kommune and 2024
  useEffect(() => {
    if (isInitialLoad) {
      // Set values for Bergen kommune and 2024
      setKommuneCode("4601"); // Bergen kommune
      setYear("2024");

      // Also set the active search parameters
      setActiveKommuneCode("4601");
      setActiveYear("2024");

      // Show the data table
      setShowDataTable(true);

      // Mark initial load as complete
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, setKommuneCode, setYear]);

  const buttonClick = () => {
    if (searchEnabled) {
      // Update the active search parameters only when button is clicked
      setActiveKommuneCode(kommuneCode);
      setActiveYear(year);
      setShowDataTable(true);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <div className="search-button">
        <Button sx={{ mt: 1 }} onClick={buttonClick}>
          Søk enhetsregisteret - kommune
        </Button>
        {showWarning && (
          <Typography
            sx={{ color: "#ff0000", fontWeight: "bold", fontSize: "12px" }}
          >
            Vennligst velg både kommune og år!
          </Typography>
        )}
      </div>
      {showDataTable && (
        <DataTable
          activeKommuneCode={activeKommuneCode}
          activeYear={activeYear}
        />
      )}
    </div>
  );
};

export default SearchButton;
