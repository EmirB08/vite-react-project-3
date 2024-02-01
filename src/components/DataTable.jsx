import { useContext } from "react";
import { UserContext } from "./UserContext";
import useSWR from "swr";
import Table from "@mui/joy/Table";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import OrgModal from "./OrgModal";
import Input from '@mui/joy/Input';

const fetcher = url => fetch(url).then(res => res.json()); // fetcher funksjon for useSWR

const DataTable = () => {
    const { kommuneCode, year } = useContext(UserContext); //tar inn kommuneCode og year fra UserContext via useContext hook
    const [modalOpen, setModalOpen] = useState(false); // setter useState for modalOpen til false som default
    const [selectedOrg, setSelectedOrg] = useState(null); // setter useState for selectedOrg til null som default
    const [searchInput, setSearchInput] = useState(""); // setter useState for searchQuery til tom string som default

    const url = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommuneCode}&fraRegistreringsdatoEnhetsregisteret=${year}-01-01&tilRegistreringsdatoEnhetsregisteret=${year}-12-31&size=9999`;
    const { data, error } = useSWR(url, fetcher); // bruker useSWR hook for å hente data fra url via fetcher funksjon

    if (error) return <div>Error loading data.</div>; // hvis det er en error, returner error melding
    if (!data) return ( // hvis data ikke er lastet inn, returner loading animation
        <div className="loading-animation"> 
            <CircularProgress />
        </div>
    );

    const enheter = data._embedded.enheter; // setter data._embedded.enheter til enheter

    const filterEnheter = enheter.filter(enhet => { // filterer enheter basert på søkeord
        const search = searchInput.toLowerCase();
        return (
            enhet.navn.toLowerCase().includes(search) || // sjekker om enhet.navn eller enhet.organisasjonsnummer eller enhet.stiftelsesdato inneholder søkeordet
            enhet.organisasjonsnummer.toString().includes(search) ||
            (enhet.stiftelsesdato && enhet.stiftelsesdato.toLowerCase().includes(search))
        );
    });

    const updateData = (e) => { // oppdaterer searchInput med det som skrives inn i inputfeltet
        setSearchInput(e.target.value);
    };

    return (
        <>
            <Input
                value={searchInput}
                onChange={updateData}
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
                    {filterEnheter.map(enhet => (
                    <tr key={enhet.organisasjonsnummer} onClick={() => { setSelectedOrg(enhet); setModalOpen(true);}}
                        style={{
                        backgroundColor: enhet.konkurs === true ? "#ff0000" : "",
                        cursor: "pointer",
                        fontWeight: enhet.konkurs === true ? "bold" : "inherit",
                        }}
                    >
                        <td>{enhet.navn}</td>
                        <td>{enhet.organisasjonsnummer}</td>
                        <td>{enhet.stiftelsesdato}</td>
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
