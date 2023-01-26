import React from 'react';

import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useEffect } from 'react';
import { getStudentRole } from '../../../Api/StudentsApi';
import UserMenu from '../User/UserMenu';
import { Link, NavLink } from 'react-router-dom';
import AdminNavLink from '../Admin/AdminNavLink';
import { PhotoView } from 'react-photo-view';




const Sidebar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [role, setRole] = useState('')
    console.log(role);
    const [active, setActive] = useState(false)

    console.log(active);
    const handleToggle = () => {
        setActive(!active)
    }


    // fetching role
    useEffect(() => {
        getStudentRole(user?.email)
            .then(data => {

                setRole(data)
            })
    }, [user?.email])



    return (
        <div className='fixed '>
            {/* navbar for small screen */}
            < div className='flex w-full justify-between mt-2 md:hidden' >
                <div to='/' className='text-xl font-bold'>Finance Community</div>
                <div onClick={handleToggle}>
                    {
                        active ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            :

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                    }

                </div>
            </div >
            <div className={`  ${active && '-translate-x-full'}  md:translate-x-0  transition duration-500 ease-in-out`}>

                <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 ">
                    <h2 class="text-xl font-semibold text-center text-gray-800 dark:text-white hidden md:block">Finance Community</h2>

                    <div class="flex flex-col items-center mt-6 -mx-2">
                        <div className='flex '>
                            <PhotoView src={user?.photoURL}>

                                <img class="object-cover w-24 h-24 mx-2 rounded" src={user?.photoURL} alt="avatar" />

                            </PhotoView>


                            {/* Edit button */}

                            <Link to={`${user?.email}`}>
                                <svg

                                    className="w-6 h-6 mt-16 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </Link>


                        </div>

                        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user?.displayName}</h4>
                        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
                    </div>




                    {/* Nav link part */}
                    <div class="flex flex-col justify-between flex-1 mt-6">
                        <nav>
                            {



                                role === 'user' && <UserMenu></UserMenu>

                            }
                            {



                                role === 'requested' && <UserMenu></UserMenu>

                            }
                            {
                                role === 'admin' && <AdminNavLink></AdminNavLink>
                            }
                        </nav>
                        <div className='flex justify-between px-4'>
                            <NavLink to={'/'}>
                                <div className='font-bold w-10 text-center cursor-pointer  hover:bg-slate-300'>
                                    <svg className="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <p className=''> Home</p>
                                </div>
                            </NavLink>

                            <NavLink
                                onClick={logOut}
                                to={'/login'}
                            >
                                <div className='font-bold w-14 text-center cursor-pointer hover:bg-slate-300'>
                                    <svg className="w-6 h-6 mx-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    <p>LogOut</p>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;