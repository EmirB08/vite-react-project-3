import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";

const OrgModal = ({ open, onClose, organization }) => {
    return (
    <Modal open={open} onClose={onClose}>
    <ModalDialog>
        <ModalClose />
        <Typography level="h4" component="h2">{organization.navn}</Typography>
        
        <Box sx={{ mt: 1 }}>
        <Typography>Organisasjonsnummer: {organization.organisasjonsnummer}</Typography>
        <Typography>Stiftelsesdato: {organization.stiftelsesdato}</Typography>
        <Typography>Forretningsadresse: {organization.forretningsadresse?.adresse?.join(", ")}</Typography>
        <Typography>Organisasjonsform: {organization.organisasjonsform?.beskrivelse}</Typography>
        <Typography>Næringskode: {organization.naeringskode1?.beskrivelse}</Typography>
        <Typography>Antall Ansatte: {organization.antallAnsatte}</Typography>
        <Typography>Registrert i Foretaksregisteret: {organization.registrertIForetaksregisteret ? "Ja" : "Nei"}</Typography>
        <Typography>Registrert i Frivillighetsregisteret: {organization.registrertIFrivillighetsregisteret ? "Ja" : "Nei"}</Typography>
        <Typography>Konkurs: {organization.konkurs ? "Ja" : "Nei"}</Typography>
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

