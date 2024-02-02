import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const KommunerDropdown = () => {
    const { setKommuneCode } = useContext(UserContext); // tar inn setKommuneCode fra UserContext med useContext hook
    const [kommuner, setKommuner] = useState([]); // setter useState for kommuner til tom array som default

    useEffect(() => {
        fetch("https://data.ssb.no/api/klass/v1/versions/1710.json")
            .then(response => response.json())
            .then(data => {
                const sortedKommuner = data.classificationItems.sort((a, b) => a.name.localeCompare(b.name)); // sorterer kommuner alfabetisk via localeCompare
                setKommuner(sortedKommuner); // setter kommuner til å være sorterte kommuner
            });
    }, []);

    return (
        <Select sx={{ mt: 0.5}}placeholder="Velg en kommune">
            {kommuner.map(({ code, name }) => (
                <Option key={code} value={code} onClick={() => setKommuneCode(code)}>
                    {name}
                </Option>
            ))}
        </Select>
    );
};

export default KommunerDropdown;


