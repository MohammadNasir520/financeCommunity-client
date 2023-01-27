import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { getStudentRole } from '../Api/StudentsApi';
import SmallSpinner from '../Components/Spinner/SmallSpinner';
import { AuthContext } from '../Context/AuthProvider';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashBoardLayout = () => {
    // const { user, } = useContext(AuthContext)

    // const [loading, setLoading] = useState(true)


    // const [role, setRole] = useState('')
    // console.log(role);

    // // fetching role
    // useEffect(() => {
    //     setLoading(true)

    //     getStudentRole(user?.email)
    //         .then(data => {
    //             setRole(data)
    //             getStudentRole(data)
    //             setLoading(false)
    //         })
    // }, [user?.email])


    const { user, loading, setLoading } = useContext(AuthContext)
    console.log(user);
    console.log(loading);
    const [role, setRole] = useState(null)
    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        // setLoading(true)
        getStudentRole(user?.email).then(data => {
            setRole(data)
            setLoading(false)
        })
    }, [user.email])

    if (loading) {
        return <SmallSpinner></SmallSpinner>
    }

    return (
        // <>
        //     {
        //         loading ? (<SmallSpinner></SmallSpinner>)
        //             :
        //             <div className='flex relative min-h-screen'>
        //                 <Sidebar role={role}></Sidebar>
        //                 <div className='flex-1 md:ml-64'><Outlet /></div>
        //             </div>
        //     }
        // </>

        <div className='relative min-h-screen md:flex'>
            {loading ? (
                ''
            ) : (
                <>
                    <Sidebar role={role} />
                    <div className='flex-1  md:ml-64'>
                        <div className='p-5'>
                            <Outlet />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashBoardLayout;
