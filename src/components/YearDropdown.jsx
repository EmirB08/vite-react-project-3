import { useContext } from "react";
import { UserContext } from "./UserContext";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const YearDropdown = () => { 
    const { setYear } = useContext(UserContext); // tar inn setYear funksjonen fra UserContext med useContext hook

    const years = []; // lager tomt array for å fylle med årstall
    for (let year = 2024; year >= 1995; year--) { // for loop som genererer årstall fra 2024 til 1995
        years.push(year); // legger til hvert årstall i det tomme arrayet
    }

    return (
        <Select placeholder="Velg år">
            {years.map((year) => (
                <Option key={year} value={year} onClick={() => setYear(year.toString())}> 
                {year}
                </Option>
            ))}
        </Select>
    );
};

export default YearDropdown;






