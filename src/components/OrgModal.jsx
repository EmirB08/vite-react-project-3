import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";

const OrgModal = ({ open, onClose, organization }) => {
    if (!organization) return null;
    return (
    <Modal open={open} onClose={onClose}>
    <ModalDialog sx={{ 
                    mt: 1,
                    backgroundColor: organization.konkurs ? "#ff726f" : "",
                    }}>
        <ModalClose />
        <Typography level="h4" component="h2">{organization.navn}</Typography>
        
        <Box sx={{ mt: 1 }}>
        <Typography>Organisasjonsnummer: {organization.organisasjonsnummer}</Typography>
        <Typography>Organisasjonsform: {organization.organisasjonsform?.beskrivelse}</Typography>
        <Typography>Næringskode: {organization.naeringskode1?.beskrivelse}</Typography>
        <Typography>Stiftet: {organization.stiftelsesdato}</Typography>
        <Typography>Adresse: {organization.forretningsadresse?.adresse?.join(", ")}</Typography>
        <Typography>Ansatte: {organization.antallAnsatte}</Typography>
        <Typography>Foretaksregisteret: {organization.registrertIForetaksregisteret ? "Ja" : "Nei"}</Typography>
        <Typography>Frivillighetsregisteret: {organization.registrertIFrivillighetsregisteret ? "Ja" : "Nei"}</Typography>
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

