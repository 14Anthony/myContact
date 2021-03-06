import React, { Fragment, Row, Col, useContext } from 'react'
import ContactItem from './ContactItem'

import ContactContext from '../context/contact/contactContext';
import ConstactState from '../context/contact/contactState';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext
    return (
        <Fragment>

            {contacts.map(contact => (
                // <h3>{contact.name}</h3>
                <ContactItem key={contact.id} contact={contact} />
            ))}

        </Fragment>


    )
}

export default Contacts
