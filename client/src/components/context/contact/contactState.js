import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types'
const ConstactState = props => {
    const initialState = {
        contacts: [
            {
                _id: '1',
                name: 'Travis',
                email: 'travis@travis.com',
                phone: '111-111-1111',
                type: 'business',

            },
            {
                _id: '2',
                name: 'Anthony',
                email: 'Anthony@Anthony.com',
                phone: '111-111-1112',
                type: 'business',

            },
            {
                _id: '3',
                name: 'Kerishma',
                email: 'K@kerishma.com',
                phone: '111-111-1113',
                type: 'personal',

            },
            {
                _id: '4',
                name: 'Kevin',
                email: 'K@Kevin',
                phone: '111-111-1114',
                type: 'personal',

            },
            {
                _id: '5',
                name: 'Daniel',
                email: 'Daniel@Daniel',
                phone: '111-111-1115',
                type: 'business',

            },
            {
                _id: '6',
                name: 'mike',
                email: 'mike@mike',
                phone: '111-111-1116',
                type: 'business',

            },
        ]
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);
    // add contact


    // delete contact

    // set current contact

    // clear current Contact

    // Update Contact

    // Filter Contact

    // Clear Filter

    return (

        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )




};







export default ConstactState
