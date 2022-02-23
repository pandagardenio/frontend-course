import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import data from '../data/CalendarChart.json';
import Chart from './Chart';

function Data(props) {
    return (
        <pre>
            {JSON.stringify(props.data, null, 2)}
        </pre>
    )
}

function Graphic() {
    return (
        <>
            <Chart title="Basic Calendar Chart">
                Here we are going to render our basic Calendar Chart graphic
            </Chart>
            <Chart title="Calendar Chart With legend">
                Here we are going to render our Calendar Chart with legend graphic
            </Chart>
        </>
    )
}

function CalendarChart() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (_event, tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Box>
                <Tabs value={activeTab} onChange={handleTabChange}>
                    <Tab label="Data"/>
                    <Tab label="Graphic"/>
                </Tabs>
            </Box>
            {activeTab === 0 && <Data data={data}/>}
            {activeTab === 1 && <Graphic data={data}/>}
        </>
    );
}

export default CalendarChart;
