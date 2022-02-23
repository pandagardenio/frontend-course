import { useState } from 'react';

import Dashboard from './components/Dashboard/Dashboard';

import BarChart from './components/BarChart';
import CalendarChart from './components/CalendarChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import RadialBarChart from './components/RadialBarChart';

function AppContent(props) {
    if (props.activeSection === 'Bar Chart') {
        return (
            <BarChart/>
        );
    } else if (props.activeSection === 'Pie Chart') {
        return (
            <PieChart/>
        );
    } else if (props.activeSection === 'Radar Chart') {
        return (
            <RadarChart/>
        );
    } else if (props.activeSection === 'Radial Bar Chart') {
        return (
            <RadialBarChart/>
        );
    } else if (props.activeSection === 'Calendar Chart') {
        return (
            <CalendarChart/>
        );
    }
}

function App() {
    const [activeSection, setActiveSection] = useState('Bar Chart');

    const handleOnSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <Dashboard section={activeSection} onSectionChange={handleOnSectionChange}>
            <AppContent activeSection={activeSection}/>
        </Dashboard>
    );
}

export default App;
