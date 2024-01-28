import React from "react";
import { Box, Container } from "@mui/system";
import PropTypes from "prop-types";

const MainContainer = ({ children }) => {
    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Box sx={{ bgcolor: "#f8f8f8d8;", height:"100vh" }}>
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    );
}

MainContainer.propTypes = {
    children: PropTypes.node
};

export default MainContainer;
