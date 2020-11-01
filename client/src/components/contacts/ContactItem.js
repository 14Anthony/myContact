import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';
// import { badge } from 'react-bootstrap'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;

    return (

        <div className='card bg-light'>
            <h3 className="text-primary text-lefts">

                {name}{" "}<span style={{ float: 'left' }} className={'badge ' + (type === "professional" ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (<li>
                    <i className="fas fa-envelope-open"></i> {email}
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>)}

            </ul>
            <p>
                <button className="btn btn-success btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>

            </p>
        </div>
    );
};
// ContactItem.propTypes = {
//     contact: propTypes.object.isRequired
// };
export default ContactItem
