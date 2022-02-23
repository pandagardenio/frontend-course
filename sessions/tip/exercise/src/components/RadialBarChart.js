import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import data from '../data/RadialBarChart.json';
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
            <Chart title="Basic Pie Chart">
                Here we are going to render our basic Radial Bar Chart graphic
            </Chart>
            <Chart title="Pie Chart with options">
                Here we are going to render our Radia lBar Chart with options graphic
            </Chart>
        </>
    )
}

function RadialBarChart() {
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

export default RadialBarChart;
