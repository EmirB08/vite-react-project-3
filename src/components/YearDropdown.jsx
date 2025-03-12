import { useContext } from "react";
import { UserContext } from "./UserContext";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const YearDropdown = () => {
  const { year, setYear } = useContext(UserContext); // tar inn year og setYear funksjonen fra UserContext

  const years = []; // lager tomt array for å fylle med årstall
  for (let y = 2024; y >= 1995; y--) {
    // for loop som genererer årstall fra 2024 til 1995
    years.push(y); // legger til hvert årstall i det tomme arrayet
  }

  return (
    <Select
      sx={{ mt: 0.5 }}
      placeholder="Velg år"
      value={year || ""}
      onChange={(_, newValue) => setYear(newValue)}
    >
      {years.map((y) => (
        <Option key={y} value={y.toString()}>
          {y}
        </Option>
      ))}
    </Select>
  );
};

export default YearDropdown;
