import { useState } from 'react';
import './App.css';

import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

function App() {
    const [selectedContactName, setSelectedContactName] = useState('');

    const handleOnContactClick = (contactName) => {
        setSelectedContactName(contactName);
    };

    const handleOnContactDetailsClose = () => {
        setSelectedContactName('');
    };

    return (
        <div className="main">
            <div className="header">
                <h1 className="header__title">My contact list</h1>
            </div>
            <ContactList onContactClick={handleOnContactClick}/>
            <ContactDetails onClose={handleOnContactDetailsClose} contactName={selectedContactName}/>
            <div className="footer">
                Made with ❤ in Madrid
            </div>
        </div>
    );
}

export default App;
