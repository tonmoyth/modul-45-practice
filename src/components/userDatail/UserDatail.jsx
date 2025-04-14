import React from 'react';
import { useLoaderData } from 'react-router';

const UserDatail = () => {
    const userDetails = useLoaderData();
    const {name,phone} = userDetails;
    return (
        <div className='border p-4'>
            <h1>{name}</h1>
            <p>{phone}</p>
        </div>
    );
};

export default UserDatail;