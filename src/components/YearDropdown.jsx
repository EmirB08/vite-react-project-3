import { useContext } from "react";
import { DataContext } from "./DataContext";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const YearDropdown = () => { 
    const { setYear } = useContext(DataContext); // henter ut setYear fra DataContext

    const handleSelectedYear = (year) => { // setter year til å være det valgte onClick årstallet
        setYear(year);
    };

    const years = []; // lager tomt array for å fylle med årstall
    for (let year = 2024; year >= 1995; year--) {
        years.push(year);
    }

    return (
        <Select placeholder="Velg år">
            {years.map((year) => (
                <Option key={year} value={year} onClick={() => handleSelectedYear(year.toString())}> 
                {year}
                </Option>
            ))}
        </Select>
    );
};

export default YearDropdown;






