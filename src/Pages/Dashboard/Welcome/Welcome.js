import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Welcome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='h-screen flex text-2xl font-bold items-center justify-center'>
            <p className='text-center'> Hey {user.displayName} <br /> Welcome to  Dashboard</p>
        </div>
    );
};

export default Welcome;