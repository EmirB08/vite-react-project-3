import { useContext, useState, useEffect } from 'react';
import { DataContext } from './DataContext';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const KommunerDropdown = () => {
    const { setKommuneCode } = useContext(DataContext);
    const [kommuner, setKommuner] = useState([]);

    useEffect(() => {
        fetch("https://data.ssb.no/api/klass/v1/versions/1847.json")
            .then(response => response.json())
            .then(data => {
                setKommuner(data.classificationItems);
            });
    }, []);

    const handleSelectKommune = (code) => {
        console.log(code);
        setKommuneCode(code);
    };

    return (
        <Select placeholder="Velg en kommune">
            {kommuner.map(({ code, name }) => (
                <Option key={code} value={code} onClick={() => handleSelectKommune(code)}>
                    {name}
                </Option>
            ))}
        </Select>
    );
};

export default KommunerDropdown;


