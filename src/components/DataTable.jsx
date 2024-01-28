import { useContext } from 'react';
import { DataContext } from './DataContext';
import useSWR from 'swr';
import Table from '@mui/joy/Table';
import CircularProgress from '@mui/material/CircularProgress';

const fetcher = url => fetch(url).then(res => res.json());

const DataTable = () => {
    const { kommuneCode, year } = useContext(DataContext);
    const url = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommuneCode}&fraRegistreringsdatoEnhetsregisteret=${year}-01-01&tilRegistreringsdatoEnhetsregisteret=${year}-12-31&size=9999`;
    const { data, error } = useSWR(url, fetcher);

    if (error) return <div>Error loading data.</div>;
    if (!data) return (
        <div className="loading-animation">
            <CircularProgress />
        </div>
    );

    if (!data._embedded || !data._embedded.enheter) {
        return <div>No data available for the selected kommune and year.</div>;
    }

    const entries = data._embedded.enheter;

    return (
        <Table stripe="odd">
            <thead>
                <tr>
                    <th>Enhet</th>
                    <th>Organisasjonsnummer</th>
                    <th>Stiftelsesdato</th>
                </tr>
            </thead>
            <tbody>
                {entries.map(entry => (
                    <tr key={entry.organisasjonsnummer}>
                        <td>{entry.navn}</td>
                        <td>{entry.organisasjonsnummer}</td>
                        <td>{entry.stiftelsesdato}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;
