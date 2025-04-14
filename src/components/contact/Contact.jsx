import React from 'react';
import './contact.css'
import { useNavigate } from 'react-router';
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className='contact-bg'>
            <h1>this is contact</h1>
            <button onClick={() => navigate(-1)}>Go Home</button>
        </div>
    );
};

export default Contact;