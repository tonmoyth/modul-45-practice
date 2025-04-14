import React, { useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router';

const UserDatail = () => {
    const userDetails = useLoaderData();
    const {name,phone} = userDetails;
    const [openHome,setOpenHome] = useState(false);

   

    const navigate = useNavigate();
    if(openHome){
        return <Navigate to={'/'}></Navigate>
    }
    return (
        <div className='border p-4'>
            <h1>{name}</h1>
            <p>{phone}</p>
            <button onClick={() => navigate(-1)}>Back</button>

            <button onClick={() => setOpenHome(true)}>Home</button>

        </div>
    );
};

export default UserDatail;