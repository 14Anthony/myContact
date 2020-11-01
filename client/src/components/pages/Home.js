import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'


const Home = () => {
    return (

        <div className="grid-2">
            <div>
                <ContactForm />
            </div>

            <div>
                <Contacts />
            </div>
        </div>

    )
}

export default Home
