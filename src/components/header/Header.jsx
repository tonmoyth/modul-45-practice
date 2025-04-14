import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'
const Header = () => {
    return (
        <div className='bg-yellow-300'>
            <div><h1 className='text-center'>this is header</h1></div>
            <ul className='flex gap-4 justify-center'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
                <li><NavLink to="/todos">Todos</NavLink></li>
                <li><NavLink to="/posts">posts</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;