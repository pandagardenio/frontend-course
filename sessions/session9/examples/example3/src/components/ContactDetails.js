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

    useEffect(() => {
        if (props.contactName) {
            fetch('https://mscbt-luis-grande.herokuapp.com/session7/contacts/' + props.contactName)
            .then(response => response.json())
            .then(data => {
                setContactDetails(data);
            })
        }
    }, [props.contactName]);

    return (
        <div className="contact-details" id="contact-details">
            <div id="contact-details-content">
                <ContactDetailsInfo contactDetails={contactDetails}/>
            </div>
        </div>
    );
}

export default ContactDetails;
