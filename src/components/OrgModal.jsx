import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";

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
        { label: "Konkurs", value: organization.konkurs ? "Ja" : "Nei", special: organization.konkurs },
    ];

    return (
        <Modal open={open} onClose={onClose} size="lg">
            <ModalDialog sx={{ mb: 1, width: 'auto', maxWidth: '100%', overflow: 'wrap' }}>
                <ModalClose />
                <Typography level="h4" component="h2">{organization.navn}
                </Typography>
                
                <Box sx={{ mt: 1 }}>
                    <table>
                        <tbody>
                            {orgDetails.map((item, index) => (
                                <tr key={index}>
                                    <td><Typography sx={{ fontWeight: 'bold' }}>{item.label}:</Typography></td>
                                    <td><Typography sx={{ color: item.special ? '#ff0000' : 'inherit' }}>{item.value}</Typography></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

