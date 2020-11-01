import React, { useState } from 'react'

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',

    })
    const { name, email, phone, type } = contact;

    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    return (
        <form>
            <h2 className="text-primary">Add Contact</h2>
            <input
                type='text'
                name='Name'
                value={name}
                onChange={onChange}
            />
            <input
                type='email'
                name='Email'
                value={email}
                onChange={onChange}
            />
            <input
                type='phone'
                name='Phone'
                value={phone}
                onChange={onChange}
            />

            <h5> Contact Type</h5>
            <input type="radio"
                name="type"
                value="peronal"
                checked={type === 'personal'} />Personal{"  "}

            <input type="radio"
                name="type"
                value="professional"
                checked={type === 'personal'} />Professional{"  "}

            <div>
                <input type='submit' value="Add Contact" className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm
