import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashBoardLayout = () => {
    return (
        <div className='flex relative min-h-screen'>
            <Sidebar></Sidebar>
            <div className='flex-1 md:ml-64'><Outlet /></div>
        </div>
    );
};

export default DashBoardLayout;
