import { useContext } from "react";
import { DataContext } from "./DataContext";
import useSWR from "swr";
import Table from "@mui/joy/Table";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import OrgModal from "./OrgModal";
import Input from '@mui/joy/Input';

const fetcher = url => fetch(url).then(res => res.json()); // fetcher funksjon for useSWR

const DataTable = () => {
    const { kommuneCode, year } = useContext(DataContext); //tar inn state for kommuneCode og year fra DataContext
    const [modalOpen, setModalOpen] = useState(false); 
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const url = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommuneCode}&fraRegistreringsdatoEnhetsregisteret=${year}-01-01&tilRegistreringsdatoEnhetsregisteret=${year}-12-31&size=9999`;
    const { data, error } = useSWR(url, fetcher); // bruker useSWR hook for å hente data fra url

    if (error) return <div>Error loading data.</div>;
    if (!data) return ( // hvis data ikke er lastet inn enda, returner loading animation
        <div className="loading-animation"> 
            <CircularProgress />
        </div>
    );

    const entries = data._embedded.enheter; // setter data._embedded.enheter til entries

    const handleOrgClick = (organization) => { // funksjon for å åpne modal og sette valgt org
        setSelectedOrg(organization);
        setModalOpen(true);
    }

    const filteredEntries = entries.filter(entry => {
        const query = searchQuery.toLowerCase();
        return (
            entry.navn.toLowerCase().includes(query) || 
            entry.organisasjonsnummer.toString().includes(query) ||
            (entry.stiftelsesdato && entry.stiftelsesdato.toLowerCase().includes(query))
        );
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <Input
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Søk etter navn, org.nr eller stiftelsesdato"
            />
            <Table stripe="odd" hoverRow>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Org.nr</th>
                        <th>Stiftelsesdato</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEntries.map(entry => (
                        <tr key={entry.organisasjonsnummer} onClick={() => handleOrgClick(entry)}
                            style={{ backgroundColor: entry.konkurs === true ? "#ff0000" : "", cursor: 'pointer',
                                     fontWeight: entry.konkurs === true ? "bold" : "inherit"
                            }}>
                            <td>{entry.navn}</td>
                            <td>{entry.organisasjonsnummer}</td>
                            <td>{entry.stiftelsesdato}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <OrgModal 
                open={modalOpen} 
                onClose={() => setModalOpen(false)} 
                organization={selectedOrg} 
            />
        </>
);
};

export default DataTable;
