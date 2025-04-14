import React from 'react';
import { useLoaderData } from 'react-router';
import UserDetails from './userDetails/UserDetails';

const User = () => {

    const userData = useLoaderData();
    
    return (
        <div className='grid grid-cols-3'>
            {
                userData.map(user => <UserDetails user={user} key={user.id}></UserDetails>)
            }
        </div>
    );
};

export default User;