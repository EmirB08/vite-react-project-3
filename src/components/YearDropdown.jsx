import { useContext } from 'react';
import { DataContext } from './DataContext';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const YearDropdown = () => {
    const { setYear } = useContext(DataContext);

    const handleSelectedYear = (year) => {
        console.log(year);
        setYear(year);
    };

    const years = [];
    for (let year = 2024; year >= 1994; year--) {
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






