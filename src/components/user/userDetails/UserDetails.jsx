import React from 'react';
import { Link } from 'react-router';


const UserDetails = ({user}) => {
    const {id,name,username,phone} = user;
    

    const useStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '10px'
    }

    
    return (
        <div style={useStyle}>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <h3>{phone}</h3>
            <Link to={`/user/${id}`}>user Details</Link>
        </div>
    );
};

export default UserDetails;