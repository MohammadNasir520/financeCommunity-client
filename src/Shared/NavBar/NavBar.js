import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const navMenuItems = <React.Fragment>
        <li> <NavLink to={'/home'}>Homepage</NavLink> </li>
        {/* <li> <NavLink to={'/'}>Portfolio</NavLink> </li> */}
        <li> <NavLink to={'/about'}>About</NavLink> </li>
        <li> <NavLink to={'/login'}>Login</NavLink> </li>
        <li> <NavLink to={'/SignUp'}> SignUp</NavLink> </li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Finance Community</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navMenuItems
                    }
                </ul>
            </div>

        </div>
    );
};

export default NavBar;