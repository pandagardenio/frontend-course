import { useEffect, useState } from 'react';
import './ContactDetails.css';

function ContactDetailsInfo(props) {
    if (props.contactDetails) {
        return Object.keys(props.contactDetails).map(contactKey => {
            return (
                <div>
                    <h3>{contactKey}</h3>
                    <p>{props.contactDetails[contactKey]}</p>
                </div>
            );
        });
    } else {
        return (
            <p>Click on a contact name to show contact details</p>
        );
    }
}

function ContactDetails(props) {
    const [contactDetails, setContactDetails] = useState(null);

    const handleOnClose = () => {
        props.onClose();
    };

    useEffect(() => {
        if (props.contactName) {
            fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts/' + props.contactName)
            .then(response => response.json())
            .then(data => {
                setContactDetails(data);
            })
        } else {
            setContactDetails(null);
        }
    }, [props.contactName]);

    let closeButtonClass = 'contact-details__close';

    if (contactDetails) {
        closeButtonClass += ' contact-details__close--visible';
    }

    return (
        <div className="contact-details">
            <button className={closeButtonClass} onClick={handleOnClose}>X</button>
            <ContactDetailsInfo contactDetails={contactDetails}/>
        </div>
    );
}

export default ContactDetails;
