import { useContext } from "react";
import { UserContext } from "./UserContext";
import useSWR from "swr";
import Table from "@mui/joy/Table";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import OrgModal from "./OrgModal";
import Input from "@mui/joy/Input";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/joy/Stack";


const fetcher = url => fetch(url).then(res => res.json()); // fetcher funksjon for useSWR

const DataTable = () => {
    const { kommuneCode, year } = useContext(UserContext); //tar inn kommuneCode og year fra UserContext via useContext hook
    const [modalOpen, setModalOpen] = useState(false); // setter useState for modalOpen til false som default
    const [selectedOrg, setSelectedOrg] = useState(null); // setter useState for selectedOrg til null som default
    const [searchInput, setSearchInput] = useState(""); // setter useState til tom string som default
    const [page, setPage] = useState(1);

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
            enhet.navn.toLowerCase().includes(search) ||
            enhet.organisasjonsnummer.toString().includes(search) ||
            (enhet.stiftelsesdato && enhet.stiftelsesdato.toLowerCase().includes(search))
        );
    });
    
    const rowsPerPage = 40; // pagination
    const pageCount = Math.ceil(filterEnheter.length / rowsPerPage);
    const changePage = (event, newPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    const displayData = filterEnheter.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <>
            <Input sx={{ mt: 1, mb: 1}} value={searchInput} onChange={e => setSearchInput(e.target.value)}
                    placeholder="Søk etter navn, org.nr eller stiftelsesdato" />     
            <Table stripe="odd" hoverRow>
                <thead><tr><th>Navn</th><th>Org.nr</th><th>Stiftelsesdato</th></tr></thead>
                <tbody>
                    {displayData.map(enhet => (
                        <tr key={enhet.organisasjonsnummer} onClick={() => { setSelectedOrg(enhet); setModalOpen(true); }}
                            style={{ backgroundColor: enhet.konkurs ? "#ff0000" : "", cursor: "pointer", fontWeight: enhet.konkurs ? "bold" : "inherit", }}>
                            <td>{enhet.navn}</td><td>{enhet.organisasjonsnummer}</td><td>{enhet.stiftelsesdato}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 1 }}>
                <Pagination count={pageCount} page={page} onChange={changePage} />
            </Stack> 
            <OrgModal open={modalOpen} onClose={() => setModalOpen(false)} organization={selectedOrg} />
        </>
    );
};

export default DataTable;
