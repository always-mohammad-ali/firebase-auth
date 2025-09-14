import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <ul className='text-xl my-10'>
                <NavLink to='/home' className={({isActive}) => isActive ? "bg-red-300 mr-5 p-3 rounded-lg" : "mr-5"}>Home</NavLink>
                <NavLink to='/login' className={({isActive}) => isActive ? "bg-red-300 mr-5 p-3 rounded-lg" : "mr-5"}>Login</NavLink>
            </ul>
        </div>
    );
};

export default Header;