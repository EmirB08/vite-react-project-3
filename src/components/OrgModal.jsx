import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";

const OrgModal = ({ open, onClose }) => {

return (
    <Modal open={open} onClose={onClose}>
    <ModalDialog>
    <ModalClose />
        <Typography level="h4" component="h2">TEST</Typography>
        
        <Box sx={{ mt: 2 }}>
    
        </Box>
    </ModalDialog>
    </Modal>
);
};

OrgModal.propTypes = {
    open: PropTypes.bool,  
    onClose: PropTypes.func, 
};

export default OrgModal;
