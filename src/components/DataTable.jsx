import { useContext } from "react";
import { DataContext } from "./DataContext";
import useSWR from "swr";
import Table from "@mui/joy/Table";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import OrgModal from "./OrgModal";

const fetcher = url => fetch(url).then(res => res.json());

const DataTable = () => {
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const { kommuneCode, year } = useContext(DataContext);
    const url = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommuneCode}&fraRegistreringsdatoEnhetsregisteret=${year}-01-01&tilRegistreringsdatoEnhetsregisteret=${year}-12-31&size=9999`;
    const { data, error } = useSWR(url, fetcher);

    if (error) return <div>Error loading data.</div>;
    if (!data) return (
        <div className="loading-animation">
            <CircularProgress />
        </div>
    );

    const entries = data._embedded.enheter;

    const handleOrgClick = (organization) => {
        setSelectedOrg(organization);
        setModalOpen(true);
    }

    return (
        <>
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
                    <tr key={entry.organisasjonsnummer} onClick={() => handleOrgClick(entry)}>
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
