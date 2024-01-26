import { useState, useEffect } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const KommunerDropdown = () => {
    const [kommuner, setKommuner] = useState([]);

    useEffect(() => {
        fetch("https://data.ssb.no/api/klass/v1/versions/1847.json")
            .then(response => response.json())
            .then(data => {
                setKommuner(data.classificationItems);
                console.log(data.classificationItems);
            });
    }, []);

    return (
        <Select placeholder="Velg en kommune">
            {kommuner.map(({ code, name }) => (
                <Option key={code} value={code}>{name}</Option>
                
            ))}
        </Select>
    );
};

export default KommunerDropdown;
