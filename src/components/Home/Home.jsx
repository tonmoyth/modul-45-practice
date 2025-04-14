import React from 'react';
import './home.css'
import { useNavigate } from 'react-router';
const Home = () => {

    const navigate = useNavigate();
    return (
        <div className='color'>
            <h1>This is Home</h1>
            <button onClick={() => navigate(`/contact`)}>Go Contact</button>
        </div>
    );
};

export default Home;