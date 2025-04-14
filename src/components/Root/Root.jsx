import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <aside className='bg-red-400 h-screen p-4'>
                    <h1>Side bar</h1>
                </aside>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;