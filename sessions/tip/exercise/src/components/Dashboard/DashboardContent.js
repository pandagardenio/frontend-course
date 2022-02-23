import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './DashboardContent.css';

function DashboardContent(props) {
    return (
        <Box
            component="main"
            className="dashboard-content"
        >
            <Container className="dashboard-content__container">
                {props.children}
            </Container>
        </Box>
    )
}

export default DashboardContent;
