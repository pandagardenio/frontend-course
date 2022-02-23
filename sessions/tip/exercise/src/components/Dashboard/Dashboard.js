import { useState } from 'react';

import Box from '@mui/material/Box';

import DashboardContent from './DashboardContent';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';

import './Dashboard.css';

function Dashboard(props) {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const handleOnSectionChange = (section) => {
        props.onSectionChange(section);
    };

    return (
        <Box className='dashboard'>
            <DashboardHeader open={open} section={props.section} toggleOpen={toggleOpen}/>
            <DashboardSidebar
                section={props.section}
                onSectionChange={handleOnSectionChange}
                open={open}
                toggleOpen={toggleOpen}
            />
            <DashboardContent>
                {props.children}
            </DashboardContent>
        </Box>
    );
}

export default Dashboard;
