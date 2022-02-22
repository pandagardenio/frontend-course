import { useState, useEffect } from 'react';
import './ContactList.css';

function ContactList(props) {
    const [contacts, setContacts] = useState([]);

    const handleContactClick = (contactName) => {
        props.onContactClick(contactName)
    };

    useEffect(() => {
        fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts')
            .then(response => response.json())
            .then(contacts => contacts.filter(contact => contact.userName))
            .then(contacts => setContacts(contacts));
    }, []);

    return (
        <div className="contact-list">
            <ul className="contact-list__items">
                {contacts.map(contact => {
                    return (
                        <li className="contact-list__item" onClick={() => handleContactClick(contact.userName)}>
                            {contact.userName}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ContactList;
