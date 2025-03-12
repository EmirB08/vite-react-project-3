import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/joy/Table";
import OrgModal from "./OrgModal";
import Input from "@mui/joy/Input";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/joy/Stack";
import PropTypes from "prop-types";

const DataTable = ({ activeKommuneCode, activeYear }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [activeKommuneCode, activeYear]);

    const {
        data: enheter,
        isLoading,
        isError,
    } = useFetchData(activeKommuneCode, activeYear);

    if (isError) return <div>Error loading data.</div>;
    if (isLoading)
        return (
            <div className="loading-animation">
                <CircularProgress />
            </div>
        );

    const filterEnheter = enheter.filter((enhet) => {
        const search = searchInput.toLowerCase();
        return (
            enhet.navn.toLowerCase().includes(search) ||
            enhet.organisasjonsnummer.toString().includes(search) ||
            (enhet.stiftelsesdato &&
                enhet.stiftelsesdato.toLowerCase().includes(search))
        );
    });

    const rowsPerPage = 50;
    const pageCount = Math.ceil(filterEnheter.length / rowsPerPage);
    const changePage = (event, newPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const displayData = filterEnheter.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    return (
        <>
            <Input
                sx={{ mt: 1, mb: 1 }}
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                    setPage(1);
                }}
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
                    {displayData.map((enhet) => (
                        <tr
                            key={enhet.organisasjonsnummer}
                            onClick={() => {
                                setSelectedOrg(enhet);
                                setModalOpen(true);
                            }}
                            style={{
                                backgroundColor: enhet.konkurs ? "#ff0000" : "",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            <td>{enhet.navn}</td>
                            <td>{enhet.organisasjonsnummer}</td>
                            <td>{enhet.stiftelsesdato}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ mt: 1 }}
            >
                <Pagination count={pageCount} page={page} onChange={changePage} />
            </Stack>
            <OrgModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                organization={selectedOrg}
            />
        </>
    );
};

DataTable.propTypes = {
    activeKommuneCode: PropTypes.string.isRequired,
    activeYear: PropTypes.string.isRequired,
};

export default DataTable;
