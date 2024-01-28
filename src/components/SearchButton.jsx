import { useContext } from 'react';
import { DataContext } from './DataContext';

const SearchButton = () => {
    const { kommuneCode, year } = useContext(DataContext);

    const handleSearch = () => {
        console.log(kommuneCode, year);
        if (!kommuneCode || !year) {
            alert('Please select both a kommune and a year.');
            return;
        }

        const url = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommuneCode}&fraRegistreringsdatoEnhetsregisteret=${year}-01-01&tilRegistreringsdatoEnhetsregisteret=${year}-12-31&size=9999`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            })
            
    };

    return (
        <button onClick={handleSearch}>Search</button>
    );
};

export default SearchButton;
