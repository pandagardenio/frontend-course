import { useState } from 'react';
import './App.css';

import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

function App() {
    const [selectedContactName, setSelectedContactName] = useState('');

    const handleOnContactClick = (contactName) => {
        setSelectedContactName(contactName);
    };

    return (
        <main className="main">
            <ContactList onContactClick={handleOnContactClick}/>
            <ContactDetails contactName={selectedContactName}/>
        </main>
    );
}

export default App;
