import React from 'react';
import Home from '../Home/Home';
import { Outlet, useNavigation } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <aside className='bg-red-400 h-screen p-4'>
                    <h1>Side bar</h1>
                </aside>
                {isNavigating && <h1>Loading..</h1>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;