import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import data from '../data/BarChart.json';
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
            <Chart title="Basic Bar Chart">
                Here we are going to render our basic BarChart graphic
            </Chart>
            <Chart title="Bar Chart With Axis">
                Here we are going to render our BarChart with axis graphic
            </Chart>
        </>
    )
}

function BarChart() {
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

export default BarChart;
