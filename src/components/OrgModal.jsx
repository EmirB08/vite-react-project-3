import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";
import Table from "@mui/joy/Table";

const OrgModal = ({ open, onClose, organization }) => {
    if (!organization) return null;

    const orgDetails = [
        { label: "Organisasjonsnummer", value: organization.organisasjonsnummer },
        { label: "Stiftelsesdato", value: organization.stiftelsesdato },
        { label: "Adresse", value: organization.forretningsadresse?.adresse?.join(', ') },
        { label: "Organisasjonsform", value: organization.organisasjonsform?.beskrivelse },
        { label: "Næringskode", value: organization.naeringskode1?.beskrivelse },
        { label: "Ansatte", value: organization.antallAnsatte },
        { label: "Foretaksregisteret", value: organization.registrertIForetaksregisteret ? "Ja" : "Nei" },
        { label: "Frivillighetsregisteret", value: organization.registrertIFrivillighetsregisteret ? "Ja" : "Nei" },
        { label: "Konkurs", value: organization.konkurs ? "Ja" : "Nei", true: organization.konkurs },
    ];

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog>
                <ModalClose />
                <Typography level="h4" component="h2" sx={ { mt: 1.5 }}>{organization.navn}
                </Typography>
                
                <Box sx={{ mt: 1, }}>
                    <Table stripe="odd" hoverRow>
                        <tbody>
                            {orgDetails.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <Typography sx={{ fontWeight: 'bold' }}>{item.label}
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography sx={{ color: item.true ? "#ff0000" : "inherit", fontWeight: item.true ? "bold" : "inherit"}}>
                                        {item.value}
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Box>
            </ModalDialog>
        </Modal>
    );
};

OrgModal.propTypes = {
    open: PropTypes.bool,  
    onClose: PropTypes.func,
    organization: PropTypes.object
};

export default OrgModal;

``

